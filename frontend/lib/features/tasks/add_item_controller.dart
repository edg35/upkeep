import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/network/extract_error.dart';
import '../household/current_member.dart';
import '../items/item_repository.dart';
import '../items/item_type.dart';
import '../items/repeat_unit.dart';

class AddItemFormState {
  const AddItemFormState({
    this.itemType = ItemType.maintenance,
    this.name = '',
    this.categoryId,
    this.repeatCount = 1,
    this.repeatUnit = RepeatUnit.weeks,
    this.purchaseLink,
    this.firstDueOverride,
    this.assigneeIds = const <String>{},
    this.remindersEnabled = true,
    this.reminderLeadDays = 3,
    this.submitting = false,
    this.error,
  });

  final ItemType itemType;
  final String name;
  final String? categoryId;
  final int repeatCount;
  final RepeatUnit repeatUnit;
  final String? purchaseLink;

  /// Explicit first-due date chosen via the "First due" chips/picker. When
  /// null, the backend computes the due date from the repeat interval.
  final DateTime? firstDueOverride;

  final Set<String> assigneeIds;
  final bool remindersEnabled;
  final int reminderLeadDays;
  final bool submitting;
  final String? error;

  AddItemFormState copyWith({
    ItemType? itemType,
    String? name,
    String? categoryId,
    int? repeatCount,
    RepeatUnit? repeatUnit,
    String? purchaseLink,
    bool clearPurchaseLink = false,
    DateTime? firstDueOverride,
    bool clearFirstDueOverride = false,
    Set<String>? assigneeIds,
    bool? remindersEnabled,
    int? reminderLeadDays,
    bool? submitting,
    String? error,
    bool clearError = false,
  }) {
    return AddItemFormState(
      itemType: itemType ?? this.itemType,
      name: name ?? this.name,
      categoryId: categoryId ?? this.categoryId,
      repeatCount: repeatCount ?? this.repeatCount,
      repeatUnit: repeatUnit ?? this.repeatUnit,
      purchaseLink: clearPurchaseLink
          ? null
          : (purchaseLink ?? this.purchaseLink),
      firstDueOverride: clearFirstDueOverride
          ? null
          : (firstDueOverride ?? this.firstDueOverride),
      assigneeIds: assigneeIds ?? this.assigneeIds,
      remindersEnabled: remindersEnabled ?? this.remindersEnabled,
      reminderLeadDays: reminderLeadDays ?? this.reminderLeadDays,
      submitting: submitting ?? this.submitting,
      error: clearError ? null : (error ?? this.error),
    );
  }
}

class AddItemController extends StateNotifier<AddItemFormState> {
  AddItemController(this._itemApi, String? currentUserId)
    : super(
        AddItemFormState(
          assigneeIds: currentUserId != null ? {currentUserId} : const {},
        ),
      );

  final ItemApi _itemApi;

  void setItemType(ItemType type) {
    state = state.copyWith(
      itemType: type,
      // Link-to-replacement only makes sense for Supply items.
      clearPurchaseLink: type != ItemType.consumable,
    );
  }

  void setName(String value) => state = state.copyWith(name: value);

  void setCategory(String id) => state = state.copyWith(categoryId: id);

  void setRepeat(int count, RepeatUnit unit) {
    state = state.copyWith(repeatCount: count, repeatUnit: unit);
  }

  void setPurchaseLink(String value) {
    state = state.copyWith(
      purchaseLink: value,
      clearPurchaseLink: value.isEmpty,
    );
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

  Future<bool> submit() async {
    if (state.name.trim().isEmpty) {
      state = state.copyWith(error: 'Give it a name before saving.');
      return false;
    }

    state = state.copyWith(submitting: true, clearError: true);
    try {
      final schedule = <String, dynamic>{
        'tracking_mode': 'INTERVAL',
        'interval_days': state.repeatUnit.toDays(state.repeatCount),
        if (state.firstDueOverride != null)
          'initial_due_date': state.firstDueOverride!.toUtc().toIso8601String(),
        if (state.remindersEnabled) 'lead_time_days': state.reminderLeadDays,
      };

      final body = <String, dynamic>{
        'name': state.name.trim(),
        if (state.categoryId != null) 'category_id': state.categoryId,
        'item_type': state.itemType.toJson(),
        'schedule': schedule,
        if (state.itemType == ItemType.consumable &&
            (state.purchaseLink?.isNotEmpty ?? false))
          'purchase_link': state.purchaseLink,
        if (state.assigneeIds.isNotEmpty)
          'assignee_user_ids': state.assigneeIds.toList(),
      };

      await _itemApi.createItem(body);
      state = state.copyWith(submitting: false);
      return true;
    } on DioException catch (e) {
      state = state.copyWith(submitting: false, error: extractError(e));
      return false;
    } catch (e) {
      state = state.copyWith(submitting: false, error: e.toString());
      return false;
    }
  }
}

final addItemControllerProvider = StateNotifierProvider.autoDispose<
  AddItemController,
  AddItemFormState
>((ref) {
  final userId = ref.watch(currentUserIdProvider);
  return AddItemController(ref.watch(itemRepositoryProvider), userId);
});
