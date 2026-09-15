import 'package:flutter_riverpod/flutter_riverpod.dart';

enum SyncStatus { idle, syncing, offline, error }

class SyncState {
  const SyncState({this.status = SyncStatus.idle, this.lastIssue});

  final SyncStatus status;

  /// A human-readable note about the most recent sync problem (e.g. an
  /// offline mutation that got dropped because the server rejected it).
  /// Cleared on the next fully-clean sync.
  final String? lastIssue;

  SyncState copyWith({SyncStatus? status, String? lastIssue, bool clearIssue = false}) {
    return SyncState(
      status: status ?? this.status,
      lastIssue: clearIssue ? null : (lastIssue ?? this.lastIssue),
    );
  }
}

class SyncStatusController extends StateNotifier<SyncState> {
  SyncStatusController() : super(const SyncState());

  void setSyncing() => state = state.copyWith(status: SyncStatus.syncing);

  void setOffline() => state = state.copyWith(status: SyncStatus.offline);

  void setIdleClean() => state = SyncState(status: SyncStatus.idle);

  void setIdleWithIssue(String issue) {
    state = state.copyWith(status: SyncStatus.idle, lastIssue: issue);
  }

  void setError(String message) {
    state = state.copyWith(status: SyncStatus.error, lastIssue: message);
  }
}

final syncStatusControllerProvider =
    StateNotifierProvider<SyncStatusController, SyncState>((ref) {
  return SyncStatusController();
});
