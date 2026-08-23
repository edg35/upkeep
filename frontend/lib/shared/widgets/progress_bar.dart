import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Thin horizontal step-progress indicator (e.g. the create-household flow).
class StepProgressBar extends StatelessWidget {
  const StepProgressBar({super.key, required this.progress});

  /// 0.0–1.0 fraction of the bar to fill.
  final double progress;

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(4),
      child: LinearProgressIndicator(
        value: progress.clamp(0.0, 1.0),
        minHeight: 6,
        backgroundColor: AppColors.card,
        valueColor: const AlwaysStoppedAnimation(AppColors.sage),
      ),
    );
  }
}
