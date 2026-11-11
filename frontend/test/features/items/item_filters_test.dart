import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';
import 'package:frontend/features/items/item.dart';
import 'package:frontend/features/items/item_filters.dart';
import 'package:frontend/features/items/item_status.dart';
import 'package:frontend/features/items/item_type.dart';
import 'package:shared_preferences/shared_preferences.dart';

final _now = DateTime(2026, 11, 10, 9);

HouseholdItem _item(
  String id, {
  String name = 'Item',
  String type = 'MAINTENANCE',
  String? categoryId,
  DateTime? due,
  DateTime? lastDone,
  List<String> assignees = const [],
}) {
  return HouseholdItem(
    id: id,
    name: name,
    itemType: type,
    categoryId: categoryId,
    schedule: due == null
        ? null
        : ItemSchedule(
            trackingMode: 'INTERVAL',
            nextDueDate: due,
            lastCompletedAt: lastDone,
          ),
    assignees: [for (final a in assignees) ItemAssignee(userId: a, name: a)],
  );
}

List<String> _ids(List<HouseholdItem> items) => items.map((i) => i.id).toList();

void main() {
  group('applyItemFilters', () {
    final items = [
      _item(
        'bath-overdue',
        name: 'Scrub tub',
        categoryId: 'bath',
        due: DateTime(2026, 11, 1),
        assignees: ['u1'],
      ),
      _item(
        'bath-later',
        name: 'Replace mat',
        categoryId: 'bath',
        due: DateTime(2026, 12, 20),
      ),
      _item(
        'kitchen-overdue',
        name: 'Descale kettle',
        categoryId: 'kitchen',
        due: DateTime(2026, 11, 5),
        assignees: ['u2'],
      ),
      _item(
        'bill-soon',
        name: 'Electric',
        type: 'BILL',
        categoryId: 'bills',
        due: DateTime(2026, 11, 11),
        assignees: ['u1'],
      ),
      _item('unscheduled', name: 'Anything'),
    ];

    test(
      'no filters returns everything, sorted by due date with unscheduled last',
      () {
        expect(_ids(applyItemFilters(items, const ItemFilters(), _now)), [
          'bath-overdue',
          'kitchen-overdue',
          'bill-soon',
          'bath-later',
          'unscheduled',
        ]);
      },
    );

    test('combines category and status', () {
      const filters = ItemFilters(
        categoryId: 'bath',
        status: ItemStatus.overdue,
      );
      expect(_ids(applyItemFilters(items, filters, _now)), ['bath-overdue']);
    });

    test('filters by type and assignee together', () {
      const filters = ItemFilters(itemType: ItemType.bill, assigneeId: 'u1');
      expect(_ids(applyItemFilters(items, filters, _now)), ['bill-soon']);
    });

    test('sort by name is case-insensitive', () {
      final sorted = applyItemFilters(
        items,
        const ItemFilters(sort: ItemSort.name),
        _now,
      );
      expect(sorted.map((i) => i.name), [
        'Anything',
        'Descale kettle',
        'Electric',
        'Replace mat',
        'Scrub tub',
      ]);
    });

    test('sort by last done puts most recent first and never-done last', () {
      final done = [
        _item(
          'old',
          name: 'a',
          due: DateTime(2026, 12, 1),
          lastDone: DateTime(2026, 10, 1),
        ),
        _item('never', name: 'b', due: DateTime(2026, 12, 1)),
        _item(
          'recent',
          name: 'c',
          due: DateTime(2026, 12, 1),
          lastDone: DateTime(2026, 11, 9),
        ),
      ];
      final sorted = applyItemFilters(
        done,
        const ItemFilters(sort: ItemSort.lastCompleted),
        _now,
      );
      expect(_ids(sorted), ['recent', 'old', 'never']);
    });
  });

  group('ItemFilters', () {
    test('round-trips through JSON, including sort', () {
      const filters = ItemFilters(
        categoryId: 'bath',
        itemType: ItemType.consumable,
        status: ItemStatus.dueSoon,
        assigneeId: 'u1',
        sort: ItemSort.name,
      );
      expect(ItemFilters.fromJson(filters.toJson()), filters);
    });

    test('old-shape JSON without sort defaults to due date', () {
      expect(
        ItemFilters.fromJson({'category_id': 'bath'}).sort,
        ItemSort.dueDate,
      );
    });

    test('sort does not count as an active filter', () {
      expect(const ItemFilters(sort: ItemSort.name).isEmpty, isTrue);
    });

    test('withoutStaleIds drops ids that no longer exist, keeps the rest', () {
      const filters = ItemFilters(
        categoryId: 'gone',
        assigneeId: 'u1',
        status: ItemStatus.overdue,
      );
      final pruned = filters.withoutStaleIds(
        categoryIds: {'bath'},
        memberIds: {'u1'},
      );
      expect(
        pruned,
        const ItemFilters(assigneeId: 'u1', status: ItemStatus.overdue),
      );
    });

    test(
      'withoutStaleIds leaves a dimension alone while its list is unloaded',
      () {
        const filters = ItemFilters(categoryId: 'bath', assigneeId: 'u9');
        expect(filters.withoutStaleIds(), filters);
      },
    );
  });

  group('ItemFiltersController', () {
    test('restores the last-used filters from prefs', () async {
      SharedPreferences.setMockInitialValues({
        itemFiltersPrefsKey: jsonEncode(
          const ItemFilters(
            categoryId: 'bath',
            status: ItemStatus.overdue,
            sort: ItemSort.name,
          ).toJson(),
        ),
      });
      final controller = ItemFiltersController();
      await controller.restored;
      expect(
        controller.state,
        const ItemFilters(
          categoryId: 'bath',
          status: ItemStatus.overdue,
          sort: ItemSort.name,
        ),
      );
    });

    test('persists changes so a fresh controller picks them up', () async {
      SharedPreferences.setMockInitialValues({});
      final first = ItemFiltersController();
      await first.restored;
      await first.setCategory('kitchen');
      await first.setStatus(ItemStatus.overdue);
      await first.setSort(ItemSort.lastCompleted);

      final second = ItemFiltersController();
      await second.restored;
      expect(
        second.state,
        const ItemFilters(
          categoryId: 'kitchen',
          status: ItemStatus.overdue,
          sort: ItemSort.lastCompleted,
        ),
      );
    });

    test('a change made before restore finishes is not overwritten', () async {
      SharedPreferences.setMockInitialValues({
        itemFiltersPrefsKey: jsonEncode(
          const ItemFilters(categoryId: 'old').toJson(),
        ),
      });
      final controller = ItemFiltersController();
      final pending = controller.setStatus(ItemStatus.dueSoon);
      await controller.restored;
      await pending;
      expect(controller.state, const ItemFilters(status: ItemStatus.dueSoon));
    });

    test('clearAll resets filters but keeps the sort', () async {
      SharedPreferences.setMockInitialValues({});
      final controller = ItemFiltersController();
      await controller.restored;
      await controller.setSort(ItemSort.name);
      await controller.setCategory('bath');
      await controller.clearAll();
      expect(controller.state, const ItemFilters(sort: ItemSort.name));
    });

    test('ignores a corrupt stored value', () async {
      SharedPreferences.setMockInitialValues({itemFiltersPrefsKey: 'not json'});
      final controller = ItemFiltersController();
      await controller.restored;
      expect(controller.state, const ItemFilters());
    });
  });
}
