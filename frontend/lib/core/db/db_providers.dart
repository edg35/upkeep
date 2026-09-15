import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'app_database.dart';
import 'local_item_store.dart';

final appDatabaseProvider = Provider<AppDatabase>((ref) {
  final db = AppDatabase();
  ref.onDispose(db.close);
  return db;
});

final localItemStoreProvider = Provider<LocalItemStore>((ref) {
  return LocalItemStore(ref.watch(appDatabaseProvider));
});
