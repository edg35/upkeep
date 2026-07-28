import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';

/// Full-width pill CTA used across the welcome/login/signup screens. Colors
/// default to the dark Forest-fill treatment used on login/signup; the
/// welcome screen's hero CTA overrides them to the paper/ink treatment.
class AuthPillButton extends StatelessWidget {
  const AuthPillButton({
    super.key,
    required this.label,
    required this.onPressed,
    this.loading = false,
    this.backgroundColor = AppColors.forest,
    this.foregroundColor = AppColors.paper,
  });

  final String label;
  final VoidCallback? onPressed;
  final bool loading;
  final Color backgroundColor;
  final Color foregroundColor;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      height: 56,
      child: FilledButton(
        style: FilledButton.styleFrom(
          backgroundColor: backgroundColor,
          foregroundColor: foregroundColor,
          shape: const StadiumBorder(),
        ),
        onPressed: loading ? null : onPressed,
        child: loading
            ? SizedBox(
                height: 20,
                width: 20,
                child: CircularProgressIndicator(strokeWidth: 2, color: foregroundColor),
              )
            : Text(
                label,
                style: AppTypography.row.copyWith(
                  fontWeight: FontWeight.w600,
                  color: foregroundColor,
                ),
              ),
      ),
    );
  }
}
