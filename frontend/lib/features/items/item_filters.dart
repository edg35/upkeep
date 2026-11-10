import 'dart:convert';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'item.dart';
import 'item_status.dart';
import 'item_type.dart';
import 'items_controller.dart';

/// Single-select per dimension; dimensions AND together (e.g. category
/// "Bathroom" + status "Overdue" narrows both ways at once).
class ItemFilters {
  const ItemFilters({this.categoryId, this.itemType, this.status, this.assigneeId});

  final String? categoryId;
  final ItemType? itemType;
  final ItemStatus? status;
  final String? assigneeId;

  bool get isEmpty => categoryId == null && itemType == null && status == null && assigneeId == null;

  ItemFilters copyWith({
    String? categoryId,
    bool clearCategoryId = false,
    ItemType? itemType,
    bool clearItemType = false,
    ItemStatus? status,
    bool clearStatus = false,
    String? assigneeId,
    bool clearAssigneeId = false,
  }) {
    return ItemFilters(
      categoryId: clearCategoryId ? null : (categoryId ?? this.categoryId),
      itemType: clearItemType ? null : (itemType ?? this.itemType),
      status: clearStatus ? null : (status ?? this.status),
      assigneeId: clearAssigneeId ? null : (assigneeId ?? this.assigneeId),
    );
  }

  Map<String, dynamic> toJson() => {
    'category_id': categoryId,
    'item_type': itemType?.toJson(),
    'status': status?.name,
    'assignee_id': assigneeId,
  };

  static T? _findOrNull<T>(Iterable<T> values, bool Function(T) test) {
    for (final v in values) {
      if (test(v)) return v;
    }
    return null;
  }

  factory ItemFilters.fromJson(Map<String, dynamic> json) {
    return ItemFilters(
      categoryId: json['category_id'] as String?,
      itemType: _findOrNull(ItemType.values, (t) => t.toJson() == json['item_type']),
      status: _findOrNull(ItemStatus.values, (s) => s.name == json['status']),
      assigneeId: json['assignee_id'] as String?,
    );
  }
}

const _prefsKey = 'upkeep.item_filters';

class ItemFiltersController extends StateNotifier<ItemFilters> {
  ItemFiltersController() : super(const ItemFilters()) {
    _restore();
  }

  Future<void> _restore() async {
    final prefs = await SharedPreferences.getInstance();
    final saved = prefs.getString(_prefsKey);
    if (saved == null) return;
    try {
      state = ItemFilters.fromJson(jsonDecode(saved) as Map<String, dynamic>);
    } catch (_) {
      // Ignore a corrupt/old-shape stored value — fall back to no filters.
    }
  }

  Future<void> _persist() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_prefsKey, jsonEncode(state.toJson()));
  }

  Future<void> setCategory(String? id) async {
    state = id == null ? state.copyWith(clearCategoryId: true) : state.copyWith(categoryId: id);
    await _persist();
  }

  Future<void> setItemType(ItemType? type) async {
    state = type == null ? state.copyWith(clearItemType: true) : state.copyWith(itemType: type);
    await _persist();
  }

  Future<void> setStatus(ItemStatus? status) async {
    state = status == null ? state.copyWith(clearStatus: true) : state.copyWith(status: status);
    await _persist();
  }

  Future<void> setAssignee(String? id) async {
    state = id == null ? state.copyWith(clearAssigneeId: true) : state.copyWith(assigneeId: id);
    await _persist();
  }

  Future<void> clearAll() async {
    state = const ItemFilters();
    await _persist();
  }
}

final itemFiltersProvider = StateNotifierProvider<ItemFiltersController, ItemFilters>((ref) {
  return ItemFiltersController();
});

final filteredItemsProvider = Provider<List<HouseholdItem>>((ref) {
  final items = ref.watch(itemsControllerProvider).items;
  final filters = ref.watch(itemFiltersProvider);
  if (filters.isEmpty) return items;

  final now = DateTime.now();
  return items.where((item) {
    if (filters.categoryId != null && item.categoryId != filters.categoryId) return false;
    if (filters.itemType != null && item.itemType != filters.itemType!.toJson()) return false;
    if (filters.status != null && computeItemStatus(item, now) != filters.status) return false;
    if (filters.assigneeId != null &&
        !item.assignees.any((a) => a.userId == filters.assigneeId)) {
      return false;
    }
    return true;
  }).toList();
});
