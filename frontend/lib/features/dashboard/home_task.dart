import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../items/item.dart';
import '../items/items_controller.dart';

/// A task shown on the home dashboard's "Today" list — derived from
/// [HouseholdItem]s that are due today, overdue, or completed today.
class HomeTask {
  const HomeTask({
    required this.id,
    required this.title,
    required this.subtitle,
    this.isDone = false,
    this.isLate = false,
    this.dotColor,
  });

  final String id;
  final String title;
  final String subtitle;
  final bool isDone;
  final bool isLate;
  final Color? dotColor;
}

Color? parseHexColor(String? hex) {
  if (hex == null) return null;
  final cleaned = hex.replaceFirst('#', '');
  final value = int.tryParse(cleaned, radix: 16);
  if (value == null) return null;
  return Color(cleaned.length == 6 ? 0xFF000000 | value : value);
}

DateTime _dateOnly(DateTime d) => DateTime(d.year, d.month, d.day);

String _formatTime(DateTime time) {
  final hour = time.hour % 12 == 0 ? 12 : time.hour % 12;
  final minute = time.minute.toString().padLeft(2, '0');
  final period = time.hour < 12 ? 'AM' : 'PM';
  return '$hour:$minute $period';
}

/// Items due today, overdue, or completed today — sorted late-first, then
/// due-today, then completed-today last.
List<HomeTask> buildTodayTasks(List<HouseholdItem> items, DateTime now) {
  final today = _dateOnly(now);
  final tomorrow = today.add(const Duration(days: 1));

  final tasks = <(int order, HomeTask task)>[];

  for (final item in items) {
    final schedule = item.schedule;
    if (schedule == null) continue;

    final completedAt = schedule.lastCompletedAt;
    final completedToday = completedAt != null &&
        !completedAt.isBefore(today) &&
        completedAt.isBefore(tomorrow);
    final dueTodayOrOverdue = schedule.nextDueDate.isBefore(tomorrow);

    if (completedToday) {
      tasks.add((
        2,
        HomeTask(
          id: item.id,
          title: item.name,
          subtitle:
              'Done by ${item.latestCompletion?.completedByName ?? 'someone'} · '
              '${_formatTime(completedAt)}',
          isDone: true,
        ),
      ));
    } else if (dueTodayOrOverdue) {
      final overdueDays = today.difference(_dateOnly(schedule.nextDueDate)).inDays;
      final isLate = overdueDays > 0;
      tasks.add((
        isLate ? 0 : 1,
        HomeTask(
          id: item.id,
          title: item.name,
          subtitle: isLate
              ? '$overdueDays day${overdueDays == 1 ? '' : 's'} late'
              : 'Due today',
          isLate: isLate,
          dotColor: parseHexColor(item.categoryColor),
        ),
      ));
    }
  }

  tasks.sort((a, b) => a.$1.compareTo(b.$1));
  return [for (final t in tasks) t.$2];
}

final dashboardTasksProvider = Provider<List<HomeTask>>((ref) {
  final items = ref.watch(itemsControllerProvider).items;
  return buildTodayTasks(items, DateTime.now());
});
