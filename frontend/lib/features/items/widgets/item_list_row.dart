import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';
import '../../dashboard/home_task.dart' show parseHexColor;
import '../item.dart';
import '../item_status.dart';

const _monthAbbrev = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

DateTime _dateOnly(DateTime d) => DateTime(d.year, d.month, d.day);

String _subtitle(HouseholdItem item, ItemStatus status, DateTime now) {
  final schedule = item.schedule;
  if (schedule == null) return '';
  final today = _dateOnly(now);

  switch (status) {
    case ItemStatus.completedToday:
      final by = item.latestCompletion?.completedByName;
      return by != null ? 'Done by $by' : 'Done today';
    case ItemStatus.overdue:
      final days = today.difference(_dateOnly(schedule.nextDueDate)).inDays;
      return '$days day${days == 1 ? '' : 's'} late';
    case ItemStatus.dueSoon:
    case ItemStatus.upcoming:
      final due = _dateOnly(schedule.nextDueDate);
      if (due == today) return 'Due today';
      if (due == today.add(const Duration(days: 1))) return 'Due tomorrow';
      return 'Due ${_monthAbbrev[due.month - 1]} ${due.day}';
  }
}

class ItemListRow extends StatelessWidget {
  const ItemListRow({
    super.key,
    required this.item,
    required this.onToggle,
    required this.onTap,
    this.completing = false,
  });

  final HouseholdItem item;
  final VoidCallback onToggle;
  final VoidCallback onTap;
  final bool completing;

  @override
  Widget build(BuildContext context) {
    final status = computeItemStatus(item, DateTime.now());
    final done = status == ItemStatus.completedToday;
    final late = status == ItemStatus.overdue;

    return GestureDetector(
      onTap: onTap,
      behavior: HitTestBehavior.opaque,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 12),
        child: Row(
          children: [
            if (completing)
              const SizedBox(
                width: 26,
                height: 26,
                child: Padding(
                  padding: EdgeInsets.all(3),
                  child: CircularProgressIndicator(strokeWidth: 2, color: AppColors.sage),
                ),
              )
            else
              GestureDetector(
                onTap: onToggle,
                child: Container(
                  width: 26,
                  height: 26,
                  decoration: BoxDecoration(
                    color: done ? AppColors.sage : Colors.transparent,
                    borderRadius: BorderRadius.circular(8),
                    border: done
                        ? null
                        : Border.all(color: late ? AppColors.rose : AppColors.muted, width: 1.5),
                  ),
                  child: done
                      ? const Icon(Icons.check_rounded, size: 18, color: AppColors.paper)
                      : null,
                ),
              ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    item.name,
                    style: AppTypography.row.copyWith(
                      decoration: done ? TextDecoration.lineThrough : null,
                      color: done ? AppColors.muted : AppColors.ink,
                    ),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    _subtitle(item, status, DateTime.now()),
                    style: AppTypography.meta.copyWith(
                      color: late ? AppColors.rose : AppColors.muted,
                    ),
                  ),
                ],
              ),
            ),
            if (item.assignees.isNotEmpty)
              Padding(
                padding: const EdgeInsets.only(left: 8),
                child: CircleAvatar(
                  radius: 12,
                  backgroundColor: AppColors.pale,
                  foregroundColor: AppColors.forest,
                  child: Text(
                    item.assignees.first.name[0].toUpperCase(),
                    style: AppTypography.meta,
                  ),
                ),
              ),
            if (parseHexColor(item.categoryColor) != null)
              Container(
                margin: const EdgeInsets.only(left: 8),
                width: 8,
                height: 8,
                decoration: BoxDecoration(
                  color: parseHexColor(item.categoryColor),
                  shape: BoxShape.circle,
                ),
              ),
          ],
        ),
      ),
    );
  }
}
