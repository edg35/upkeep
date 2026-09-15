import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import '../../shared/widgets/app_text_field.dart';
import '../../shared/widgets/pill_button.dart';
import '../categories/categories_provider.dart';
import '../household/household_members_provider.dart';
import '../items/item_type.dart';
import 'add_item_controller.dart';
import 'widgets/assignee_avatar_row.dart';
import 'widgets/first_due_chip_row.dart';
import 'widgets/item_type_tab_row.dart';
import 'widgets/reminder_toggle_row.dart';
import 'widgets/repeat_interval_field.dart';
import 'widgets/room_dropdown.dart';

class AddTaskScreen extends ConsumerWidget {
  const AddTaskScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final state = ref.watch(addItemControllerProvider);
    final controller = ref.read(addItemControllerProvider.notifier);
    final categoriesAsync = ref.watch(categoriesProvider);
    final membersAsync = ref.watch(householdMembersProvider);

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
                  Text('New item', style: AppTypography.display),
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
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.fromLTRB(20, 16, 20, 16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    ItemTypeTabRow(
                      selected: state.itemType,
                      onChanged: controller.setItemType,
                    ),
                    const SizedBox(height: 16),
                    AppTextField(
                      label: 'What is it?',
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
                      loading: () => const LinearProgressIndicator(
                        color: AppColors.sage,
                      ),
                      error: (e, st) => Text(
                        'Could not load rooms',
                        style: AppTypography.meta.copyWith(
                          color: AppColors.rose,
                        ),
                      ),
                    ),
                    const SizedBox(height: 16),
                    RepeatIntervalField(
                      count: state.repeatCount,
                      unit: state.repeatUnit,
                      onChanged: controller.setRepeat,
                    ),
                    if (state.itemType == ItemType.consumable) ...[
                      const SizedBox(height: 16),
                      AppTextField(
                        label: 'Link to find a replacement',
                        keyboardType: TextInputType.url,
                        onChanged: controller.setPurchaseLink,
                      ),
                    ],
                    const SizedBox(height: 16),
                    FirstDueChipRow(
                      value: state.firstDueOverride,
                      onChanged: controller.setFirstDue,
                    ),
                    const SizedBox(height: 16),
                    membersAsync.when(
                      data: (members) => AssigneeAvatarRow(
                        members: members,
                        selectedIds: state.assigneeIds,
                        onToggle: controller.toggleAssignee,
                      ),
                      loading: () => const LinearProgressIndicator(
                        color: AppColors.sage,
                      ),
                      error: (e, st) => Text(
                        'Could not load household members',
                        style: AppTypography.meta.copyWith(
                          color: AppColors.rose,
                        ),
                      ),
                    ),
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
                label: 'Add to Upkeep',
                loading: state.submitting,
                onPressed: () async {
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
