enum RecurrenceFrequency { daily, weekly, monthly, yearly }

extension RecurrenceFrequencyLabel on RecurrenceFrequency {
  String get label {
    switch (this) {
      case RecurrenceFrequency.daily:
        return 'Daily';
      case RecurrenceFrequency.weekly:
        return 'Weekly';
      case RecurrenceFrequency.monthly:
        return 'Monthly';
      case RecurrenceFrequency.yearly:
        return 'Yearly';
    }
  }
}

const _weekdayCodes = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

/// A hand-rolled subset of RRULE (RFC 5545) covering the patterns the
/// "Custom schedule" builder exposes. Only ever generated and parsed by this
/// app, so it doesn't need to handle the full RRULE grammar — just the shape
/// [toRRule] produces.
class RecurrenceRule {
  const RecurrenceRule({
    required this.frequency,
    this.interval = 1,
    this.weekdays = const <int>{},
    this.monthDay,
    this.lastDayOfMonth = false,
  });

  final RecurrenceFrequency frequency;

  /// "Every [interval] day(s)/week(s)/month(s)/year(s)".
  final int interval;

  /// 1 (Monday) - 7 (Sunday), matching [DateTime.weekday]. Only meaningful
  /// for [RecurrenceFrequency.weekly].
  final Set<int> weekdays;

  /// Day of month (1-31). Only meaningful for [RecurrenceFrequency.monthly]
  /// when [lastDayOfMonth] is false.
  final int? monthDay;

  /// "On the last day of the month" — only meaningful for
  /// [RecurrenceFrequency.monthly].
  final bool lastDayOfMonth;

  RecurrenceRule copyWith({
    RecurrenceFrequency? frequency,
    int? interval,
    Set<int>? weekdays,
    int? monthDay,
    bool clearMonthDay = false,
    bool? lastDayOfMonth,
  }) {
    return RecurrenceRule(
      frequency: frequency ?? this.frequency,
      interval: interval ?? this.interval,
      weekdays: weekdays ?? this.weekdays,
      monthDay: clearMonthDay ? null : (monthDay ?? this.monthDay),
      lastDayOfMonth: lastDayOfMonth ?? this.lastDayOfMonth,
    );
  }

  String toRRule() {
    final parts = <String>['FREQ=${frequency.name.toUpperCase()}', 'INTERVAL=$interval'];
    if (frequency == RecurrenceFrequency.weekly && weekdays.isNotEmpty) {
      final days = (weekdays.toList()..sort()).map((d) => _weekdayCodes[d - 1]).join(',');
      parts.add('BYDAY=$days');
    }
    if (frequency == RecurrenceFrequency.monthly) {
      parts.add('BYMONTHDAY=${lastDayOfMonth ? -1 : (monthDay ?? 1)}');
    }
    return parts.join(';');
  }

  static RecurrenceRule fromRRule(String rule) {
    final fields = <String, String>{};
    for (final part in rule.split(';')) {
      final eq = part.indexOf('=');
      if (eq == -1) continue;
      fields[part.substring(0, eq)] = part.substring(eq + 1);
    }

    final frequency = RecurrenceFrequency.values.firstWhere(
      (f) => f.name.toUpperCase() == fields['FREQ'],
      orElse: () => RecurrenceFrequency.monthly,
    );
    final interval = int.tryParse(fields['INTERVAL'] ?? '1') ?? 1;
    final weekdays = (fields['BYDAY'] ?? '')
        .split(',')
        .map((code) => _weekdayCodes.indexOf(code) + 1)
        .where((d) => d > 0)
        .toSet();
    final monthDay = int.tryParse(fields['BYMONTHDAY'] ?? '');

    return RecurrenceRule(
      frequency: frequency,
      interval: interval,
      weekdays: weekdays,
      monthDay: monthDay != null && monthDay > 0 ? monthDay : null,
      lastDayOfMonth: monthDay == -1,
    );
  }
}
