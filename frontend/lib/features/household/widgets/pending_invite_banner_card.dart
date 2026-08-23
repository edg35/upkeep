import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';

/// The dark "invite waiting" banner shown at the top of the join screen when
/// the current user has a pending (received) email invitation.
class PendingInviteBannerCard extends StatelessWidget {
  const PendingInviteBannerCard({
    super.key,
    required this.householdName,
    required this.inviterName,
    required this.memberCount,
    required this.onAccept,
    required this.onIgnore,
    this.loading = false,
  });

  final String householdName;
  final String inviterName;
  final int memberCount;
  final VoidCallback onAccept;
  final VoidCallback onIgnore;
  final bool loading;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: AppColors.forest,
        borderRadius: BorderRadius.circular(24),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 8,
                height: 8,
                decoration: const BoxDecoration(color: AppColors.sage, shape: BoxShape.circle),
              ),
              const SizedBox(width: 8),
              Text(
                'INVITE WAITING',
                style: AppTypography.meta.copyWith(
                  color: AppColors.mint,
                  fontWeight: FontWeight.w700,
                  letterSpacing: 0.5,
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              CircleAvatar(
                backgroundColor: AppColors.sage,
                foregroundColor: AppColors.paper,
                child: Text(inviterName.isNotEmpty ? inviterName[0].toUpperCase() : '?'),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      householdName,
                      style: AppTypography.row.copyWith(
                        color: AppColors.paper,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                    Text(
                      '$inviterName invited you · $memberCount member${memberCount == 1 ? '' : 's'}',
                      style: AppTypography.meta.copyWith(color: AppColors.mint),
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          Row(
            children: [
              Expanded(
                child: SizedBox(
                  height: 44,
                  child: FilledButton(
                    style: FilledButton.styleFrom(
                      backgroundColor: AppColors.mint,
                      foregroundColor: AppColors.ink,
                      shape: const StadiumBorder(),
                    ),
                    onPressed: loading ? null : onAccept,
                    child: loading
                        ? const SizedBox(
                            height: 18,
                            width: 18,
                            child: CircularProgressIndicator(strokeWidth: 2, color: AppColors.ink),
                          )
                        : const Text('Accept'),
                  ),
                ),
              ),
              const SizedBox(width: 12),
              SizedBox(
                height: 44,
                child: OutlinedButton(
                  style: OutlinedButton.styleFrom(
                    foregroundColor: AppColors.paper,
                    side: const BorderSide(color: AppColors.paper),
                    shape: const StadiumBorder(),
                  ),
                  onPressed: loading ? null : onIgnore,
                  child: const Text('Ignore'),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
