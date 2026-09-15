/// Mirrors the backend's `ItemType` enum (`CONSUMABLE` | `MAINTENANCE` |
/// `BILL` | `APPOINTMENT`). The read/list path (`item.dart`) keeps this as a
/// raw string to minimize blast radius; this typed enum is used by the
/// add-item form, which needs to switch on it.
enum ItemType { maintenance, bill, consumable, appointment }

extension ItemTypeJson on ItemType {
  String toJson() {
    switch (this) {
      case ItemType.maintenance:
        return 'MAINTENANCE';
      case ItemType.bill:
        return 'BILL';
      case ItemType.consumable:
        return 'CONSUMABLE';
      case ItemType.appointment:
        return 'APPOINTMENT';
    }
  }

  String get tabLabel {
    switch (this) {
      case ItemType.maintenance:
        return 'Upkeep';
      case ItemType.bill:
        return 'Bill';
      case ItemType.consumable:
        return 'Supply';
      case ItemType.appointment:
        return 'Appointment';
    }
  }
}
