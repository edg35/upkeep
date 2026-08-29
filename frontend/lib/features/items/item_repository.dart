import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/network/api_client.dart';

abstract class ItemApi {
  Future<List<Map<String, dynamic>>> listItems();
  Future<Map<String, dynamic>> completeItem(String itemId);
}

class ItemRepository implements ItemApi {
  ItemRepository(this._dio);
  final Dio _dio;

  @override
  Future<List<Map<String, dynamic>>> listItems() async {
    final res = await _dio.get('/items');
    return (res.data as List).cast<Map<String, dynamic>>();
  }

  @override
  Future<Map<String, dynamic>> completeItem(String itemId) async {
    final res = await _dio.post('/items/$itemId/complete', data: const {});
    return res.data as Map<String, dynamic>;
  }
}

final itemRepositoryProvider = Provider<ItemApi>((ref) {
  return ItemRepository(ref.watch(dioProvider));
});
