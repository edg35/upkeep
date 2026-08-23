import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';

/// One of the two large tappable path cards on the onboarding landing
/// screen ("Create a household" / "Join a household").
class OnboardingPathCard extends StatelessWidget {
  const OnboardingPathCard({
    super.key,
    required this.icon,
    required this.title,
    required this.subtitle,
    required this.onTap,
    this.badgeText,
    this.dark = false,
  });

  final IconData icon;
  final String title;
  final String subtitle;
  final VoidCallback onTap;
  final String? badgeText;

  /// The "Create a household" card is rendered as a filled dark hero card;
  /// "Join a household" is a light card. This flag switches the palette.
  final bool dark;

  @override
  Widget build(BuildContext context) {
    final bg = dark ? AppColors.forest : AppColors.card;
    final fg = dark ? AppColors.paper : AppColors.ink;
    final subFg = dark ? AppColors.mint : AppColors.muted;
    final iconBg = dark ? Colors.white.withValues(alpha: 0.12) : AppColors.pale;

    return Material(
      color: bg,
      borderRadius: BorderRadius.circular(24),
      child: InkWell(
        borderRadius: BorderRadius.circular(24),
        onTap: onTap,
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                width: 48,
                height: 48,
                decoration: BoxDecoration(color: iconBg, shape: BoxShape.circle),
                child: Icon(icon, color: fg),
              ),
              const SizedBox(width: 16),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Expanded(
                          child: Text(
                            title,
                            style: AppTypography.title.copyWith(color: fg),
                          ),
                        ),
                        if (badgeText != null) ...[
                          const SizedBox(width: 8),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                            decoration: BoxDecoration(
                              color: AppColors.sage,
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: Text(
                              badgeText!,
                              style: AppTypography.meta.copyWith(
                                color: AppColors.paper,
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                          ),
                        ],
                      ],
                    ),
                    const SizedBox(height: 6),
                    Text(
                      subtitle,
                      style: AppTypography.body.copyWith(color: subFg),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
