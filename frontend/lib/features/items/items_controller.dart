import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/network/extract_error.dart';
import 'item.dart';
import 'item_repository.dart';

class ItemsState {
  const ItemsState({
    this.items = const [],
    this.loading = true,
    this.error,
    this.completingId,
  });

  final List<HouseholdItem> items;
  final bool loading;
  final String? error;

  /// Item id currently being marked complete, for a per-row spinner.
  final String? completingId;

  ItemsState copyWith({
    List<HouseholdItem>? items,
    bool? loading,
    String? error,
    String? completingId,
    bool clearCompleting = false,
  }) {
    return ItemsState(
      items: items ?? this.items,
      loading: loading ?? this.loading,
      error: error,
      completingId: clearCompleting ? null : (completingId ?? this.completingId),
    );
  }
}

class ItemsController extends StateNotifier<ItemsState> {
  ItemsController(this._repository) : super(const ItemsState()) {
    load();
  }

  final ItemApi _repository;

  Future<void> load() async {
    state = state.copyWith(loading: true, error: null);
    try {
      final data = await _repository.listItems();
      state = ItemsState(items: data.map(HouseholdItem.fromJson).toList(), loading: false);
    } on DioException catch (e) {
      state = state.copyWith(loading: false, error: extractError(e));
    } catch (e) {
      state = state.copyWith(loading: false, error: e.toString());
    }
  }

  /// Marks an item complete. The backend sets `completed_by`/`completed_at`
  /// from the authenticated request, so no body is needed.
  Future<void> complete(String itemId) async {
    state = state.copyWith(completingId: itemId);
    try {
      await _repository.completeItem(itemId);
      await load();
    } on DioException catch (e) {
      state = state.copyWith(error: extractError(e), clearCompleting: true);
    } catch (e) {
      state = state.copyWith(error: e.toString(), clearCompleting: true);
    }
  }
}

final itemsControllerProvider = StateNotifierProvider<ItemsController, ItemsState>((ref) {
  return ItemsController(ref.watch(itemRepositoryProvider));
});
