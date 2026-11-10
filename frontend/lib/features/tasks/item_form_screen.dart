import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import '../../shared/widgets/app_text_field.dart';
import '../../shared/widgets/pill_button.dart';
import '../categories/categories_provider.dart';
import '../household/household_members_provider.dart';
import '../items/item_type.dart';
import '../items/tracking_mode.dart';
import 'item_form_controller.dart';
import 'widgets/assignee_avatar_row.dart';
import 'widgets/first_due_chip_row.dart';
import 'widgets/fixed_date_field.dart';
import 'widgets/icon_picker.dart';
import 'widgets/item_type_tab_row.dart';
import 'widgets/recurrence_builder.dart';
import 'widgets/reminder_toggle_row.dart';
import 'widgets/repeat_interval_field.dart';
import 'widgets/room_dropdown.dart';
import 'widgets/schedule_mode_selector.dart';

/// Add/edit form for a household item. Pass [itemId] to edit an existing
/// item — the form fetches and prefills it, and submit does a PATCH instead
/// of a POST. Consumables and bills go through the exact same form; only the
/// schedule shape and the purchase-link field vary with [ItemType].
class ItemFormScreen extends ConsumerWidget {
  const ItemFormScreen({super.key, this.itemId});

  final String? itemId;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final provider = itemFormControllerProvider(itemId);
    final state = ref.watch(provider);
    final controller = ref.read(provider.notifier);
    final categoriesAsync = ref.watch(categoriesProvider);
    final membersAsync = ref.watch(householdMembersProvider);
    final isEditing = itemId != null;

    return Scaffold(
      backgroundColor: AppColors.paper,
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 12, 12, 0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(isEditing ? 'Edit item' : 'New item', style: AppTypography.display),
                  IconButton(
                    icon: const Icon(Icons.close),
                    color: AppColors.ink,
                    style: IconButton.styleFrom(
                      backgroundColor: AppColors.card,
                      shape: const CircleBorder(),
                    ),
                    onPressed: () => context.pop(),
                  ),
                ],
              ),
            ),
            if (state.error != null)
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 8, 20, 0),
                child: Text(
                  state.error!,
                  style: AppTypography.meta.copyWith(color: AppColors.rose),
                ),
              ),
            if (state.loading)
              const Expanded(
                child: Center(child: CircularProgressIndicator(color: AppColors.forest)),
              )
            else
              Expanded(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.fromLTRB(20, 16, 20, 16),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      ItemTypeTabRow(selected: state.itemType, onChanged: controller.setItemType),
                      const SizedBox(height: 16),
                      AppTextField(
                        label: 'What is it?',
                        initialValue: state.name,
                        onChanged: controller.setName,
                      ),
                      const SizedBox(height: 16),
                      categoriesAsync.when(
                        data: (categories) => RoomDropdown(
                          categories: categories,
                          value: state.categoryId,
                          onChanged: (id) {
                            if (id != null) controller.setCategory(id);
                          },
                        ),
                        loading: () => const LinearProgressIndicator(color: AppColors.sage),
                        error: (e, st) => Text(
                          'Could not load rooms',
                          style: AppTypography.meta.copyWith(color: AppColors.rose),
                        ),
                      ),
                      const SizedBox(height: 16),
                      IconPicker(value: state.icon, onChanged: controller.setIcon),
                      const SizedBox(height: 16),
                      ScheduleModeSelector(
                        selected: state.trackingMode,
                        onChanged: controller.setTrackingMode,
                      ),
                      const SizedBox(height: 16),
                      switch (state.trackingMode) {
                        TrackingMode.interval => RepeatIntervalField(
                          count: state.repeatCount,
                          unit: state.repeatUnit,
                          onChanged: controller.setRepeat,
                        ),
                        TrackingMode.fixedDate => FixedDateField(
                          value: state.fixedDate,
                          onChanged: controller.setFixedDate,
                        ),
                        TrackingMode.recurring => RecurrenceBuilder(
                          value: state.recurrence,
                          onChanged: controller.setRecurrence,
                        ),
                      },
                      if (state.itemType == ItemType.consumable) ...[
                        const SizedBox(height: 16),
                        AppTextField(
                          label: 'Link to find a replacement',
                          keyboardType: TextInputType.url,
                          initialValue: state.purchaseLink,
                          onChanged: controller.setPurchaseLink,
                        ),
                      ],
                      const SizedBox(height: 16),
                      AppTextField(
                        label: 'Notes',
                        maxLines: 3,
                        initialValue: state.notes,
                        onChanged: controller.setNotes,
                      ),
                      if (state.trackingMode == TrackingMode.interval) ...[
                        const SizedBox(height: 16),
                        FirstDueChipRow(
                          value: state.firstDueOverride,
                          onChanged: controller.setFirstDue,
                        ),
                      ],
                      if (!isEditing) ...[
                        const SizedBox(height: 16),
                        membersAsync.when(
                          data: (members) => AssigneeAvatarRow(
                            members: members,
                            selectedIds: state.assigneeIds,
                            onToggle: controller.toggleAssignee,
                          ),
                          loading: () => const LinearProgressIndicator(color: AppColors.sage),
                          error: (e, st) => Text(
                            'Could not load household members',
                            style: AppTypography.meta.copyWith(color: AppColors.rose),
                          ),
                        ),
                      ],
                      const SizedBox(height: 16),
                      ReminderToggleRow(
                        enabled: state.remindersEnabled,
                        leadDays: state.reminderLeadDays,
                        onChanged: controller.setRemindersEnabled,
                      ),
                    ],
                  ),
                ),
              ),
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 0, 20, 20),
              child: PillButton(
                label: isEditing ? 'Save changes' : 'Add to Upkeep',
                loading: state.submitting,
                onPressed: state.loading
                    ? null
                    : () async {
                        final ok = await controller.submit();
                        if (ok && context.mounted) {
                          context.pop();
                        }
                      },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
