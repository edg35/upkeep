// shared/utils/day_math.dart
//
// Calendar-day arithmetic in local time. A local day is not always 24 hours
// (23 on spring-forward, 25 on fall-back), so `Duration(days: n)` and
// `.inDays` on local DateTimes drift by a day around DST changes.

/// Midnight (local) at the start of [d]'s calendar day.
DateTime dateOnly(DateTime d) => DateTime(d.year, d.month, d.day);

/// Local midnight [days] calendar days after [date]'s day (negative for
/// earlier). DateTime normalises overflow, so month and year ends work.
DateTime addDays(DateTime date, int days) =>
    DateTime(date.year, date.month, date.day + days);

/// Whole calendar days from [from]'s day to [to]'s day, ignoring time of
/// day. Computed on UTC dates, where every day is exactly 24 hours.
int daysBetween(DateTime from, DateTime to) => DateTime.utc(
  to.year,
  to.month,
  to.day,
).difference(DateTime.utc(from.year, from.month, from.day)).inDays;
