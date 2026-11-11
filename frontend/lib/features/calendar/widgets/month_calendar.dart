import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';
import '../../dashboard/home_task.dart' show parseHexColor;
import '../../items/item.dart';
import '../calendar_days.dart';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const _weekdayInitials = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const _maxDots = 3;

/// A month grid with a dot under each day per task due that day (up to
/// three, colored by the task's category).
class MonthCalendar extends StatelessWidget {
  const MonthCalendar({
    super.key,
    required this.month,
    required this.selectedDay,
    required this.today,
    required this.itemsByDay,
    required this.onDaySelected,
    required this.onMonthChanged,
  });

  /// Any date in the month to show.
  final DateTime month;
  final DateTime selectedDay;
  final DateTime today;
  final Map<DateTime, List<HouseholdItem>> itemsByDay;
  final ValueChanged<DateTime> onDaySelected;

  /// Called with +1 / -1 for next / previous month.
  final ValueChanged<int> onMonthChanged;

  @override
  Widget build(BuildContext context) {
    final cells = monthGridDays(month);

    return GestureDetector(
      // Swipe left/right to change month, alongside the chevrons.
      onHorizontalDragEnd: (details) {
        final v = details.primaryVelocity ?? 0;
        if (v.abs() < 200) return;
        onMonthChanged(v < 0 ? 1 : -1);
      },
      child: Container(
        padding: const EdgeInsets.fromLTRB(12, 8, 12, 12),
        decoration: BoxDecoration(
          color: AppColors.card,
          borderRadius: BorderRadius.circular(24),
        ),
        child: Column(
          children: [
            Row(
              children: [
                IconButton(
                  tooltip: 'Previous month',
                  icon: const Icon(
                    Icons.chevron_left_rounded,
                    color: AppColors.ink,
                  ),
                  onPressed: () => onMonthChanged(-1),
                ),
                Expanded(
                  child: Text(
                    '${monthNames[month.month - 1]} ${month.year}',
                    textAlign: TextAlign.center,
                    style: AppTypography.row.copyWith(
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
                IconButton(
                  tooltip: 'Next month',
                  icon: const Icon(
                    Icons.chevron_right_rounded,
                    color: AppColors.ink,
                  ),
                  onPressed: () => onMonthChanged(1),
                ),
              ],
            ),
            const SizedBox(height: 4),
            Row(
              children: [
                for (final d in _weekdayInitials)
                  Expanded(
                    child: Center(child: Text(d, style: AppTypography.meta)),
                  ),
              ],
            ),
            const SizedBox(height: 6),
            for (var week = 0; week < cells.length ~/ 7; week++)
              Row(
                children: [
                  for (final day in cells.sublist(week * 7, week * 7 + 7))
                    Expanded(
                      child: day == null
                          ? const SizedBox(height: _DayCell.height)
                          : _DayCell(
                              day: day,
                              selected: day == selectedDay,
                              isToday: day == today,
                              items: itemsByDay[day] ?? const [],
                              onTap: () => onDaySelected(day),
                            ),
                    ),
                ],
              ),
          ],
        ),
      ),
    );
  }
}

class _DayCell extends StatelessWidget {
  const _DayCell({
    required this.day,
    required this.selected,
    required this.isToday,
    required this.items,
    required this.onTap,
  });

  static const height = 52.0;

  final DateTime day;
  final bool selected;
  final bool isToday;
  final List<HouseholdItem> items;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final count = items.length;
    return Semantics(
      button: true,
      selected: selected,
      label:
          '${monthNames[day.month - 1]} ${day.day}, '
          '$count task${count == 1 ? '' : 's'} due',
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: SizedBox(
          height: height,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                width: 32,
                height: 32,
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  color: selected ? AppColors.forest : Colors.transparent,
                  shape: BoxShape.circle,
                  border: isToday && !selected
                      ? Border.all(color: AppColors.sage, width: 1.5)
                      : null,
                ),
                child: ExcludeSemantics(
                  child: Text(
                    '${day.day}',
                    style: AppTypography.body.copyWith(
                      color: selected ? AppColors.paper : AppColors.ink,
                      fontWeight: isToday || selected
                          ? FontWeight.w600
                          : FontWeight.w400,
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 4),
              SizedBox(
                height: 6,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    for (final item in items.take(_maxDots))
                      Container(
                        key: ValueKey('due-dot-${item.id}'),
                        margin: const EdgeInsets.symmetric(horizontal: 1.5),
                        width: 5,
                        height: 5,
                        decoration: BoxDecoration(
                          color:
                              parseHexColor(item.categoryColor) ??
                              AppColors.sage,
                          shape: BoxShape.circle,
                        ),
                      ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
