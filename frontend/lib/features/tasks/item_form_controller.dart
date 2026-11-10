import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../household/current_member.dart';
import '../items/item_repository.dart';
import '../items/item_type.dart';
import '../items/items_controller.dart';
import '../items/recurrence_rule.dart';
import '../items/repeat_unit.dart';
import '../items/tracking_mode.dart';

class ItemFormState {
  const ItemFormState({
    this.itemType = ItemType.maintenance,
    this.name = '',
    this.categoryId,
    this.icon,
    this.notes,
    this.trackingMode = TrackingMode.interval,
    this.repeatCount = 1,
    this.repeatUnit = RepeatUnit.weeks,
    this.fixedDate,
    this.recurrence = const RecurrenceRule(frequency: RecurrenceFrequency.monthly, monthDay: 1),
    this.purchaseLink,
    this.firstDueOverride,
    this.assigneeIds = const <String>{},
    this.remindersEnabled = true,
    this.reminderLeadDays = 3,
    this.loading = false,
    this.submitting = false,
    this.error,
  });

  final ItemType itemType;
  final String name;
  final String? categoryId;
  final String? icon;
  final String? notes;

  final TrackingMode trackingMode;
  final int repeatCount;
  final RepeatUnit repeatUnit;
  final DateTime? fixedDate;
  final RecurrenceRule recurrence;

  final String? purchaseLink;

  /// Explicit first-due date chosen via the "First due" chips/picker. Only
  /// meaningful in [TrackingMode.interval]; when null, the backend computes
  /// the due date from the repeat interval.
  final DateTime? firstDueOverride;

  /// Only editable when creating — the backend's update endpoint doesn't
  /// support reassigning members.
  final Set<String> assigneeIds;
  final bool remindersEnabled;
  final int reminderLeadDays;

  /// True while fetching an existing item to prefill an edit.
  final bool loading;
  final bool submitting;
  final String? error;

  ItemFormState copyWith({
    ItemType? itemType,
    String? name,
    String? categoryId,
    String? icon,
    String? notes,
    bool clearNotes = false,
    TrackingMode? trackingMode,
    int? repeatCount,
    RepeatUnit? repeatUnit,
    DateTime? fixedDate,
    RecurrenceRule? recurrence,
    String? purchaseLink,
    bool clearPurchaseLink = false,
    DateTime? firstDueOverride,
    bool clearFirstDueOverride = false,
    Set<String>? assigneeIds,
    bool? remindersEnabled,
    int? reminderLeadDays,
    bool? loading,
    bool? submitting,
    String? error,
    bool clearError = false,
  }) {
    return ItemFormState(
      itemType: itemType ?? this.itemType,
      name: name ?? this.name,
      categoryId: categoryId ?? this.categoryId,
      icon: icon ?? this.icon,
      notes: clearNotes ? null : (notes ?? this.notes),
      trackingMode: trackingMode ?? this.trackingMode,
      repeatCount: repeatCount ?? this.repeatCount,
      repeatUnit: repeatUnit ?? this.repeatUnit,
      fixedDate: fixedDate ?? this.fixedDate,
      recurrence: recurrence ?? this.recurrence,
      purchaseLink: clearPurchaseLink ? null : (purchaseLink ?? this.purchaseLink),
      firstDueOverride: clearFirstDueOverride ? null : (firstDueOverride ?? this.firstDueOverride),
      assigneeIds: assigneeIds ?? this.assigneeIds,
      remindersEnabled: remindersEnabled ?? this.remindersEnabled,
      reminderLeadDays: reminderLeadDays ?? this.reminderLeadDays,
      loading: loading ?? this.loading,
      submitting: submitting ?? this.submitting,
      error: clearError ? null : (error ?? this.error),
    );
  }
}

/// Best-effort reverse of [RepeatUnitConversion.toDays] for prefilling an
/// edit: picks the largest unit that divides the stored day count evenly.
(int, RepeatUnit) _fromDays(int days) {
  if (days % 30 == 0 && days >= 30) return (days ~/ 30, RepeatUnit.months);
  if (days % 7 == 0 && days >= 7) return (days ~/ 7, RepeatUnit.weeks);
  return (days, RepeatUnit.days);
}

class ItemFormController extends StateNotifier<ItemFormState> {
  ItemFormController(this._itemApi, this._createItem, this._updateItem, this.itemId, String? currentUserId)
    : super(
        ItemFormState(assigneeIds: currentUserId != null ? {currentUserId} : const {}),
      ) {
    if (itemId != null) _load(itemId!);
  }

  final ItemApi _itemApi;
  final Future<void> Function(Map<String, dynamic> body) _createItem;
  final Future<void> Function(String itemId, Map<String, dynamic> body) _updateItem;
  final String? itemId;

  bool get isEditing => itemId != null;

  Future<void> _load(String id) async {
    if (id.startsWith('local-')) {
      state = state.copyWith(
        error: "This item hasn't synced yet. Try again once you're back online.",
      );
      return;
    }
    state = state.copyWith(loading: true, clearError: true);
    try {
      final json = await _itemApi.getItem(id);
      final schedule = json['schedule'] as Map<String, dynamic>?;
      final trackingMode = TrackingModeJson.fromJson(schedule?['tracking_mode'] as String? ?? 'INTERVAL');
      final leadTimeDays = schedule?['lead_time_days'] as int?;

      var repeatCount = state.repeatCount;
      var repeatUnit = state.repeatUnit;
      DateTime? fixedDate;
      var recurrence = state.recurrence;

      switch (trackingMode) {
        case TrackingMode.interval:
          final intervalDays = schedule?['interval_days'] as int? ?? 7;
          (repeatCount, repeatUnit) = _fromDays(intervalDays);
        case TrackingMode.fixedDate:
          final raw = schedule?['fixed_due_date'] as String?;
          fixedDate = raw != null ? DateTime.parse(raw).toLocal() : null;
        case TrackingMode.recurring:
          final rule = schedule?['recurrence_rule'] as String?;
          if (rule != null) recurrence = RecurrenceRule.fromRRule(rule);
      }

      state = state.copyWith(
        itemType: ItemType.values.firstWhere(
          (t) => t.toJson() == json['item_type'],
          orElse: () => ItemType.maintenance,
        ),
        name: json['name'] as String? ?? '',
        categoryId: json['category_id'] as String?,
        icon: json['icon'] as String?,
        notes: json['notes'] as String?,
        purchaseLink: json['purchase_link'] as String?,
        trackingMode: trackingMode,
        repeatCount: repeatCount,
        repeatUnit: repeatUnit,
        fixedDate: fixedDate,
        recurrence: recurrence,
        remindersEnabled: leadTimeDays != null,
        reminderLeadDays: leadTimeDays ?? state.reminderLeadDays,
        loading: false,
      );
    } catch (e) {
      state = state.copyWith(loading: false, error: e.toString());
    }
  }

  void setItemType(ItemType type) {
    state = state.copyWith(
      itemType: type,
      // Link-to-replacement only makes sense for Supply items.
      clearPurchaseLink: type != ItemType.consumable,
    );
  }

  void setName(String value) => state = state.copyWith(name: value);

  void setCategory(String id) => state = state.copyWith(categoryId: id);

  void setIcon(String key) => state = state.copyWith(icon: key);

  void setNotes(String value) {
    state = state.copyWith(notes: value, clearNotes: value.isEmpty);
  }

  void setTrackingMode(TrackingMode mode) {
    state = state.copyWith(trackingMode: mode, clearFirstDueOverride: true);
  }

  void setRepeat(int count, RepeatUnit unit) {
    state = state.copyWith(repeatCount: count, repeatUnit: unit);
  }

  void setFixedDate(DateTime date) => state = state.copyWith(fixedDate: date);

  void setRecurrence(RecurrenceRule rule) => state = state.copyWith(recurrence: rule);

  void setPurchaseLink(String value) {
    state = state.copyWith(purchaseLink: value, clearPurchaseLink: value.isEmpty);
  }

  void setFirstDue(DateTime? date) {
    state = date == null
        ? state.copyWith(clearFirstDueOverride: true)
        : state.copyWith(firstDueOverride: date);
  }

  void toggleAssignee(String userId) {
    final next = Set<String>.from(state.assigneeIds);
    if (!next.remove(userId)) next.add(userId);
    state = state.copyWith(assigneeIds: next);
  }

  void setRemindersEnabled(bool enabled) {
    state = state.copyWith(remindersEnabled: enabled);
  }

  Map<String, dynamic> _buildSchedule() {
    switch (state.trackingMode) {
      case TrackingMode.interval:
        return {
          'tracking_mode': 'INTERVAL',
          'interval_days': state.repeatUnit.toDays(state.repeatCount),
          if (state.firstDueOverride != null)
            'initial_due_date': state.firstDueOverride!.toUtc().toIso8601String(),
        };
      case TrackingMode.fixedDate:
        return {
          'tracking_mode': 'FIXED_DATE',
          'fixed_due_date': (state.fixedDate ?? DateTime.now()).toUtc().toIso8601String(),
        };
      case TrackingMode.recurring:
        return {
          'tracking_mode': 'RECURRING',
          'recurrence_rule': state.recurrence.toRRule(),
        };
    }
  }

  Future<bool> submit() async {
    if (state.name.trim().isEmpty) {
      state = state.copyWith(error: 'Give it a name before saving.');
      return false;
    }
    if (state.trackingMode == TrackingMode.fixedDate && state.fixedDate == null) {
      state = state.copyWith(error: 'Pick a date before saving.');
      return false;
    }

    state = state.copyWith(submitting: true, clearError: true);
    try {
      final schedule = {
        ..._buildSchedule(),
        if (state.remindersEnabled) 'lead_time_days': state.reminderLeadDays,
      };

      final body = <String, dynamic>{
        'name': state.name.trim(),
        if (state.categoryId != null) 'category_id': state.categoryId,
        'item_type': state.itemType.toJson(),
        if (state.icon != null) 'icon': state.icon,
        if (state.notes?.isNotEmpty ?? false) 'notes': state.notes,
        'schedule': schedule,
        if (state.itemType == ItemType.consumable && (state.purchaseLink?.isNotEmpty ?? false))
          'purchase_link': state.purchaseLink,
        if (!isEditing && state.assigneeIds.isNotEmpty)
          'assignee_user_ids': state.assigneeIds.toList(),
      };

      if (isEditing) {
        await _updateItem(itemId!, body);
      } else {
        await _createItem(body);
      }
      state = state.copyWith(submitting: false);
      return true;
    } catch (e) {
      state = state.copyWith(submitting: false, error: e.toString());
      return false;
    }
  }
}

final itemFormControllerProvider = StateNotifierProvider.autoDispose
    .family<ItemFormController, ItemFormState, String?>((ref, itemId) {
  final userId = ref.watch(currentUserIdProvider);
  final itemsController = ref.watch(itemsControllerProvider.notifier);
  final itemApi = ref.watch(itemRepositoryProvider);
  return ItemFormController(
    itemApi,
    itemsController.createItem,
    itemsController.updateItem,
    itemId,
    userId,
  );
});
