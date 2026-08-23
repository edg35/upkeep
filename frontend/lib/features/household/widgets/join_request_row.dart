import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';
import '../../../shared/utils/relative_time.dart';

class JoinRequestRow extends StatelessWidget {
  const JoinRequestRow({
    super.key,
    required this.name,
    required this.email,
    required this.createdAt,
    required this.onApprove,
    required this.onDecline,
    this.loading = false,
  });

  final String name;
  final String email;
  final DateTime createdAt;
  final VoidCallback onApprove;
  final VoidCallback onDecline;
  final bool loading;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: Row(
        children: [
          CircleAvatar(
            backgroundColor: AppColors.pale,
            foregroundColor: AppColors.forest,
            child: Text(name.isNotEmpty ? name[0].toUpperCase() : '?'),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(name, style: AppTypography.row),
                Text(
                  '$email · ${relativeTime(createdAt)}',
                  style: AppTypography.meta,
                ),
              ],
            ),
          ),
          if (loading)
            const SizedBox(
              height: 20,
              width: 20,
              child: CircularProgressIndicator(strokeWidth: 2, color: AppColors.sage),
            )
          else ...[
            IconButton(
              icon: const Icon(Icons.check_circle, color: AppColors.sage),
              onPressed: onApprove,
            ),
            IconButton(
              icon: const Icon(Icons.cancel, color: AppColors.rose),
              onPressed: onDecline,
            ),
          ],
        ],
      ),
    );
  }
}
