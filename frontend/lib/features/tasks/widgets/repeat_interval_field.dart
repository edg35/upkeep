import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';
import '../../items/repeat_unit.dart';

class RepeatIntervalField extends StatelessWidget {
  const RepeatIntervalField({
    super.key,
    required this.count,
    required this.unit,
    required this.onChanged,
  });

  final int count;
  final RepeatUnit unit;
  final void Function(int count, RepeatUnit unit) onChanged;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      decoration: BoxDecoration(
        color: AppColors.card,
        borderRadius: BorderRadius.circular(16),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Repeats every', style: AppTypography.meta),
          Row(
            children: [
              IconButton(
                icon: const Icon(Icons.remove_circle_outline),
                color: AppColors.muted,
                onPressed: count > 1 ? () => onChanged(count - 1, unit) : null,
              ),
              Text('$count', style: AppTypography.title),
              IconButton(
                icon: const Icon(Icons.add_circle_outline),
                color: AppColors.sage,
                onPressed: () => onChanged(count + 1, unit),
              ),
            ],
          ),
          SizedBox(
            width: double.infinity,
            child: SegmentedButton<RepeatUnit>(
              segments: RepeatUnit.values
                  .map((u) => ButtonSegment(value: u, label: Text(u.label)))
                  .toList(),
              selected: {unit},
              showSelectedIcon: false,
              onSelectionChanged: (selection) =>
                  onChanged(count, selection.first),
              style: SegmentedButton.styleFrom(
                selectedBackgroundColor: AppColors.sage,
                selectedForegroundColor: AppColors.paper,
              ),
            ),
          ),
          const SizedBox(height: 4),
        ],
      ),
    );
  }
}
