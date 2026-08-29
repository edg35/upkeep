import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';
import '../../settings/task_list_density.dart';
import '../home_task.dart';

class TaskRow extends StatelessWidget {
  const TaskRow({
    super.key,
    required this.task,
    required this.density,
    required this.onToggle,
    this.completing = false,
  });

  final HomeTask task;
  final TaskListDensity density;
  final VoidCallback onToggle;
  final bool completing;

  @override
  Widget build(BuildContext context) {
    final compact = density == TaskListDensity.compact;

    return Padding(
      padding: EdgeInsets.symmetric(vertical: compact ? 10 : 14),
      child: Row(
        children: [
          _Checkbox(
            done: task.isDone,
            late: task.isLate,
            loading: completing,
            onTap: onToggle,
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  task.title,
                  style: AppTypography.row.copyWith(
                    decoration: task.isDone ? TextDecoration.lineThrough : null,
                    color: task.isDone ? AppColors.muted : AppColors.ink,
                  ),
                ),
                if (!compact) ...[
                  const SizedBox(height: 2),
                  Text(
                    task.subtitle,
                    style: AppTypography.meta.copyWith(
                      color: task.isLate ? AppColors.rose : AppColors.muted,
                    ),
                  ),
                ],
              ],
            ),
          ),
          _Trailing(task: task),
        ],
      ),
    );
  }
}

class _Checkbox extends StatelessWidget {
  const _Checkbox({
    required this.done,
    required this.late,
    required this.loading,
    required this.onTap,
  });

  final bool done;
  final bool late;
  final bool loading;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    if (loading) {
      return const SizedBox(
        width: 26,
        height: 26,
        child: Padding(
          padding: EdgeInsets.all(3),
          child: CircularProgressIndicator(strokeWidth: 2, color: AppColors.sage),
        ),
      );
    }
    return GestureDetector(
      onTap: onTap,
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
    );
  }
}

class _Trailing extends StatelessWidget {
  const _Trailing({required this.task});

  final HomeTask task;

  @override
  Widget build(BuildContext context) {
    if (task.isDone) return const SizedBox.shrink();
    if (task.isLate) {
      return Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        decoration: BoxDecoration(
          color: AppColors.rose.withValues(alpha: 0.15),
          borderRadius: BorderRadius.circular(20),
        ),
        child: Text(
          'Late',
          style: AppTypography.meta.copyWith(
            color: AppColors.rose,
            fontWeight: FontWeight.w600,
          ),
        ),
      );
    }
    if (task.dotColor != null) {
      return Container(
        width: 8,
        height: 8,
        decoration: BoxDecoration(color: task.dotColor, shape: BoxShape.circle),
      );
    }
    return const SizedBox.shrink();
  }
}
