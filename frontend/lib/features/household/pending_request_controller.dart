// features/household/pending_request_controller.dart
import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/network/extract_error.dart';
import 'household_repository.dart';

class MyJoinRequest {
  const MyJoinRequest({
    required this.householdName,
    required this.ownerName,
    required this.createdAt,
  });

  final String householdName;
  final String ownerName;
  final DateTime createdAt;

  factory MyJoinRequest.fromJson(Map<String, dynamic> json) {
    final household = json['household'] as Map<String, dynamic>;
    final creator = household['creator'] as Map<String, dynamic>;
    return MyJoinRequest(
      householdName: household['name'] as String,
      ownerName: creator['name'] as String,
      createdAt: DateTime.parse(json['created_at'] as String),
    );
  }
}

class PendingRequestState {
  const PendingRequestState({
    this.request,
    this.loading = true,
    this.error,
    this.cancelled = false,
  });

  final MyJoinRequest? request;
  final bool loading;
  final String? error;
  final bool cancelled;

  PendingRequestState copyWith({
    MyJoinRequest? request,
    bool clearRequest = false,
    bool? loading,
    String? error,
    bool? cancelled,
  }) {
    return PendingRequestState(
      request: clearRequest ? null : (request ?? this.request),
      loading: loading ?? this.loading,
      error: error,
      cancelled: cancelled ?? this.cancelled,
    );
  }
}

class PendingRequestController extends StateNotifier<PendingRequestState> {
  PendingRequestController(this._repository) : super(const PendingRequestState()) {
    load();
  }

  final HouseholdApi _repository;

  Future<void> load() async {
    state = state.copyWith(loading: true, error: null);
    try {
      final data = await _repository.getMyJoinRequest();
      state = state.copyWith(
        request: data == null ? null : MyJoinRequest.fromJson(data),
        clearRequest: data == null,
        loading: false,
      );
    } on DioException catch (e) {
      state = state.copyWith(loading: false, error: extractError(e));
    }
  }

  Future<bool> cancel() async {
    state = state.copyWith(loading: true, error: null);
    try {
      await _repository.cancelMyJoinRequest();
      state = state.copyWith(loading: false, cancelled: true);
      return true;
    } on DioException catch (e) {
      state = state.copyWith(loading: false, error: extractError(e));
      return false;
    }
  }
}

final pendingRequestControllerProvider = StateNotifierProvider.autoDispose<
    PendingRequestController, PendingRequestState>((ref) {
  return PendingRequestController(ref.watch(householdRepositoryProvider));
});
