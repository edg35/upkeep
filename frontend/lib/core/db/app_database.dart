import 'package:drift/drift.dart';
import 'package:drift_flutter/drift_flutter.dart';

part 'app_database.g.dart';

/// The local mirror of a household's items. Rows are either a server-issued
/// UUID (`itemId` matches the backend's `item_id`) or a client-generated
/// `local-<uuid>` id for an item created offline and not yet acknowledged by
/// the server — see [SyncService] for how that gets remapped.
class LocalItems extends Table {
  TextColumn get itemId => text()();
  TextColumn get name => text()();
  TextColumn get itemType => text()();
  TextColumn get categoryId => text().nullable()();
  TextColumn get categoryColor => text().nullable()();
  TextColumn get purchaseLink => text().nullable()();
  TextColumn get trackingMode => text()();
  DateTimeColumn get nextDueDate => dateTime()();
  DateTimeColumn get lastCompletedAt => dateTime().nullable()();
  TextColumn get lastCompletedByName => text().nullable()();

  /// The server's `updated_at`. Null while the row is a locally-created item
  /// still waiting on its `create` mutation to be acknowledged.
  DateTimeColumn get updatedAt => dateTime().nullable()();

  @override
  Set<Column> get primaryKey => {itemId};
}

class LocalCategories extends Table {
  TextColumn get categoryId => text()();
  TextColumn get name => text()();
  TextColumn get color => text().nullable()();

  @override
  Set<Column> get primaryKey => {categoryId};
}

enum OutboxMutationType { create, complete }

/// A queued write made while local-first, replayed against the API in FIFO
/// (`id ASC`) order by [SyncService].
class OutboxMutations extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get itemId => text()();
  TextColumn get type => textEnum<OutboxMutationType>()();

  /// The exact request body to send, as JSON — for `delete`/`complete`
  /// (no body needed) this is `'{}'`.
  TextColumn get payloadJson => text()();
  DateTimeColumn get createdAt => dateTime().withDefault(currentDateAndTime)();
}

@DriftDatabase(tables: [LocalItems, LocalCategories, OutboxMutations])
class AppDatabase extends _$AppDatabase {
  AppDatabase([QueryExecutor? executor]) : super(executor ?? _openConnection());

  @override
  int get schemaVersion => 1;

  Future<void> clearAll() async {
    await transaction(() async {
      await delete(localItems).go();
      await delete(localCategories).go();
      await delete(outboxMutations).go();
    });
  }
}

QueryExecutor _openConnection() {
  return driftDatabase(name: 'upkeep');
}
