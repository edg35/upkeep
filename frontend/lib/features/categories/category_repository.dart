import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/network/api_client.dart';

abstract class CategoryApi {
  Future<List<Map<String, dynamic>>> listCategories();
}

class CategoryRepository implements CategoryApi {
  CategoryRepository(this._dio);
  final Dio _dio;

  @override
  Future<List<Map<String, dynamic>>> listCategories() async {
    final res = await _dio.get('/categories');
    return (res.data as List).cast<Map<String, dynamic>>();
  }
}

final categoryRepositoryProvider = Provider<CategoryApi>((ref) {
  return CategoryRepository(ref.watch(dioProvider));
});
