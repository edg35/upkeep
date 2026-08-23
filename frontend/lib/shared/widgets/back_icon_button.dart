import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';

/// Generalized copy of [AuthBackButton] for use outside the auth feature.
class BackIconButton extends StatelessWidget {
  const BackIconButton({super.key});

  @override
  Widget build(BuildContext context) {
    // Align(centerLeft) so this stays pinned to the left edge even when a
    // parent Column uses CrossAxisAlignment.stretch (which would otherwise
    // stretch a bare SizedBox to full width and center the icon inside it).
    return Align(
      alignment: Alignment.centerLeft,
      child: SizedBox(
        width: 44,
        height: 44,
        child: DecoratedBox(
          decoration: const BoxDecoration(
            color: AppColors.card,
            shape: BoxShape.circle,
          ),
          child: IconButton(
            padding: EdgeInsets.zero,
            icon: const Icon(Icons.chevron_left, color: AppColors.ink),
            onPressed: () =>
                context.canPop() ? context.pop() : context.go('/onboarding'),
          ),
        ),
      ),
    );
  }
}
