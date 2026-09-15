import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'category.dart';
import 'category_repository.dart';

/// Household categories ("rooms"), used to populate the add-item form's
/// room picker. Read-only reference data, so a plain FutureProvider is
/// enough — no submission state to justify a full StateNotifier controller.
final categoriesProvider = FutureProvider<List<Category>>((ref) async {
  final data = await ref.watch(categoryRepositoryProvider).listCategories();
  return data.map(Category.fromJson).toList();
});
