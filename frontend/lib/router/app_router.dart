import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../features/auth/auth_controller.dart';
import '../features/auth/login_screen.dart';
import '../features/auth/signup_screen.dart';
import '../features/auth/splash_screen.dart';
import '../features/auth/welcome_screen.dart';
import '../features/bills/bills_screen.dart';
import '../features/dashboard/dashboard_screen.dart';
import '../features/household/create_household_screen.dart';
import '../features/household/household_controller.dart';
import '../features/household/household_settings_screen.dart';
import '../features/household/join_household_screen.dart';
import '../features/household/onboarding_screen.dart';
import '../features/household/pending_request_screen.dart';
import '../features/items/items_screen.dart';
import '../features/settings/settings_screen.dart';

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
                path: '/items',
                builder: (context, state) => const ItemsScreen(),
              ),
            ],
          ),
          StatefulShellBranch(
            routes: [
              GoRoute(
                path: '/bills',
                builder: (context, state) => const BillsScreen(),
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

class ScaffoldWithNavBar extends StatelessWidget {
  const ScaffoldWithNavBar({super.key, required this.shell});
  final StatefulNavigationShell shell;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: shell,
      bottomNavigationBar: NavigationBar(
        selectedIndex: shell.currentIndex,
        onDestinationSelected: (i) =>
            shell.goBranch(i, initialLocation: i == shell.currentIndex),
        destinations: const [
          NavigationDestination(icon: Icon(Icons.home_outlined), label: 'Home'),
          NavigationDestination(
            icon: Icon(Icons.inventory_2_outlined),
            label: 'Items',
          ),
          NavigationDestination(
            icon: Icon(Icons.receipt_long_outlined),
            label: 'Bills',
          ),
          NavigationDestination(
            icon: Icon(Icons.settings_outlined),
            label: 'Settings',
          ),
        ],
      ),
    );
  }
}
