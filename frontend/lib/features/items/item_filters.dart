import 'dart:convert';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../categories/categories_provider.dart';
import '../household/household_members_provider.dart';
import 'item.dart';
import 'item_status.dart';
import 'item_type.dart';
import 'items_controller.dart';

enum ItemSort { dueDate, name, lastCompleted }

extension ItemSortLabel on ItemSort {
  String get label {
    switch (this) {
      case ItemSort.dueDate:
        return 'Due date';
      case ItemSort.name:
        return 'Name';
      case ItemSort.lastCompleted:
        return 'Last done';
    }
  }
}

/// Single-select per dimension; dimensions AND together (e.g. category
/// "Bathroom" + status "Overdue" narrows both ways at once). [sort] is not a
/// filter, so it doesn't count toward [isEmpty].
class ItemFilters {
  const ItemFilters({
    this.categoryId,
    this.itemType,
    this.status,
    this.assigneeId,
    this.sort = ItemSort.dueDate,
  });

  final String? categoryId;
  final ItemType? itemType;
  final ItemStatus? status;
  final String? assigneeId;
  final ItemSort sort;

  bool get isEmpty =>
      categoryId == null &&
      itemType == null &&
      status == null &&
      assigneeId == null;

  ItemFilters copyWith({
    String? categoryId,
    bool clearCategoryId = false,
    ItemType? itemType,
    bool clearItemType = false,
    ItemStatus? status,
    bool clearStatus = false,
    String? assigneeId,
    bool clearAssigneeId = false,
    ItemSort? sort,
  }) {
    return ItemFilters(
      categoryId: clearCategoryId ? null : (categoryId ?? this.categoryId),
      itemType: clearItemType ? null : (itemType ?? this.itemType),
      status: clearStatus ? null : (status ?? this.status),
      assigneeId: clearAssigneeId ? null : (assigneeId ?? this.assigneeId),
      sort: sort ?? this.sort,
    );
  }

  /// Drops a persisted category/assignee id that no longer exists (category
  /// deleted, member left, user switched households). Otherwise it would
  /// silently hide every item while its chip reads as unset. A null list
  /// means "not loaded yet" and leaves that dimension alone.
  ItemFilters withoutStaleIds({
    Set<String>? categoryIds,
    Set<String>? memberIds,
  }) {
    return copyWith(
      clearCategoryId:
          categoryId != null &&
          categoryIds != null &&
          !categoryIds.contains(categoryId),
      clearAssigneeId:
          assigneeId != null &&
          memberIds != null &&
          !memberIds.contains(assigneeId),
    );
  }

  Map<String, dynamic> toJson() => {
    'category_id': categoryId,
    'item_type': itemType?.toJson(),
    'status': status?.name,
    'assignee_id': assigneeId,
    'sort': sort.name,
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
      itemType: _findOrNull(
        ItemType.values,
        (t) => t.toJson() == json['item_type'],
      ),
      status: _findOrNull(ItemStatus.values, (s) => s.name == json['status']),
      assigneeId: json['assignee_id'] as String?,
      sort:
          _findOrNull(ItemSort.values, (s) => s.name == json['sort']) ??
          ItemSort.dueDate,
    );
  }

  @override
  bool operator ==(Object other) =>
      other is ItemFilters &&
      other.categoryId == categoryId &&
      other.itemType == itemType &&
      other.status == status &&
      other.assigneeId == assigneeId &&
      other.sort == sort;

  @override
  int get hashCode =>
      Object.hash(categoryId, itemType, status, assigneeId, sort);
}

/// Filters then sorts. Pure so it can be tested without providers.
List<HouseholdItem> applyItemFilters(
  List<HouseholdItem> items,
  ItemFilters filters,
  DateTime now,
) {
  final result = items.where((item) {
    if (filters.categoryId != null && item.categoryId != filters.categoryId) {
      return false;
    }
    if (filters.itemType != null &&
        item.itemType != filters.itemType!.toJson()) {
      return false;
    }
    if (filters.status != null &&
        computeItemStatus(item, now) != filters.status) {
      return false;
    }
    if (filters.assigneeId != null &&
        !item.assignees.any((a) => a.userId == filters.assigneeId)) {
      return false;
    }
    return true;
  }).toList();

  int byName(HouseholdItem a, HouseholdItem b) =>
      a.name.toLowerCase().compareTo(b.name.toLowerCase());

  // Nulls (unscheduled / never done) sink to the bottom; ties fall back to
  // name so the order is stable across rebuilds.
  int nullsLast<T extends Comparable<Object>>(
    T? a,
    T? b, {
    bool descending = false,
  }) {
    if (a == null && b == null) return 0;
    if (a == null) return 1;
    if (b == null) return -1;
    return descending ? b.compareTo(a) : a.compareTo(b);
  }

  switch (filters.sort) {
    case ItemSort.dueDate:
      result.sort((a, b) {
        final c = nullsLast(a.schedule?.nextDueDate, b.schedule?.nextDueDate);
        return c != 0 ? c : byName(a, b);
      });
    case ItemSort.name:
      result.sort(byName);
    case ItemSort.lastCompleted:
      result.sort((a, b) {
        final c = nullsLast(
          a.schedule?.lastCompletedAt,
          b.schedule?.lastCompletedAt,
          descending: true,
        );
        return c != 0 ? c : byName(a, b);
      });
  }
  return result;
}

const itemFiltersPrefsKey = 'upkeep.item_filters';

class ItemFiltersController extends StateNotifier<ItemFilters> {
  ItemFiltersController() : super(const ItemFilters()) {
    _restored = _restore();
  }

  late final Future<void> _restored;

  /// Set once the user changes anything, so a slow prefs read can't clobber
  /// a choice made before it finished.
  bool _touched = false;

  /// Completes once the persisted state (if any) has been applied.
  Future<void> get restored => _restored;

  Future<void> _restore() async {
    final prefs = await SharedPreferences.getInstance();
    final saved = prefs.getString(itemFiltersPrefsKey);
    if (saved == null || _touched || !mounted) return;
    try {
      state = ItemFilters.fromJson(jsonDecode(saved) as Map<String, dynamic>);
    } catch (_) {
      // Ignore a corrupt/old-shape stored value — fall back to no filters.
    }
  }

  Future<void> _set(ItemFilters next) async {
    _touched = true;
    state = next;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(itemFiltersPrefsKey, jsonEncode(next.toJson()));
  }

  Future<void> setCategory(String? id) => _set(
    id == null
        ? state.copyWith(clearCategoryId: true)
        : state.copyWith(categoryId: id),
  );

  Future<void> setItemType(ItemType? type) => _set(
    type == null
        ? state.copyWith(clearItemType: true)
        : state.copyWith(itemType: type),
  );

  Future<void> setStatus(ItemStatus? status) => _set(
    status == null
        ? state.copyWith(clearStatus: true)
        : state.copyWith(status: status),
  );

  Future<void> setAssignee(String? id) => _set(
    id == null
        ? state.copyWith(clearAssigneeId: true)
        : state.copyWith(assigneeId: id),
  );

  Future<void> setSort(ItemSort sort) => _set(state.copyWith(sort: sort));

  /// Clears filters but keeps the chosen sort — "Clear all" is about what's
  /// shown, not how it's ordered.
  Future<void> clearAll() => _set(ItemFilters(sort: state.sort));
}

final itemFiltersProvider =
    StateNotifierProvider<ItemFiltersController, ItemFilters>((ref) {
      return ItemFiltersController();
    });

/// The persisted filters with any stale category/assignee ids ignored. The
/// list and the filter bar both read this, so what's applied always matches
/// what the chips show.
final effectiveItemFiltersProvider = Provider<ItemFilters>((ref) {
  final filters = ref.watch(itemFiltersProvider);
  final categories = ref.watch(categoriesProvider).valueOrNull;
  final members = ref.watch(householdMembersProvider).valueOrNull;
  return filters.withoutStaleIds(
    categoryIds: categories?.map((c) => c.id).toSet(),
    memberIds: members?.map((m) => m['user_id'] as String).toSet(),
  );
});

final filteredItemsProvider = Provider<List<HouseholdItem>>((ref) {
  final items = ref.watch(itemsControllerProvider).items;
  final filters = ref.watch(effectiveItemFiltersProvider);
  return applyItemFilters(items, filters, DateTime.now());
});
