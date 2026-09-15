/// Unit for the add-item form's "repeats every N ___" field. The backend
/// only stores a day count (`ItemSchedule.interval_days`), so weeks/months
/// are converted to days client-side before submitting.
enum RepeatUnit { days, weeks, months }

extension RepeatUnitConversion on RepeatUnit {
  String get label {
    switch (this) {
      case RepeatUnit.days:
        return 'days';
      case RepeatUnit.weeks:
        return 'weeks';
      case RepeatUnit.months:
        return 'months';
    }
  }

  int toDays(int count) {
    switch (this) {
      case RepeatUnit.days:
        return count;
      case RepeatUnit.weeks:
        return count * 7;
      case RepeatUnit.months:
        return count * 30;
    }
  }
}
