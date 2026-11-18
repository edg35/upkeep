import '../../shared/utils/day_math.dart';
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

const _dueSoonWindowDays = 3;

/// For the items list's status filter/badge — distinct from the dashboard's
/// "today" view, which only cares whether something is due/overdue/completed
/// *today*. This buckets every item, including ones due further out.
ItemStatus computeItemStatus(HouseholdItem item, DateTime now) {
  final schedule = item.schedule;
  final today = dateOnly(now);

  if (schedule == null) return ItemStatus.upcoming;

  final completedAt = schedule.lastCompletedAt;
  if (schedule.isOneTimeDone ||
      (completedAt != null && !dateOnly(completedAt).isBefore(today))) {
    return ItemStatus.completedToday;
  }

  final due = schedule.nextDueDate;
  if (due.isBefore(today)) return ItemStatus.overdue;
  if (due.isBefore(addDays(today, _dueSoonWindowDays))) {
    return ItemStatus.dueSoon;
  }
  return ItemStatus.upcoming;
}
