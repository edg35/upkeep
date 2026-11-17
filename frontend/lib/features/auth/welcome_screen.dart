// features/auth/welcome_screen.dart
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import '../../shared/widgets/upkeep_logo.dart';
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
                  const UpkeepLogo(height: 30),
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
                    child: Padding(
                      padding: const EdgeInsets.all(24),
                      child: Image.asset(
                        'assets/branding/welcome_plant.png',
                        fit: BoxFit.contain,
                        alignment: Alignment.center,
                        excludeFromSemantics: true,
                      ),
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
