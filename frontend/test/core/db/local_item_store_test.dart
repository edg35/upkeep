import 'package:drift/native.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:frontend/core/db/app_database.dart';
import 'package:frontend/core/db/local_item_store.dart';

Map<String, dynamic> _serverItem({
  required String id,
  String name = 'Change filter',
  String? updatedAt,
}) {
  return {
    'item_id': id,
    'name': name,
    'item_type': 'MAINTENANCE',
    'category_id': null,
    'purchase_link': null,
    'updated_at': updatedAt ?? '2026-09-01T00:00:00.000Z',
    'schedule': {
      'tracking_mode': 'INTERVAL',
      'next_due_date': '2026-09-10T00:00:00.000Z',
    },
    'histories': const [],
  };
}

void main() {
  late AppDatabase db;
  late LocalItemStore store;

  setUp(() {
    db = AppDatabase(NativeDatabase.memory());
    store = LocalItemStore(db);
  });

  tearDown(() => db.close());

  test('upsertItemsFromServer inserts new items and reflects them in watchItems', () async {
    await store.upsertItemsFromServer([_serverItem(id: 'a'), _serverItem(id: 'b', name: 'Refill soap')]);

    final items = await store.watchItems().first;
    expect(items.map((i) => i.id), containsAll(['a', 'b']));
    expect(items.firstWhere((i) => i.id == 'b').name, 'Refill soap');
  });

  test('upsertItemsFromServer tombstones local rows no longer in the response', () async {
    await store.upsertItemsFromServer([_serverItem(id: 'a'), _serverItem(id: 'b')]);
    await store.upsertItemsFromServer([_serverItem(id: 'a')]);

    final items = await store.watchItems().first;
    expect(items.map((i) => i.id), ['a']);
  });

  test('applyOptimisticCreate then remapLocalId swaps the row to the server id', () async {
    const localId = 'local-123';
    await store.applyOptimisticCreate(
      localId: localId,
      body: {
        'name': 'Fix gutter',
        'item_type': 'MAINTENANCE',
        'schedule': {'tracking_mode': 'INTERVAL', 'interval_days': 30},
      },
    );
    await store.enqueueMutation(itemId: localId, type: OutboxMutationType.create);
    await store.enqueueMutation(itemId: localId, type: OutboxMutationType.complete);

    await store.remapLocalId(localId, 'server-456');

    final items = await store.watchItems().first;
    expect(items.map((i) => i.id), ['server-456']);

    final pending = await store.pendingMutations();
    expect(pending.map((m) => m.itemId), everyElement('server-456'));
  });

  test('applyOptimisticComplete sets lastCompletedAt without touching nextDueDate', () async {
    await store.upsertItemsFromServer([_serverItem(id: 'a')]);
    final before = (await store.watchItems().first).single;

    final completedAt = DateTime(2026, 9, 5, 8, 30);
    await store.applyOptimisticComplete('a', completedAt);

    final after = (await store.watchItems().first).single;
    expect(after.schedule!.lastCompletedAt, completedAt);
    expect(after.schedule!.nextDueDate, before.schedule!.nextDueDate);
  });
}
