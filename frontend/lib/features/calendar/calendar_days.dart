import '../items/item.dart';

DateTime dateOnly(DateTime d) => DateTime(d.year, d.month, d.day);

/// Groups items by the calendar day of their next due date, each day's list
/// sorted by name. Unscheduled items have no day and are left out.
///
/// Only the *next* occurrence is shown — future repeats of a recurring item
/// aren't projected, since the schedule only gives us `next_due_date`.
Map<DateTime, List<HouseholdItem>> itemsByDueDay(List<HouseholdItem> items) {
  final byDay = <DateTime, List<HouseholdItem>>{};
  for (final item in items) {
    final due = item.schedule?.nextDueDate;
    if (due == null) continue;
    byDay.putIfAbsent(dateOnly(due), () => []).add(item);
  }
  for (final list in byDay.values) {
    list.sort((a, b) => a.name.toLowerCase().compareTo(b.name.toLowerCase()));
  }
  return byDay;
}

/// The cells of a Sunday-first month grid: `null` for the blank leading and
/// trailing cells, otherwise the date. Always a whole number of weeks.
List<DateTime?> monthGridDays(DateTime month) {
  final first = DateTime(month.year, month.month);
  final daysInMonth = DateTime(month.year, month.month + 1, 0).day;
  final leading = first.weekday % 7; // DateTime.sunday == 7 -> 0
  final cells = <DateTime?>[
    for (var i = 0; i < leading; i++) null,
    for (var d = 1; d <= daysInMonth; d++) DateTime(month.year, month.month, d),
  ];
  while (cells.length % 7 != 0) {
    cells.add(null);
  }
  return cells;
}
