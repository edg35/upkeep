// app.dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'core/push/push_providers.dart';
import 'core/sync/sync_providers.dart';
import 'core/theme/app_theme.dart';
import 'features/auth/auth_controller.dart';
import 'router/app_router.dart';

class UpkeepApp extends ConsumerStatefulWidget {
  const UpkeepApp({super.key});

  @override
  ConsumerState<UpkeepApp> createState() => _UpkeepAppState();
}

class _UpkeepAppState extends ConsumerState<UpkeepApp> {
  @override
  void initState() {
    super.initState();
    // Register for push whenever the user becomes authenticated; fireImmediately
    // covers a session that is already restored by the time this runs.
    ref.listenManual<bool>(
      authControllerProvider.select((s) => s.isAuthenticated),
      (previous, isAuthenticated) {
        if (isAuthenticated) {
          ref.read(pushNotificationServiceProvider).onAuthenticated();
        }
      },
      fireImmediately: true,
    );
  }

  @override
  Widget build(BuildContext context) {
    ref.watch(connectivitySyncProvider);
    final router = ref.watch(appRouterProvider);

    return MaterialApp.router(
      title: 'Upkeep',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.light(),
      darkTheme: AppTheme.dark(),
      routerConfig: router,
    );
  }
}
