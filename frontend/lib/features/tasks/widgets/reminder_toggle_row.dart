import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';

class ReminderToggleRow extends StatelessWidget {
  const ReminderToggleRow({
    super.key,
    required this.enabled,
    required this.leadDays,
    required this.onChanged,
  });

  final bool enabled;
  final int leadDays;
  final ValueChanged<bool> onChanged;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: AppColors.card,
        borderRadius: BorderRadius.circular(16),
      ),
      child: SwitchListTile(
        value: enabled,
        onChanged: onChanged,
        activeThumbColor: AppColors.paper,
        activeTrackColor: AppColors.sage,
        title: Text('Remind the household', style: AppTypography.row),
        subtitle: Text(
          "$leadDays days before it's due",
          style: AppTypography.meta,
        ),
      ),
    );
  }
}
