import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/theme/app_theme.dart';
import '../../items/items_controller.dart';
import '../week_due_colors.dart';

const _monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const _dayLetters = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

class WeekGlance extends ConsumerStatefulWidget {
  const WeekGlance({super.key});

  @override
  ConsumerState<WeekGlance> createState() => _WeekGlanceState();
}

class _WeekGlanceState extends ConsumerState<WeekGlance> {
  int _weekOffset = 0;

  @override
  Widget build(BuildContext context) {
    final today = DateTime.now();
    final startOfThisWeek = today.subtract(Duration(days: today.weekday - 1));
    final weekStart = startOfThisWeek.add(Duration(days: 7 * _weekOffset));
    final days = List.generate(7, (i) => weekStart.add(Duration(days: i)));
    final monthLabel = '${_monthNames[weekStart.month - 1]} ${weekStart.year}';

    final items = ref.watch(itemsControllerProvider).items;
    final dueColors = dueColorsForWeek(items, weekStart);

    return Container(
      padding: const EdgeInsets.fromLTRB(20, 18, 20, 20),
      decoration: BoxDecoration(
        color: AppColors.card,
        borderRadius: BorderRadius.circular(28),
      ),
      child: Column(
        children: [
          Row(
            children: [
              Expanded(child: Text(monthLabel, style: AppTypography.title)),
              _WeekNavButton(
                icon: Icons.chevron_left_rounded,
                onTap: () => setState(() => _weekOffset -= 1),
              ),
              const SizedBox(width: 4),
              _WeekNavButton(
                icon: Icons.chevron_right_rounded,
                onTap: () => setState(() => _weekOffset += 1),
              ),
            ],
          ),
          const SizedBox(height: 14),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              for (var i = 0; i < 7; i++)
                _DayColumn(
                  letter: _dayLetters[i],
                  day: days[i].day,
                  isToday: _weekOffset == 0 &&
                      days[i].year == today.year &&
                      days[i].month == today.month &&
                      days[i].day == today.day,
                  dueColor: dueColors[DateTime(days[i].year, days[i].month, days[i].day)],
                ),
            ],
          ),
        ],
      ),
    );
  }
}

class _WeekNavButton extends StatelessWidget {
  const _WeekNavButton({required this.icon, required this.onTap});

  final IconData icon;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(16),
      child: Padding(
        padding: const EdgeInsets.all(4),
        child: Icon(icon, size: 22, color: AppColors.muted),
      ),
    );
  }
}

class _DayColumn extends StatelessWidget {
  const _DayColumn({
    required this.letter,
    required this.day,
    required this.isToday,
    this.dueColor,
  });

  final String letter;
  final int day;
  final bool isToday;
  final Color? dueColor;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          letter,
          style: AppTypography.meta.copyWith(
            color: isToday ? AppColors.ink : AppColors.muted,
            fontWeight: isToday ? FontWeight.w700 : FontWeight.w500,
          ),
        ),
        const SizedBox(height: 8),
        Container(
          width: 34,
          height: 34,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: isToday ? AppColors.ink : Colors.transparent,
            shape: BoxShape.circle,
          ),
          child: Text(
            '$day',
            style: AppTypography.row.copyWith(
              color: isToday ? AppColors.paper : AppColors.ink,
              fontWeight: FontWeight.w600,
            ),
          ),
        ),
        const SizedBox(height: 6),
        SizedBox(
          height: 6,
          width: 6,
          child: dueColor == null
              ? null
              : DecoratedBox(
                  decoration: BoxDecoration(color: dueColor, shape: BoxShape.circle),
                ),
        ),
      ],
    );
  }
}
