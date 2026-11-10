class ItemSchedule {
  const ItemSchedule({
    required this.trackingMode,
    required this.nextDueDate,
    this.lastCompletedAt,
  });

  final String trackingMode; // 'INTERVAL' | 'FIXED_DATE' | 'RECURRING'
  final DateTime nextDueDate;
  final DateTime? lastCompletedAt;

  factory ItemSchedule.fromJson(Map<String, dynamic> json) {
    return ItemSchedule(
      trackingMode: json['tracking_mode'] as String,
      nextDueDate: DateTime.parse(json['next_due_date'] as String).toLocal(),
      lastCompletedAt: json['last_completed_at'] != null
          ? DateTime.parse(json['last_completed_at'] as String).toLocal()
          : null,
    );
  }
}

class ItemCompletion {
  const ItemCompletion({required this.completedAt, this.completedByName});

  final DateTime completedAt;
  final String? completedByName;

  factory ItemCompletion.fromJson(Map<String, dynamic> json) {
    final completer = json['completer'] as Map<String, dynamic>?;
    return ItemCompletion(
      completedAt: DateTime.parse(json['completed_at'] as String).toLocal(),
      completedByName: completer?['name'] as String?,
    );
  }
}

class ItemAssignee {
  const ItemAssignee({required this.userId, required this.name});

  final String userId;
  final String name;

  factory ItemAssignee.fromJson(Map<String, dynamic> json) {
    final user = json['user'] as Map<String, dynamic>?;
    return ItemAssignee(
      userId: (user?['user_id'] ?? json['user_id']) as String,
      name: (user?['name'] ?? json['name']) as String? ?? 'Someone',
    );
  }
}

class HouseholdItem {
  const HouseholdItem({
    required this.id,
    required this.name,
    required this.itemType,
    this.categoryId,
    this.categoryColor,
    this.purchaseLink,
    this.schedule,
    this.latestCompletion,
    this.assignees = const <ItemAssignee>[],
  });

  final String id;
  final String name;
  final String itemType; // 'CONSUMABLE' | 'MAINTENANCE' | 'BILL' | 'APPOINTMENT'
  final String? categoryId;
  final String? categoryColor;
  final String? purchaseLink;
  final ItemSchedule? schedule;
  final ItemCompletion? latestCompletion;
  final List<ItemAssignee> assignees;

  factory HouseholdItem.fromJson(Map<String, dynamic> json) {
    final category = json['category'] as Map<String, dynamic>?;
    final histories = json['histories'] as List?;
    final assignees = json['assignees'] as List?;
    return HouseholdItem(
      id: json['item_id'] as String,
      name: json['name'] as String,
      itemType: json['item_type'] as String,
      categoryId: json['category_id'] as String?,
      categoryColor: category?['color'] as String?,
      purchaseLink: json['purchase_link'] as String?,
      schedule: json['schedule'] != null
          ? ItemSchedule.fromJson(json['schedule'] as Map<String, dynamic>)
          : null,
      latestCompletion: (histories != null && histories.isNotEmpty)
          ? ItemCompletion.fromJson(histories.first as Map<String, dynamic>)
          : null,
      assignees: assignees != null
          ? assignees.map((a) => ItemAssignee.fromJson(a as Map<String, dynamic>)).toList()
          : const <ItemAssignee>[],
    );
  }
}
