import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';
import '../../settings/task_list_density.dart';
import '../home_task.dart';
import 'task_row.dart';

class TaskList extends StatelessWidget {
  const TaskList({
    super.key,
    required this.tasks,
    required this.density,
    required this.onToggle,
    this.completingId,
  });

  final List<HomeTask> tasks;
  final TaskListDensity density;
  final ValueChanged<String> onToggle;
  final String? completingId;

  @override
  Widget build(BuildContext context) {
    if (density == TaskListDensity.comfortable) {
      return Column(
        children: [
          for (final task in tasks)
            Container(
              margin: const EdgeInsets.only(bottom: 12),
              padding: const EdgeInsets.symmetric(horizontal: 16),
              decoration: BoxDecoration(
                color: AppColors.card,
                borderRadius: BorderRadius.circular(20),
              ),
              child: TaskRow(
                task: task,
                density: density,
                completing: task.id == completingId,
                onToggle: () => onToggle(task.id),
              ),
            ),
        ],
      );
    }

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      decoration: BoxDecoration(
        color: AppColors.card,
        borderRadius: BorderRadius.circular(24),
      ),
      child: Column(
        children: [
          for (var i = 0; i < tasks.length; i++) ...[
            TaskRow(
              task: tasks[i],
              density: density,
              completing: tasks[i].id == completingId,
              onToggle: () => onToggle(tasks[i].id),
            ),
            if (i != tasks.length - 1) const Divider(height: 1, color: AppColors.paper),
          ],
        ],
      ),
    );
  }
}
