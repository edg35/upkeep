import 'package:dio/dio.dart';
import 'package:drift/native.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:frontend/core/db/app_database.dart';
import 'package:frontend/core/db/local_item_store.dart';
import 'package:frontend/core/sync/sync_service.dart';
import 'package:frontend/core/sync/sync_status.dart';
import 'package:frontend/features/categories/category_repository.dart';
import 'package:frontend/features/items/item_repository.dart';

class _FakeItemApi implements ItemApi {
  List<Map<String, dynamic>> serverItems = [];
  List<Map<String, dynamic>> createCalls = [];
  List<String> completeCalls = [];

  /// If set, the next createItem call throws this instead of succeeding.
  Object? nextCreateError;

  @override
  Future<List<Map<String, dynamic>>> listItems() async => serverItems;

  @override
  Future<Map<String, dynamic>> createItem(Map<String, dynamic> body) async {
    createCalls.add(body);
    if (nextCreateError != null) {
      final err = nextCreateError!;
      nextCreateError = null;
      throw err;
    }
    final created = {
      'item_id': 'server-${createCalls.length}',
      'name': body['name'],
      'item_type': body['item_type'],
      'category_id': body['category_id'],
      'purchase_link': body['purchase_link'],
      'updated_at': '2026-09-01T00:00:00.000Z',
      'schedule': {
        'tracking_mode': 'INTERVAL',
        'next_due_date': '2026-09-15T00:00:00.000Z',
      },
      'histories': const [],
    };
    serverItems = [...serverItems, created];
    return created;
  }

  @override
  Future<Map<String, dynamic>> completeItem(String itemId) async {
    completeCalls.add(itemId);
    return {};
  }
}

class _FakeCategoryApi implements CategoryApi {
  @override
  Future<List<Map<String, dynamic>>> listCategories() async => [];
}

DioException _dioError({int? statusCode, DioExceptionType type = DioExceptionType.badResponse}) {
  final options = RequestOptions(path: '/items');
  return DioException(
    requestOptions: options,
    type: type,
    response: statusCode != null
        ? Response(requestOptions: options, statusCode: statusCode, data: {'message': 'nope'})
        : null,
  );
}

void main() {
  late AppDatabase db;
  late LocalItemStore store;
  late _FakeItemApi itemApi;
  late _FakeCategoryApi categoryApi;
  late SyncStatusController status;
  late SyncService sync;

  setUp(() {
    db = AppDatabase(NativeDatabase.memory());
    store = LocalItemStore(db);
    itemApi = _FakeItemApi();
    categoryApi = _FakeCategoryApi();
    status = SyncStatusController();
    sync = SyncService(itemApi, categoryApi, store, status);
  });

  tearDown(() => db.close());

  test('drains a queued create, remaps the local id, then pulls the server state', () async {
    const localId = 'local-1';
    await store.applyOptimisticCreate(
      localId: localId,
      body: {
        'name': 'Fix gutter',
        'item_type': 'MAINTENANCE',
        'schedule': {'tracking_mode': 'INTERVAL', 'interval_days': 30},
      },
    );
    await store.enqueueMutation(
      itemId: localId,
      type: OutboxMutationType.create,
      payload: {
        'name': 'Fix gutter',
        'item_type': 'MAINTENANCE',
        'schedule': {'tracking_mode': 'INTERVAL', 'interval_days': 30},
      },
    );

    await sync.syncNow();

    expect(itemApi.createCalls, hasLength(1));
    expect(await store.pendingMutations(), isEmpty);
    final items = await store.watchItems().first;
    expect(items.single.id, 'server-1');
    expect(status.state.status, SyncStatus.idle);
    expect(status.state.lastIssue, isNull);
  });

  test('a network failure mid-drain leaves the queue intact and marks offline', () async {
    itemApi.nextCreateError = _dioError(type: DioExceptionType.connectionError);
    await store.applyOptimisticCreate(localId: 'local-1', body: {'name': 'x', 'item_type': 'MAINTENANCE'});
    await store.enqueueMutation(itemId: 'local-1', type: OutboxMutationType.create, payload: {'name': 'x'});

    await sync.syncNow();

    expect(await store.pendingMutations(), hasLength(1));
    expect(status.state.status, SyncStatus.offline);
  });

  test('a 4xx failure drops the mutation and surfaces an issue instead of blocking the queue', () async {
    itemApi.nextCreateError = _dioError(statusCode: 404);
    await store.applyOptimisticCreate(localId: 'local-1', body: {'name': 'x', 'item_type': 'MAINTENANCE'});
    await store.enqueueMutation(itemId: 'local-1', type: OutboxMutationType.create, payload: {'name': 'x'});
    await store.enqueueMutation(itemId: 'server-completes-fine', type: OutboxMutationType.complete);

    await sync.syncNow();

    expect(await store.pendingMutations(), isEmpty);
    expect(itemApi.completeCalls, ['server-completes-fine']);
    expect(status.state.status, SyncStatus.idle);
    expect(status.state.lastIssue, isNotNull);
  });
}
