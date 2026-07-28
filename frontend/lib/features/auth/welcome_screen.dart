// features/auth/welcome_screen.dart
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import 'widgets/auth_pill_button.dart';

class WelcomeScreen extends StatelessWidget {
  const WelcomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.forest,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 32),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 8),
              Row(
                children: [
                  Container(
                    width: 32,
                    height: 32,
                    decoration: BoxDecoration(
                      color: AppColors.mint,
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: const Icon(Icons.home_rounded, size: 18, color: AppColors.forest),
                  ),
                  const SizedBox(width: 12),
                  Text(
                    'Upkeep',
                    style: AppTypography.title.copyWith(color: AppColors.paper),
                  ),
                ],
              ),
              const SizedBox(height: 24),
              Expanded(
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(28),
                  child: ColoredBox(
                    color: AppColors.ink.withValues(alpha: 0.35),
                    child: CustomPaint(
                      painter: const _HatchPainter(),
                      child: const SizedBox.expand(),
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 24),
              Text(
                'Welcome home.',
                style: AppTypography.display.copyWith(color: AppColors.paper),
              ),
              const SizedBox(height: 12),
              Text(
                'Everything your place needs, in one quiet list you and your '
                'household actually keep up with.',
                style: AppTypography.body.copyWith(color: AppColors.pale),
              ),
              const SizedBox(height: 12),
              Text('no more "did you pay rent?"', style: AppTypography.aside),
              const SizedBox(height: 32),
              AuthPillButton(
                label: 'Log in',
                backgroundColor: AppColors.paper,
                foregroundColor: AppColors.ink,
                onPressed: () => context.push('/login'),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 20),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      "Don't have an account? ",
                      style: AppTypography.body.copyWith(color: AppColors.pale),
                    ),
                    GestureDetector(
                      onTap: () => context.push('/signup'),
                      child: Text(
                        'Sign up',
                        style: AppTypography.body.copyWith(
                          color: AppColors.paper,
                          fontWeight: FontWeight.w600,
                          decoration: TextDecoration.underline,
                          decorationColor: AppColors.paper,
                        ),
                      ),
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

/// Stand-in for the hand-drawn house + plants illustration until a real
/// asset is supplied — a soft diagonal hatch on the hero panel.
class _HatchPainter extends CustomPainter {
  const _HatchPainter();

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = AppColors.paper.withValues(alpha: 0.12)
      ..strokeWidth = 2;

    const gap = 14.0;
    for (var x = -size.height; x < size.width; x += gap) {
      canvas.drawLine(Offset(x, size.height), Offset(x + size.height, 0), paint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
