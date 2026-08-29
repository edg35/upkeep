import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import '../items/item.dart';
import 'home_task.dart';

/// Maps each date in the 7-day range starting at [weekStart] to a due-item
/// color, for the week-glance dots. Only reflects each item's *next* due
/// date (items don't carry a full future recurrence series), so it's most
/// accurate for the current week.
Map<DateTime, Color> dueColorsForWeek(List<HouseholdItem> items, DateTime weekStart) {
  final start = DateTime(weekStart.year, weekStart.month, weekStart.day);
  final end = start.add(const Duration(days: 7));
  final colors = <DateTime, Color>{};

  for (final item in items) {
    final dueDate = item.schedule?.nextDueDate;
    if (dueDate == null) continue;
    final day = DateTime(dueDate.year, dueDate.month, dueDate.day);
    if (day.isBefore(start) || !day.isBefore(end)) continue;
    colors[day] ??= parseHexColor(item.categoryColor) ?? AppColors.muted;
  }

  return colors;
}
