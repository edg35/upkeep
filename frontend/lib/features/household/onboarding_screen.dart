// features/household/onboarding_screen.dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import '../auth/auth_controller.dart';
import 'household_repository.dart';
import 'widgets/onboarding_path_card.dart';

/// Landing path-picker shown to a signed-in user with no household. Also
/// folds in "accept an invite" (via the Join path's banner/code redemption)
/// per the design — there is no separate accept-invite route.
class OnboardingScreen extends ConsumerStatefulWidget {
  const OnboardingScreen({super.key});

  @override
  ConsumerState<OnboardingScreen> createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends ConsumerState<OnboardingScreen> {
  bool _hasPendingInvite = false;

  @override
  void initState() {
    super.initState();
    _checkPendingInvite();
  }

  Future<void> _checkPendingInvite() async {
    try {
      final invites = await ref.read(householdRepositoryProvider).getPendingInvitations();
      if (mounted && invites.isNotEmpty) setState(() => _hasPendingInvite = true);
    } catch (_) {
      // Non-critical: the badge just won't show.
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.paper,
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Align(
                alignment: Alignment.centerRight,
                child: TextButton(
                  onPressed: () async {
                    await ref.read(authControllerProvider.notifier).logout();
                    if (context.mounted) context.go('/');
                  },
                  child: Text(
                    'Not you? Log out',
                    style: AppTypography.meta.copyWith(color: AppColors.muted),
                  ),
                ),
              ),
              Container(
                height: 180,
                decoration: BoxDecoration(
                  color: AppColors.mint,
                  borderRadius: BorderRadius.circular(24),
                ),
                child: const Center(
                  child: Icon(Icons.home_work_outlined, size: 56, color: AppColors.forest),
                ),
              ),
              const SizedBox(height: 32),
              Text('One last thing', style: AppTypography.display),
              const SizedBox(height: 8),
              Text(
                'Upkeep works around a household — the place you look after and the people you share it with.',
                style: AppTypography.body.copyWith(color: AppColors.muted),
              ),
              const SizedBox(height: 32),
              OnboardingPathCard(
                icon: Icons.house_outlined,
                title: 'Create a household',
                subtitle: "Name your place, set the rooms, invite people later. You'll be the owner.",
                dark: true,
                onTap: () => context.go('/onboarding/create'),
              ),
              const SizedBox(height: 16),
              OnboardingPathCard(
                icon: Icons.person_add_alt_outlined,
                title: 'Join a household',
                subtitle: 'Redeem an invite, or search for a place and ask to be let in.',
                badgeText: _hasPendingInvite ? '1 invite' : null,
                onTap: () => context.go('/onboarding/join'),
              ),
              const SizedBox(height: 24),
              Center(
                child: Text(
                  'you can always switch later',
                  style: AppTypography.aside,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
