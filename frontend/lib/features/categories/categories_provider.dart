import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/db/db_providers.dart';
import 'category.dart';

/// Household categories ("rooms"), used to populate the add-item form's
/// room picker. Read-only in the app today, so this just streams the local
/// mirror kept in sync by [SyncService] — no outbox needed.
final categoriesProvider = StreamProvider<List<Category>>((ref) {
  return ref.watch(localItemStoreProvider).watchCategories();
});
