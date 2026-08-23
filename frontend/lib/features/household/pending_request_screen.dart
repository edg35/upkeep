// features/household/pending_request_screen.dart
import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import '../../shared/utils/relative_time.dart';
import 'household_controller.dart';
import 'pending_request_controller.dart';

class PendingRequestScreen extends ConsumerStatefulWidget {
  const PendingRequestScreen({super.key});

  @override
  ConsumerState<PendingRequestScreen> createState() => _PendingRequestScreenState();
}

class _PendingRequestScreenState extends ConsumerState<PendingRequestScreen> {
  Timer? _poll;

  @override
  void initState() {
    super.initState();
    // Poll for approval so a waiting user gets bounced out of onboarding by
    // the router redirect without needing to background/foreground the app.
    _poll = Timer.periodic(const Duration(seconds: 10), (_) {
      ref.read(householdControllerProvider.notifier).loadMine();
    });
  }

  @override
  void dispose() {
    _poll?.cancel();
    super.dispose();
  }

  Future<void> _cancel() async {
    final success = await ref.read(pendingRequestControllerProvider.notifier).cancel();
    if (success && mounted) context.go('/onboarding/join');
  }

  @override
  Widget build(BuildContext context) {
    final state = ref.watch(pendingRequestControllerProvider);
    final request = state.request;

    return Scaffold(
      backgroundColor: AppColors.paper,
      body: SafeArea(
        child: state.loading && request == null
            ? const Center(child: CircularProgressIndicator(color: AppColors.forest))
            : request == null
                ? Center(
                    child: Padding(
                      padding: const EdgeInsets.all(24),
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text('No pending request', style: AppTypography.title),
                          const SizedBox(height: 16),
                          TextButton(
                            onPressed: () => context.go('/onboarding/join'),
                            child: const Text('Back to join'),
                          ),
                        ],
                      ),
                    ),
                  )
                : Padding(
                    padding: const EdgeInsets.all(24),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Container(
                          width: 96,
                          height: 96,
                          decoration: const BoxDecoration(color: AppColors.pale, shape: BoxShape.circle),
                          child: const Icon(Icons.schedule, size: 40, color: AppColors.forest),
                        ),
                        const SizedBox(height: 24),
                        Text(
                          'Waiting on ${request.ownerName}',
                          textAlign: TextAlign.center,
                          style: AppTypography.title,
                        ),
                        const SizedBox(height: 12),
                        Text(
                          'Your request to join ${request.householdName} is with the owner. '
                          "We'll let you in the moment it's approved.",
                          textAlign: TextAlign.center,
                          style: AppTypography.body.copyWith(color: AppColors.muted),
                        ),
                        const SizedBox(height: 20),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                          decoration: BoxDecoration(
                            color: AppColors.card,
                            borderRadius: BorderRadius.circular(20),
                          ),
                          child: Text(
                            'Sent ${relativeTime(request.createdAt)}',
                            style: AppTypography.meta,
                          ),
                        ),
                        const SizedBox(height: 20),
                        Text('go put the kettle on', style: AppTypography.aside),
                        const SizedBox(height: 32),
                        TextButton(
                          onPressed: () => context.go('/onboarding/create'),
                          child: Text(
                            'Create my own instead',
                            style: AppTypography.body.copyWith(
                              color: AppColors.forest,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                        ),
                        TextButton(
                          onPressed: state.loading ? null : _cancel,
                          child: Text(
                            'Cancel request',
                            style: AppTypography.body.copyWith(color: AppColors.rose),
                          ),
                        ),
                        if (state.error != null) ...[
                          const SizedBox(height: 12),
                          Text(state.error!, style: AppTypography.body.copyWith(color: AppColors.rose)),
                        ],
                      ],
                    ),
                  ),
      ),
    );
  }
}
