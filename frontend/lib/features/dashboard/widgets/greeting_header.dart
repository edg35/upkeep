import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';

const _weekdayNames = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
];
const _monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

class GreetingHeader extends StatelessWidget {
  const GreetingHeader({super.key, required this.name});

  /// Null while the signed-in user's name is still resolving.
  final String? name;

  @override
  Widget build(BuildContext context) {
    final today = DateTime.now();
    final dateLabel =
        '${_weekdayNames[today.weekday - 1]}, ${today.day} ${_monthNames[today.month - 1]}';
    final displayName = name ?? '';
    final initial = displayName.isNotEmpty ? displayName[0].toUpperCase() : '';

    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(dateLabel, style: AppTypography.meta),
              const SizedBox(height: 2),
              Text(
                'Hi, $displayName',
                style: AppTypography.display.copyWith(fontSize: 28),
              ),
            ],
          ),
        ),
        CircleAvatar(
          radius: 22,
          backgroundColor: AppColors.mint,
          child: Text(
            initial,
            style: AppTypography.title.copyWith(color: AppColors.forest),
          ),
        ),
      ],
    );
  }
}
