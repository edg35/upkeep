import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';
import '../../items/tracking_mode.dart';

/// Picks which shape the schedule section below takes: a repeat interval, a
/// single fixed date, or a custom RRULE-backed recurrence.
class ScheduleModeSelector extends StatelessWidget {
  const ScheduleModeSelector({super.key, required this.selected, required this.onChanged});

  final TrackingMode selected;
  final ValueChanged<TrackingMode> onChanged;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      child: SegmentedButton<TrackingMode>(
        segments: TrackingMode.values
            .map((m) => ButtonSegment(value: m, label: Text(m.tabLabel)))
            .toList(),
        selected: {selected},
        showSelectedIcon: false,
        onSelectionChanged: (selection) => onChanged(selection.first),
        style: SegmentedButton.styleFrom(
          selectedBackgroundColor: AppColors.sage,
          selectedForegroundColor: AppColors.paper,
        ),
      ),
    );
  }
}
