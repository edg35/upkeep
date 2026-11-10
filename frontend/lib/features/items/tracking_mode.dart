/// Mirrors the backend's `TrackingMode` enum (`INTERVAL` | `FIXED_DATE` |
/// `RECURRING`). Used by the item form, which switches its schedule fields
/// on this.
enum TrackingMode { interval, fixedDate, recurring }

extension TrackingModeJson on TrackingMode {
  String toJson() {
    switch (this) {
      case TrackingMode.interval:
        return 'INTERVAL';
      case TrackingMode.fixedDate:
        return 'FIXED_DATE';
      case TrackingMode.recurring:
        return 'RECURRING';
    }
  }

  String get tabLabel {
    switch (this) {
      case TrackingMode.interval:
        return 'Every N';
      case TrackingMode.fixedDate:
        return 'Fixed date';
      case TrackingMode.recurring:
        return 'Custom';
    }
  }

  static TrackingMode fromJson(String value) {
    switch (value) {
      case 'FIXED_DATE':
        return TrackingMode.fixedDate;
      case 'RECURRING':
        return TrackingMode.recurring;
      default:
        return TrackingMode.interval;
    }
  }
}
