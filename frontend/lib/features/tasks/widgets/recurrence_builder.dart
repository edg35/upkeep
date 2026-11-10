import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';
import '../../items/recurrence_rule.dart';

const _weekdayShort = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

/// Builds a [RecurrenceRule] for the "Custom schedule" tracking mode —
/// e.g. "every 2 weeks on Mon/Wed" or "monthly on the 1st".
class RecurrenceBuilder extends StatelessWidget {
  const RecurrenceBuilder({super.key, required this.value, required this.onChanged});

  final RecurrenceRule value;
  final ValueChanged<RecurrenceRule> onChanged;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppColors.card,
        borderRadius: BorderRadius.circular(16),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Repeats', style: AppTypography.meta),
          const SizedBox(height: 8),
          SizedBox(
            width: double.infinity,
            child: SegmentedButton<RecurrenceFrequency>(
              segments: RecurrenceFrequency.values
                  .map((f) => ButtonSegment(value: f, label: Text(f.label)))
                  .toList(),
              selected: {value.frequency},
              showSelectedIcon: false,
              onSelectionChanged: (selection) =>
                  onChanged(value.copyWith(frequency: selection.first)),
              style: SegmentedButton.styleFrom(
                selectedBackgroundColor: AppColors.sage,
                selectedForegroundColor: AppColors.paper,
              ),
            ),
          ),
          const SizedBox(height: 12),
          Row(
            children: [
              Text('Every', style: AppTypography.body),
              IconButton(
                icon: const Icon(Icons.remove_circle_outline),
                color: AppColors.muted,
                onPressed: value.interval > 1
                    ? () => onChanged(value.copyWith(interval: value.interval - 1))
                    : null,
              ),
              Text('${value.interval}', style: AppTypography.title),
              IconButton(
                icon: const Icon(Icons.add_circle_outline),
                color: AppColors.sage,
                onPressed: () => onChanged(value.copyWith(interval: value.interval + 1)),
              ),
              Text(_unitLabel(value), style: AppTypography.body),
            ],
          ),
          if (value.frequency == RecurrenceFrequency.weekly) ...[
            const SizedBox(height: 8),
            Wrap(
              spacing: 8,
              children: [
                for (var day = 1; day <= 7; day++)
                  _DayChip(
                    label: _weekdayShort[day - 1],
                    selected: value.weekdays.contains(day),
                    onTap: () {
                      final next = Set<int>.from(value.weekdays);
                      if (!next.remove(day)) next.add(day);
                      onChanged(value.copyWith(weekdays: next));
                    },
                  ),
              ],
            ),
          ],
          if (value.frequency == RecurrenceFrequency.monthly) ...[
            const SizedBox(height: 12),
            Row(
              children: [
                Expanded(
                  child: Text(
                    value.lastDayOfMonth
                        ? 'On the last day of the month'
                        : 'On day ${value.monthDay ?? 1} of the month',
                    style: AppTypography.body,
                  ),
                ),
                Switch(
                  value: value.lastDayOfMonth,
                  activeTrackColor: AppColors.sage,
                  onChanged: (last) => onChanged(value.copyWith(lastDayOfMonth: last)),
                ),
              ],
            ),
            if (!value.lastDayOfMonth)
              Slider(
                value: (value.monthDay ?? 1).toDouble(),
                min: 1,
                max: 31,
                divisions: 30,
                label: '${value.monthDay ?? 1}',
                activeColor: AppColors.sage,
                onChanged: (d) => onChanged(value.copyWith(monthDay: d.round())),
              ),
          ],
        ],
      ),
    );
  }

  static String _unitLabel(RecurrenceRule value) {
    final plural = value.interval != 1 ? 's' : '';
    switch (value.frequency) {
      case RecurrenceFrequency.daily:
        return 'day$plural';
      case RecurrenceFrequency.weekly:
        return 'week$plural';
      case RecurrenceFrequency.monthly:
        return 'month$plural';
      case RecurrenceFrequency.yearly:
        return 'year$plural';
    }
  }
}

class _DayChip extends StatelessWidget {
  const _DayChip({required this.label, required this.selected, required this.onTap});

  final String label;
  final bool selected;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: 32,
        height: 32,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: selected ? AppColors.forest : AppColors.pale,
          shape: BoxShape.circle,
        ),
        child: Text(
          label,
          style: AppTypography.meta.copyWith(
            color: selected ? AppColors.paper : AppColors.forest,
            fontWeight: FontWeight.w600,
          ),
        ),
      ),
    );
  }
}
