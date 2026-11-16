// Run with `TZ=America/New_York flutter test` to exercise the DST cases.
import 'package:flutter_test/flutter_test.dart';
import 'package:frontend/features/dashboard/home_task.dart';
import 'package:frontend/features/items/item.dart';

HouseholdItem _due(String name, DateTime due) => HouseholdItem(
  id: name,
  name: name,
  itemType: 'MAINTENANCE',
  schedule: ItemSchedule(trackingMode: 'FIXED_DATE', nextDueDate: due),
);

void main() {
  group('buildTodayTasks', () {
    test('day after spring forward counts the previous day as 1 day late', () {
      final tasks = buildTodayTasks([
        _due('Filter', DateTime(2027, 3, 14)),
      ], DateTime(2027, 3, 15, 9));

      expect(tasks.single.subtitle, '1 day late');
      expect(tasks.single.isLate, isTrue);
    });

    test('counts 2 days late two days after the due date', () {
      final tasks = buildTodayTasks([
        _due('Filter', DateTime(2026, 11, 14)),
      ], DateTime(2026, 11, 16, 9));

      expect(tasks.single.subtitle, '2 days late');
    });

    test('fall-back day keeps a late-evening item in today', () {
      // Nov 1, 2026 is 25 hours long in New York: today + 24h is 11 PM.
      final tasks = buildTodayTasks([
        _due('Today', DateTime(2026, 11, 1, 23, 30)),
        _due('Tomorrow', DateTime(2026, 11, 2, 0, 30)),
      ], DateTime(2026, 11, 1, 9));

      expect(tasks.map((t) => t.title), ['Today']);
      expect(tasks.single.subtitle, 'Due today');
    });
  });
}
