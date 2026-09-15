import 'dart:convert';

import 'package:drift/drift.dart';
import 'package:uuid/uuid.dart';

import '../../features/categories/category.dart';
import '../../features/items/item.dart';
import 'app_database.dart';

/// Local-first data access for items/categories/the outbox. This is the only
/// thing [ItemsController]/[CategoriesProvider] talk to for reads and writes;
/// the network only comes into it via [SyncService], which is the sole
/// caller of `upsertItemsFromServer`/`upsertCategoriesFromServer` and of the
/// outbox drain methods below.
class LocalItemStore {
  LocalItemStore(this._db);
  final AppDatabase _db;
  static const _uuid = Uuid();

  String newLocalItemId() => 'local-${_uuid.v4()}';

  // ---- reads -------------------------------------------------------------

  Stream<List<HouseholdItem>> watchItems() {
    return _db.select(_db.localItems).watch().map(
      (rows) => rows.map(_toHouseholdItem).toList(),
    );
  }

  Stream<List<Category>> watchCategories() {
    return _db.select(_db.localCategories).watch().map(
      (rows) => rows
          .map((r) => Category(id: r.categoryId, name: r.name, color: r.color))
          .toList(),
    );
  }

  HouseholdItem _toHouseholdItem(LocalItem row) {
    return HouseholdItem(
      id: row.itemId,
      name: row.name,
      itemType: row.itemType,
      categoryColor: row.categoryColor,
      purchaseLink: row.purchaseLink,
      schedule: ItemSchedule(
        trackingMode: row.trackingMode,
        nextDueDate: row.nextDueDate,
        lastCompletedAt: row.lastCompletedAt,
      ),
      latestCompletion: row.lastCompletedAt != null
          ? ItemCompletion(
              completedAt: row.lastCompletedAt!,
              completedByName: row.lastCompletedByName,
            )
          : null,
    );
  }

  // ---- server -> local (full-refresh pull) --------------------------------

  Future<void> upsertItemsFromServer(List<Map<String, dynamic>> items) async {
    await _db.transaction(() async {
      final keepIds = <String>{};
      for (final json in items) {
        final row = _companionFromServerJson(json);
        keepIds.add(row.itemId.value);
        await _db.into(_db.localItems).insertOnConflictUpdate(row);
      }
      await (_db.delete(
        _db.localItems,
      )..where((t) => keepIds.isEmpty ? const Constant(true) : t.itemId.isNotIn(keepIds)))
          .go();
    });
  }

  LocalItemsCompanion _companionFromServerJson(Map<String, dynamic> json) {
    final category = json['category'] as Map<String, dynamic>?;
    final schedule = json['schedule'] as Map<String, dynamic>?;
    final histories = json['histories'] as List?;
    final latestHistory = (histories != null && histories.isNotEmpty)
        ? histories.first as Map<String, dynamic>
        : null;
    final completer = latestHistory?['completer'] as Map<String, dynamic>?;

    return LocalItemsCompanion.insert(
      itemId: json['item_id'] as String,
      name: json['name'] as String,
      itemType: json['item_type'] as String,
      categoryId: Value(json['category_id'] as String?),
      categoryColor: Value(category?['color'] as String?),
      purchaseLink: Value(json['purchase_link'] as String?),
      trackingMode: schedule?['tracking_mode'] as String? ?? 'INTERVAL',
      nextDueDate: schedule != null
          ? DateTime.parse(schedule['next_due_date'] as String).toLocal()
          : DateTime.now(),
      lastCompletedAt: Value(
        latestHistory != null
            ? DateTime.parse(latestHistory['completed_at'] as String).toLocal()
            : null,
      ),
      lastCompletedByName: Value(completer?['name'] as String?),
      updatedAt: Value(
        json['updated_at'] != null
            ? DateTime.parse(json['updated_at'] as String).toLocal()
            : DateTime.now(),
      ),
    );
  }

  Future<void> upsertCategoriesFromServer(
    List<Map<String, dynamic>> categories,
  ) async {
    await _db.transaction(() async {
      final keepIds = <String>{};
      for (final json in categories) {
        final id = json['category_id'] as String;
        keepIds.add(id);
        await _db.into(_db.localCategories).insertOnConflictUpdate(
          LocalCategoriesCompanion.insert(
            categoryId: id,
            name: json['name'] as String,
            color: Value(json['color'] as String?),
          ),
        );
      }
      await (_db.delete(
        _db.localCategories,
      )..where((t) => keepIds.isEmpty ? const Constant(true) : t.categoryId.isNotIn(keepIds)))
          .go();
    });
  }

  // ---- optimistic local writes -------------------------------------------

  Future<void> applyOptimisticCreate({
    required String localId,
    required Map<String, dynamic> body,
  }) async {
    final schedule = body['schedule'] as Map<String, dynamic>?;
    await _db.into(_db.localItems).insert(
      LocalItemsCompanion.insert(
        itemId: localId,
        name: body['name'] as String,
        itemType: body['item_type'] as String,
        categoryId: Value(body['category_id'] as String?),
        purchaseLink: Value(body['purchase_link'] as String?),
        trackingMode: schedule?['tracking_mode'] as String? ?? 'INTERVAL',
        nextDueDate: _initialDueDateGuess(schedule),
        updatedAt: const Value(null),
      ),
    );
  }

  /// Best-effort local due date for a just-created item, used only until
  /// the create mutation syncs and the real server-computed value replaces
  /// it. The server is the source of truth for schedule math (RRULE etc.).
  DateTime _initialDueDateGuess(Map<String, dynamic>? schedule) {
    if (schedule == null) return DateTime.now();
    final override = schedule['initial_due_date'] as String?;
    if (override != null) return DateTime.parse(override).toLocal();
    final intervalDays = schedule['interval_days'] as int?;
    if (intervalDays != null) {
      return DateTime.now().add(Duration(days: intervalDays));
    }
    final fixed = schedule['fixed_due_date'] as String?;
    if (fixed != null) return DateTime.parse(fixed).toLocal();
    return DateTime.now();
  }

  Future<void> applyOptimisticComplete(String itemId, DateTime completedAt) async {
    await (_db.update(_db.localItems)..where((t) => t.itemId.equals(itemId))).write(
      LocalItemsCompanion(
        lastCompletedAt: Value(completedAt),
      ),
    );
  }

  // ---- outbox --------------------------------------------------------------

  Future<void> enqueueMutation({
    required String itemId,
    required OutboxMutationType type,
    Map<String, dynamic> payload = const {},
  }) async {
    await _db.into(_db.outboxMutations).insert(
      OutboxMutationsCompanion.insert(
        itemId: itemId,
        type: type,
        payloadJson: jsonEncode(payload),
      ),
    );
  }

  Future<List<OutboxMutation>> pendingMutations() {
    return (_db.select(
      _db.outboxMutations,
    )..orderBy([(t) => OrderingTerm.asc(t.id)])).get();
  }

  Future<void> deleteMutation(int id) {
    return (_db.delete(_db.outboxMutations)..where((t) => t.id.equals(id))).go();
  }

  /// After a queued `create` for [localId] is acknowledged as [serverId]:
  /// swaps the local row's primary key and rewrites any still-queued
  /// outbox rows that reference the old id (a `complete`/`update` enqueued
  /// moments after the `create`, before its response came back).
  Future<void> remapLocalId(String localId, String serverId) async {
    await _db.transaction(() async {
      final row = await (_db.select(
        _db.localItems,
      )..where((t) => t.itemId.equals(localId))).getSingleOrNull();
      if (row != null) {
        await (_db.delete(_db.localItems)..where((t) => t.itemId.equals(localId))).go();
        await _db.into(_db.localItems).insertOnConflictUpdate(
          row.toCompanion(true).copyWith(itemId: Value(serverId)),
        );
      }
      await (_db.update(
        _db.outboxMutations,
      )..where((t) => t.itemId.equals(localId))).write(
        OutboxMutationsCompanion(itemId: Value(serverId)),
      );
    });
  }

  Future<void> clearAll() => _db.clearAll();
}
