import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../core/theme/app_theme.dart';
import '../features/auth/auth_controller.dart';
import '../features/auth/login_screen.dart';
import '../features/auth/signup_screen.dart';
import '../features/auth/splash_screen.dart';
import '../features/auth/welcome_screen.dart';
import '../features/calendar/calendar_screen.dart';
import '../features/dashboard/dashboard_screen.dart';
import '../features/household/create_household_screen.dart';
import '../features/household/household_controller.dart';
import '../features/household/household_settings_screen.dart';
import '../features/household/join_household_screen.dart';
import '../features/household/onboarding_screen.dart';
import '../features/household/pending_request_screen.dart';
import '../features/items/items_screen.dart';
import '../features/settings/settings_screen.dart';
import '../features/tasks/add_task_screen.dart';

const _onboardingPaths = {
  '/onboarding',
  '/onboarding/create',
  '/onboarding/join',
  '/onboarding/pending',
};

/// Notifies GoRouter to re-run its redirect whenever session restoration,
/// auth state, or household state changes (e.g. logout from a 401, or
/// finishing onboarding).
class _RouterRefreshNotifier extends ChangeNotifier {
  _RouterRefreshNotifier(Ref ref) {
    ref.listen(sessionInitProvider, (_, _) => notifyListeners());
    ref.listen(authControllerProvider, (_, _) => notifyListeners());
    ref.listen(householdInitProvider, (_, _) => notifyListeners());
    ref.listen(householdControllerProvider, (_, _) => notifyListeners());
  }
}

final appRouterProvider = Provider<GoRouter>((ref) {
  final refreshNotifier = _RouterRefreshNotifier(ref);
  ref.onDispose(refreshNotifier.dispose);

  return GoRouter(
    initialLocation: '/splash',
    refreshListenable: refreshNotifier,
    redirect: (context, state) {
      final initializing = ref.read(sessionInitProvider).isLoading;
      final isAuthenticated = ref.read(authControllerProvider).isAuthenticated;
      final atSplash = state.matchedLocation == '/splash';

      if (initializing) {
        return atSplash ? null : '/splash';
      }
      if (!isAuthenticated) {
        return atSplash ? '/' : null;
      }

      final householdLoading = ref.read(householdInitProvider).isLoading;
      if (householdLoading) {
        return atSplash ? null : '/splash';
      }

      final hasHousehold = ref.read(householdControllerProvider).household != null;
      final atOnboarding = _onboardingPaths.contains(state.matchedLocation);

      if (atSplash) {
        return hasHousehold ? '/dashboard' : '/onboarding';
      }
      if (!hasHousehold && !atOnboarding) {
        return '/onboarding';
      }
      if (hasHousehold && atOnboarding) {
        return '/dashboard';
      }
      return null;
    },
    routes: [
      GoRoute(path: '/splash', builder: (context, state) => const SplashScreen()),
      GoRoute(path: '/', builder: (context, state) => const WelcomeScreen()),
      GoRoute(path: '/login', builder: (context, state) => const LoginScreen()),
      GoRoute(path: '/signup', builder: (context, state) => const SignupScreen()),
      GoRoute(path: '/onboarding', builder: (context, state) => const OnboardingScreen()),
      GoRoute(
        path: '/onboarding/create',
        builder: (context, state) => const CreateHouseholdScreen(),
      ),
      GoRoute(
        path: '/onboarding/join',
        builder: (context, state) => const JoinHouseholdScreen(),
      ),
      GoRoute(
        path: '/onboarding/pending',
        builder: (context, state) => const PendingRequestScreen(),
      ),
      GoRoute(
        path: '/household/settings',
        builder: (context, state) => const HouseholdSettingsScreen(),
      ),
      GoRoute(
        path: '/tasks/add',
        builder: (context, state) => const AddTaskScreen(),
      ),
      StatefulShellRoute.indexedStack(
        builder: (context, state, shell) => ScaffoldWithNavBar(shell: shell),
        branches: [
          StatefulShellBranch(
            routes: [
              GoRoute(
                path: '/dashboard',
                builder: (context, state) => const DashboardScreen(),
              ),
            ],
          ),
          StatefulShellBranch(
            routes: [
              GoRoute(
                path: '/calendar',
                builder: (context, state) => const CalendarScreen(),
              ),
            ],
          ),
          StatefulShellBranch(
            routes: [
              GoRoute(
                path: '/items',
                builder: (context, state) => const ItemsScreen(),
              ),
            ],
          ),
          StatefulShellBranch(
            routes: [
              GoRoute(
                path: '/settings',
                builder: (context, state) => const SettingsScreen(),
              ),
            ],
          ),
        ],
      ),
    ],
  );
});

class _NavDestination {
  const _NavDestination(this.icon, this.label);
  final IconData icon;
  final String label;
}

const _navDestinations = [
  _NavDestination(Icons.home_rounded, 'Home'),
  _NavDestination(Icons.calendar_today_rounded, 'Calendar'),
  _NavDestination(Icons.format_list_bulleted_rounded, 'Tasks'),
  _NavDestination(Icons.person_rounded, 'Profile'),
];

class ScaffoldWithNavBar extends StatelessWidget {
  const ScaffoldWithNavBar({super.key, required this.shell});
  final StatefulNavigationShell shell;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: shell,
      bottomNavigationBar: SafeArea(
        minimum: const EdgeInsets.fromLTRB(16, 0, 16, 16),
        child: Row(
          children: [
            Expanded(
              child: Container(
                height: 64,
                padding: const EdgeInsets.symmetric(horizontal: 6),
                decoration: BoxDecoration(
                  color: AppColors.card,
                  borderRadius: BorderRadius.circular(32),
                  boxShadow: [
                    BoxShadow(
                      color: AppColors.ink.withValues(alpha: 0.08),
                      blurRadius: 16,
                      offset: const Offset(0, 6),
                    ),
                  ],
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    for (var i = 0; i < _navDestinations.length; i++)
                      _NavItem(
                        destination: _navDestinations[i],
                        selected: shell.currentIndex == i,
                        onTap: () =>
                            shell.goBranch(i, initialLocation: i == shell.currentIndex),
                      ),
                  ],
                ),
              ),
            ),
            const SizedBox(width: 12),
            _QuickAddButton(onTap: () => context.push('/tasks/add')),
          ],
        ),
      ),
    );
  }
}

class _NavItem extends StatelessWidget {
  const _NavItem({
    required this.destination,
    required this.selected,
    required this.onTap,
  });

  final _NavDestination destination;
  final bool selected;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      behavior: HitTestBehavior.opaque,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        curve: Curves.easeOut,
        padding: EdgeInsets.symmetric(horizontal: selected ? 16 : 12, vertical: 10),
        decoration: BoxDecoration(
          color: selected ? AppColors.ink : Colors.transparent,
          borderRadius: BorderRadius.circular(24),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              destination.icon,
              size: 22,
              color: selected ? AppColors.paper : AppColors.ink,
            ),
            if (selected) ...[
              const SizedBox(width: 8),
              Text(
                destination.label,
                style: AppTypography.row.copyWith(
                  color: AppColors.paper,
                  fontWeight: FontWeight.w600,
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }
}

class _QuickAddButton extends StatelessWidget {
  const _QuickAddButton({required this.onTap});

  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: 64,
        height: 64,
        decoration: BoxDecoration(
          color: AppColors.sage,
          shape: BoxShape.circle,
          boxShadow: [
            BoxShadow(
              color: AppColors.sage.withValues(alpha: 0.4),
              blurRadius: 12,
              offset: const Offset(0, 4),
            ),
          ],
        ),
        child: const Icon(Icons.add_rounded, color: AppColors.paper, size: 30),
      ),
    );
  }
}
