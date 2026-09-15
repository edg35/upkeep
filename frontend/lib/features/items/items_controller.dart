import 'dart:async';

import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/db/app_database.dart' show OutboxMutationType;
import '../../core/db/db_providers.dart';
import '../../core/db/local_item_store.dart';
import '../../core/sync/sync_providers.dart';
import '../../core/sync/sync_service.dart';
import 'item.dart';

class ItemsState {
  const ItemsState({this.items = const [], this.loading = true, this.completingId});

  final List<HouseholdItem> items;
  final bool loading;

  /// Item id currently being marked complete, for a per-row spinner.
  final String? completingId;

  ItemsState copyWith({
    List<HouseholdItem>? items,
    bool? loading,
    String? completingId,
    bool clearCompleting = false,
  }) {
    return ItemsState(
      items: items ?? this.items,
      loading: loading ?? this.loading,
      completingId: clearCompleting ? null : (completingId ?? this.completingId),
    );
  }
}

/// Local-first: [state.items] streams straight from the on-device cache
/// ([LocalItemStore.watchItems]), so writes show up instantly. All network
/// activity — pushing queued writes, pulling the latest server state — is
/// delegated to [SyncService] and happens in the background.
class ItemsController extends StateNotifier<ItemsState> {
  ItemsController(this._store, this._syncService) : super(const ItemsState()) {
    _subscription = _store.watchItems().listen((items) {
      state = state.copyWith(items: items, loading: false);
    });
    load();
  }

  final LocalItemStore _store;
  final SyncService _syncService;
  late final StreamSubscription<List<HouseholdItem>> _subscription;

  /// Triggers a background sync. Cache contents update on their own via the
  /// stream subscription above, so there's nothing to await here for the
  /// UI to reflect the result — this only exists so pull-to-refresh and app
  /// start have a way to ask for one.
  Future<void> load() => _syncService.syncNow();

  Future<void> complete(String itemId) async {
    state = state.copyWith(completingId: itemId);
    await _store.applyOptimisticComplete(itemId, DateTime.now());
    await _store.enqueueMutation(itemId: itemId, type: OutboxMutationType.complete);
    state = state.copyWith(clearCompleting: true);
    unawaited(_syncService.syncNow());
  }

  Future<void> createItem(Map<String, dynamic> body) async {
    final localId = _store.newLocalItemId();
    await _store.applyOptimisticCreate(localId: localId, body: body);
    await _store.enqueueMutation(
      itemId: localId,
      type: OutboxMutationType.create,
      payload: body,
    );
    unawaited(_syncService.syncNow());
  }

  @override
  void dispose() {
    _subscription.cancel();
    super.dispose();
  }
}

final itemsControllerProvider = StateNotifierProvider<ItemsController, ItemsState>((ref) {
  return ItemsController(
    ref.watch(localItemStoreProvider),
    ref.watch(syncServiceProvider),
  );
});
