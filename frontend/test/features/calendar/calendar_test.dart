import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:frontend/features/calendar/calendar_days.dart';
import 'package:frontend/features/calendar/widgets/month_calendar.dart';
import 'package:frontend/features/items/item.dart';

HouseholdItem _item(String id, String name, DateTime? due) => HouseholdItem(
  id: id,
  name: name,
  itemType: 'MAINTENANCE',
  schedule: due == null
      ? null
      : ItemSchedule(trackingMode: 'INTERVAL', nextDueDate: due),
);

void main() {
  group('itemsByDueDay', () {
    test(
      'groups by calendar day ignoring time, sorted by name, skipping unscheduled',
      () {
        final byDay = itemsByDueDay([
          _item('a', 'water plants', DateTime(2026, 11, 12, 18, 30)),
          _item('b', 'Change filter', DateTime(2026, 11, 12, 8)),
          _item('c', 'Rent', DateTime(2026, 12, 1)),
          _item('d', 'Someday', null),
        ]);
        expect(
          byDay.keys,
          unorderedEquals([DateTime(2026, 11, 12), DateTime(2026, 12, 1)]),
        );
        expect(byDay[DateTime(2026, 11, 12)]!.map((i) => i.id), ['b', 'a']);
      },
    );
  });

  group('monthGridDays', () {
    test('November 2026 starts on a Sunday with no leading blanks', () {
      final cells = monthGridDays(DateTime(2026, 11));
      expect(cells.first, DateTime(2026, 11, 1));
      expect(cells.whereType<DateTime>().length, 30);
      expect(cells.length % 7, 0);
    });

    test('February 2026 (starts Sunday, 28 days) is exactly four weeks', () {
      expect(monthGridDays(DateTime(2026, 2)).length, 28);
    });

    test('January 2027 starts Friday with five leading blanks', () {
      final cells = monthGridDays(DateTime(2027, 1));
      expect(cells.take(5), everyElement(isNull));
      expect(cells[5], DateTime(2027, 1, 1));
    });
  });

  testWidgets('shows one dot per task (max three) and reports taps', (
    tester,
  ) async {
    final byDay = itemsByDueDay([
      for (var i = 0; i < 5; i++)
        _item('x$i', 'Task $i', DateTime(2026, 11, 12)),
      _item('y', 'Other', DateTime(2026, 11, 20)),
    ]);
    DateTime? tapped;
    int? monthDelta;

    await tester.pumpWidget(
      MaterialApp(
        home: Scaffold(
          body: MonthCalendar(
            month: DateTime(2026, 11),
            selectedDay: DateTime(2026, 11, 11),
            today: DateTime(2026, 11, 11),
            itemsByDay: byDay,
            onDaySelected: (d) => tapped = d,
            onMonthChanged: (d) => monthDelta = d,
          ),
        ),
      ),
    );

    expect(find.text('November 2026'), findsOneWidget);
    expect(
      find.byWidgetPredicate(
        (w) =>
            w.key is ValueKey<String> &&
            (w.key! as ValueKey<String>).value.startsWith('due-dot-'),
      ),
      findsNWidgets(4),
    ); // 3 (capped) + 1

    await tester.tap(find.text('20'));
    expect(tapped, DateTime(2026, 11, 20));

    await tester.tap(find.byTooltip('Next month'));
    expect(monthDelta, 1);
  });
}
