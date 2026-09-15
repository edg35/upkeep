import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';

const _weekdayNames = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const _monthAbbrev = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

bool _isSameDay(DateTime a, DateTime b) =>
    a.year == b.year && a.month == b.month && a.day == b.day;

DateTime _nextSaturday(DateTime from) {
  final daysUntilSaturday = (DateTime.saturday - from.weekday) % 7;
  final offset = daysUntilSaturday == 0 ? 7 : daysUntilSaturday;
  return DateTime(from.year, from.month, from.day + offset);
}

/// "First due" quick picks — Today / next Saturday / an explicit picked
/// date. Null selection means no override: the backend computes the due
/// date from the repeat interval instead.
class FirstDueChipRow extends StatelessWidget {
  const FirstDueChipRow({
    super.key,
    required this.value,
    required this.onChanged,
  });

  final DateTime? value;
  final ValueChanged<DateTime?> onChanged;

  @override
  Widget build(BuildContext context) {
    final now = DateTime.now();
    final today = DateTime(now.year, now.month, now.day);
    final saturday = _nextSaturday(today);
    final isCustomPick =
        value != null && !_isSameDay(value!, today) && !_isSameDay(value!, saturday);

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppColors.card,
        borderRadius: BorderRadius.circular(16),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('First due', style: AppTypography.meta),
          const SizedBox(height: 8),
          Wrap(
            spacing: 8,
            runSpacing: 8,
            children: [
              _Chip(
                label: 'Today',
                selected: value != null && _isSameDay(value!, today),
                onTap: () => onChanged(today),
              ),
              _Chip(
                label: 'Saturday',
                selected: value != null && _isSameDay(value!, saturday),
                onTap: () => onChanged(saturday),
              ),
              if (isCustomPick)
                _Chip(
                  label: _formatDate(value!),
                  selected: true,
                  onTap: () => _pick(context),
                ),
              _Chip(
                label: 'Pick',
                icon: Icons.calendar_today_outlined,
                selected: false,
                onTap: () => _pick(context),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Future<void> _pick(BuildContext context) async {
    final now = DateTime.now();
    final picked = await showDatePicker(
      context: context,
      initialDate: value ?? now,
      firstDate: now,
      lastDate: now.add(const Duration(days: 365 * 2)),
    );
    if (picked != null) onChanged(picked);
  }

  static String _formatDate(DateTime date) {
    final weekday = _weekdayNames[date.weekday - 1].substring(0, 3);
    final month = _monthAbbrev[date.month - 1];
    return '$weekday ${date.day} $month';
  }
}

class _Chip extends StatelessWidget {
  const _Chip({
    required this.label,
    required this.selected,
    required this.onTap,
    this.icon,
  });

  final String label;
  final bool selected;
  final VoidCallback onTap;
  final IconData? icon;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
        decoration: BoxDecoration(
          color: selected ? AppColors.forest : AppColors.pale,
          borderRadius: BorderRadius.circular(20),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            if (icon != null) ...[
              Icon(
                icon,
                size: 16,
                color: selected ? AppColors.paper : AppColors.forest,
              ),
              const SizedBox(width: 6),
            ],
            Text(
              label,
              style: AppTypography.meta.copyWith(
                color: selected ? AppColors.paper : AppColors.forest,
                fontWeight: FontWeight.w600,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
