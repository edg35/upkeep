// features/household/household_settings_controller.dart
import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/network/extract_error.dart';
import 'household_repository.dart';

class Member {
  const Member({required this.userId, required this.name, required this.role});

  final String userId;
  final String name;
  final String role; // 'OWNER' | 'MEMBER'

  factory Member.fromJson(Map<String, dynamic> json) {
    return Member(
      userId: json['user_id'] as String,
      name: json['name'] as String,
      role: json['role'] as String,
    );
  }
}

class JoinRequestItem {
  const JoinRequestItem({
    required this.requesterId,
    required this.name,
    required this.email,
    required this.createdAt,
  });

  final String requesterId;
  final String name;
  final String email;
  final DateTime createdAt;

  factory JoinRequestItem.fromJson(Map<String, dynamic> json) {
    final requester = json['requester'] as Map<String, dynamic>;
    return JoinRequestItem(
      requesterId: requester['user_id'] as String,
      name: requester['name'] as String,
      email: requester['email'] as String,
      createdAt: DateTime.parse(json['created_at'] as String),
    );
  }
}

class HouseholdSettingsState {
  const HouseholdSettingsState({
    this.members = const [],
    this.joinRequests = const [],
    this.loading = true,
    this.error,
    this.actioningRequesterId,
  });

  final List<Member> members;
  final List<JoinRequestItem> joinRequests;
  final bool loading;
  final String? error;

  /// Requester id currently being approved/declined, for a per-row spinner.
  final String? actioningRequesterId;

  HouseholdSettingsState copyWith({
    List<Member>? members,
    List<JoinRequestItem>? joinRequests,
    bool? loading,
    String? error,
    String? actioningRequesterId,
    bool clearActioning = false,
  }) {
    return HouseholdSettingsState(
      members: members ?? this.members,
      joinRequests: joinRequests ?? this.joinRequests,
      loading: loading ?? this.loading,
      error: error,
      actioningRequesterId:
          clearActioning ? null : (actioningRequesterId ?? this.actioningRequesterId),
    );
  }
}

class HouseholdSettingsController extends StateNotifier<HouseholdSettingsState> {
  HouseholdSettingsController(this._repository, {required this.isOwner})
      : super(const HouseholdSettingsState()) {
    load();
  }

  final HouseholdApi _repository;
  final bool isOwner;

  Future<void> load() async {
    state = state.copyWith(loading: true, error: null);
    try {
      final results = await Future.wait([
        _repository.listMembers(),
        if (isOwner) _repository.listJoinRequests() else Future.value(<Map<String, dynamic>>[]),
      ]);
      state = state.copyWith(
        members: results[0].map(Member.fromJson).toList(),
        joinRequests: results[1].map(JoinRequestItem.fromJson).toList(),
        loading: false,
      );
    } on DioException catch (e) {
      state = state.copyWith(loading: false, error: extractError(e));
    }
  }

  Future<void> approve(String requesterId) async {
    state = state.copyWith(actioningRequesterId: requesterId);
    try {
      await _repository.approveJoinRequest(requesterId);
      await load();
    } on DioException catch (e) {
      state = state.copyWith(error: extractError(e), clearActioning: true);
    }
  }

  Future<void> decline(String requesterId) async {
    state = state.copyWith(actioningRequesterId: requesterId);
    try {
      await _repository.declineJoinRequest(requesterId);
      await load();
    } on DioException catch (e) {
      state = state.copyWith(error: extractError(e), clearActioning: true);
    }
  }
}

final householdSettingsControllerProvider = StateNotifierProvider.autoDispose
    .family<HouseholdSettingsController, HouseholdSettingsState, bool>((ref, isOwner) {
  return HouseholdSettingsController(
    ref.watch(householdRepositoryProvider),
    isOwner: isOwner,
  );
});
