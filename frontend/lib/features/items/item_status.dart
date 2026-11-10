import 'item.dart';

enum ItemStatus { overdue, dueSoon, upcoming, completedToday }

extension ItemStatusLabel on ItemStatus {
  String get label {
    switch (this) {
      case ItemStatus.overdue:
        return 'Overdue';
      case ItemStatus.dueSoon:
        return 'Due soon';
      case ItemStatus.upcoming:
        return 'Upcoming';
      case ItemStatus.completedToday:
        return 'Completed';
    }
  }
}

const _dueSoonWindow = Duration(days: 3);

DateTime _dateOnly(DateTime d) => DateTime(d.year, d.month, d.day);

/// For the items list's status filter/badge — distinct from the dashboard's
/// "today" view, which only cares whether something is due/overdue/completed
/// *today*. This buckets every item, including ones due further out.
ItemStatus computeItemStatus(HouseholdItem item, DateTime now) {
  final schedule = item.schedule;
  final today = _dateOnly(now);

  if (schedule == null) return ItemStatus.upcoming;

  final completedAt = schedule.lastCompletedAt;
  if (completedAt != null && !_dateOnly(completedAt).isBefore(today)) {
    return ItemStatus.completedToday;
  }

  final due = schedule.nextDueDate;
  if (due.isBefore(today)) return ItemStatus.overdue;
  if (due.isBefore(today.add(_dueSoonWindow))) return ItemStatus.dueSoon;
  return ItemStatus.upcoming;
}
