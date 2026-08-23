// features/household/join_household_controller.dart
import 'dart:async';

import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/network/extract_error.dart';
import 'household_controller.dart';
import 'household_repository.dart';

class PendingInvite {
  const PendingInvite({
    required this.householdId,
    required this.householdName,
    required this.inviterName,
    required this.memberCount,
    required this.code,
  });

  final String householdId;
  final String householdName;
  final String inviterName;
  final int memberCount;
  final String code;

  factory PendingInvite.fromJson(Map<String, dynamic> json) {
    final household = json['household'] as Map<String, dynamic>;
    final inviter = json['inviter'] as Map<String, dynamic>;
    final count = household['_count'] as Map<String, dynamic>;
    return PendingInvite(
      householdId: household['household_id'] as String,
      householdName: household['name'] as String,
      inviterName: inviter['name'] as String,
      memberCount: count['members'] as int,
      code: json['code'] as String,
    );
  }
}

class SearchResult {
  const SearchResult({required this.householdId, required this.name});

  final String householdId;
  final String name;

  factory SearchResult.fromJson(Map<String, dynamic> json) {
    return SearchResult(
      householdId: json['household_id'] as String,
      name: json['name'] as String,
    );
  }
}

class JoinHouseholdState {
  const JoinHouseholdState({
    this.pendingInvite,
    this.pendingInviteDismissed = false,
    this.searchResults = const [],
    this.loading = false,
    this.searching = false,
    this.error,
    this.requestSent = false,
  });

  final PendingInvite? pendingInvite;
  final bool pendingInviteDismissed;
  final List<SearchResult> searchResults;
  final bool loading;
  final bool searching;
  final String? error;
  final bool requestSent;

  bool get showBanner => pendingInvite != null && !pendingInviteDismissed;

  JoinHouseholdState copyWith({
    PendingInvite? pendingInvite,
    bool? pendingInviteDismissed,
    List<SearchResult>? searchResults,
    bool? loading,
    bool? searching,
    String? error,
    bool? requestSent,
  }) {
    return JoinHouseholdState(
      pendingInvite: pendingInvite ?? this.pendingInvite,
      pendingInviteDismissed:
          pendingInviteDismissed ?? this.pendingInviteDismissed,
      searchResults: searchResults ?? this.searchResults,
      loading: loading ?? this.loading,
      searching: searching ?? this.searching,
      error: error,
      requestSent: requestSent ?? this.requestSent,
    );
  }
}

class JoinHouseholdController extends StateNotifier<JoinHouseholdState> {
  JoinHouseholdController(this._repository, this._householdController)
      : super(const JoinHouseholdState()) {
    _loadPendingInvite();
  }

  final HouseholdApi _repository;
  final HouseholdController _householdController;

  Future<void> _loadPendingInvite() async {
    try {
      final invites = await _repository.getPendingInvitations();
      if (invites.isNotEmpty) {
        state = state.copyWith(
          pendingInvite: PendingInvite.fromJson(invites.first),
        );
      }
    } catch (_) {
      // Non-critical: the join screen still works without the banner.
    }
  }

  void dismissBanner() {
    state = state.copyWith(pendingInviteDismissed: true);
  }

  Future<bool> acceptPendingInvite() async {
    final invite = state.pendingInvite;
    if (invite == null) return false;
    state = state.copyWith(loading: true, error: null);
    try {
      await _repository.acceptInvitation(invite.code);
      await _householdController.loadMine();
      return true;
    } on DioException catch (e) {
      state = state.copyWith(loading: false, error: extractError(e));
      return false;
    }
  }

  Future<bool> redeemCode(String code) async {
    state = state.copyWith(loading: true, error: null);
    try {
      await _repository.redeemInviteCode(code.trim().toUpperCase());
      await _householdController.loadMine();
      return true;
    } on DioException catch (e) {
      state = state.copyWith(loading: false, error: extractError(e));
      return false;
    }
  }

  Future<void> search(String query) async {
    if (query.trim().isEmpty) {
      state = state.copyWith(searchResults: [], searching: false);
      return;
    }
    state = state.copyWith(searching: true);
    try {
      final results = await _repository.search(query.trim());
      state = state.copyWith(
        searchResults: results.map(SearchResult.fromJson).toList(),
        searching: false,
      );
    } catch (_) {
      state = state.copyWith(searching: false);
    }
  }

  Future<bool> ask(String householdId) async {
    state = state.copyWith(loading: true, error: null);
    try {
      await _repository.requestToJoin(householdId);
      state = state.copyWith(loading: false, requestSent: true);
      return true;
    } on DioException catch (e) {
      state = state.copyWith(loading: false, error: extractError(e));
      return false;
    }
  }
}

final joinHouseholdControllerProvider =
    StateNotifierProvider.autoDispose<JoinHouseholdController, JoinHouseholdState>(
        (ref) {
  return JoinHouseholdController(
    ref.watch(householdRepositoryProvider),
    ref.watch(householdControllerProvider.notifier),
  );
});
