import 'dart:convert';

import 'package:dio/dio.dart';

import '../db/app_database.dart';
import '../db/local_item_store.dart';
import '../network/extract_error.dart';
import '../../features/categories/category_repository.dart';
import '../../features/items/item_repository.dart';
import 'sync_status.dart';

/// Drains the offline outbox against the API, then — only once the outbox
/// is empty — pulls the full items/categories lists and mirrors them into
/// [LocalItemStore]. Running the pull only after a clean drain is what makes
/// "last write wins" work without any per-field merge logic: a pull never
/// overwrites a local write the server hasn't acknowledged yet.
class SyncService {
  SyncService(this._itemApi, this._categoryApi, this._store, this._status);

  final ItemApi _itemApi;
  final CategoryApi _categoryApi;
  final LocalItemStore _store;
  final SyncStatusController _status;

  bool _running = false;

  Future<void> syncNow() async {
    if (_running) return;
    _running = true;
    _status.setSyncing();
    try {
      final drainResult = await _drainOutbox();
      if (drainResult.emptied) {
        await _pullFromServer();
        if (drainResult.droppedIssue != null) {
          _status.setIdleWithIssue(drainResult.droppedIssue!);
        } else {
          _status.setIdleClean();
        }
      } else {
        _status.setOffline();
      }
    } catch (e) {
      _status.setError(e is DioException ? extractError(e) : e.toString());
    } finally {
      _running = false;
    }
  }

  /// `emptied` is `true` if the outbox ended up empty (every mutation either
  /// succeeded or was dropped as unrecoverable) — `false` if a network error
  /// stopped the drain partway through, leaving the rest queued for the next
  /// sync attempt. `droppedIssue` is set if any mutation had to be dropped.
  Future<({bool emptied, String? droppedIssue})> _drainOutbox() async {
    String? droppedIssue;
    while (true) {
      final pending = await _store.pendingMutations();
      if (pending.isEmpty) break;
      final mutation = pending.first;

      try {
        await _apply(mutation);
        await _store.deleteMutation(mutation.id);
      } on DioException catch (e) {
        if (_isNetworkFailure(e)) return (emptied: false, droppedIssue: droppedIssue);
        // A 4xx (e.g. the item was deleted on another device) can't be
        // retried — drop it and keep the rest of the queue moving.
        droppedIssue = 'Some offline changes couldn\'t be saved: ${extractError(e)}';
        await _store.deleteMutation(mutation.id);
      }
    }
    return (emptied: true, droppedIssue: droppedIssue);
  }

  bool _isNetworkFailure(DioException e) {
    return e.response == null &&
        e.type != DioExceptionType.badResponse &&
        e.type != DioExceptionType.cancel;
  }

  Future<void> _apply(OutboxMutation mutation) async {
    final payload = jsonDecode(mutation.payloadJson) as Map<String, dynamic>;
    switch (mutation.type) {
      case OutboxMutationType.create:
        final created = await _itemApi.createItem(payload);
        final serverId = created['item_id'] as String;
        await _store.remapLocalId(mutation.itemId, serverId);
      case OutboxMutationType.complete:
        await _itemApi.completeItem(mutation.itemId);
    }
  }

  Future<void> _pullFromServer() async {
    final items = await _itemApi.listItems();
    final categories = await _categoryApi.listCategories();
    await _store.upsertItemsFromServer(items);
    await _store.upsertCategoriesFromServer(categories);
  }
}
