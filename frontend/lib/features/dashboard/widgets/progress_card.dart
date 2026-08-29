import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';

class DashboardProgressCard extends StatelessWidget {
  const DashboardProgressCard({
    super.key,
    required this.doneCount,
    required this.totalCount,
    required this.lateCount,
  });

  final int doneCount;
  final int totalCount;
  final int lateCount;

  @override
  Widget build(BuildContext context) {
    if (totalCount == 0) {
      return Container(
        width: double.infinity,
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 28),
        decoration: BoxDecoration(
          color: AppColors.ink,
          borderRadius: BorderRadius.circular(28),
        ),
        child: Text(
          'No tasks today',
          style: AppTypography.title.copyWith(color: AppColors.paper),
        ),
      );
    }

    final progress = doneCount / totalCount;
    final title = doneCount == totalCount
        ? 'The house is in good shape'
        : 'Let\'s knock a few of these out';
    final lateLabel = lateCount == 0
        ? ''
        : ' · ${lateCount == 1 ? 'one thing is late' : '$lateCount things are late'}';

    return Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(24, 22, 24, 24),
      decoration: BoxDecoration(
        color: AppColors.ink,
        borderRadius: BorderRadius.circular(28),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: AppTypography.title.copyWith(color: AppColors.paper),
          ),
          const SizedBox(height: 6),
          Text(
            '$doneCount of $totalCount done today$lateLabel',
            style: AppTypography.body.copyWith(color: AppColors.paper.withValues(alpha: 0.75)),
          ),
          const SizedBox(height: 16),
          ClipRRect(
            borderRadius: BorderRadius.circular(8),
            child: LinearProgressIndicator(
              value: progress,
              minHeight: 8,
              backgroundColor: AppColors.paper.withValues(alpha: 0.15),
              valueColor: const AlwaysStoppedAnimation(AppColors.mint),
            ),
          ),
        ],
      ),
    );
  }
}
