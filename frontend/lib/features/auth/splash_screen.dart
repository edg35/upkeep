import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Shown while [AuthController.restoreSession] checks for a persisted
/// session on app cold start.
class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      backgroundColor: AppColors.paper,
      body: Center(
        child: CircularProgressIndicator(color: AppColors.forest),
      ),
    );
  }
}
