// features/household/household_settings_screen.dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import 'household_controller.dart';
import 'household_settings_controller.dart';
import 'widgets/invite_code_card.dart';
import 'widgets/join_request_row.dart';
import 'widgets/member_row.dart';

class HouseholdSettingsScreen extends ConsumerWidget {
  const HouseholdSettingsScreen({super.key});

  Future<void> _confirmLeave(BuildContext context, WidgetRef ref) async {
    final confirmed = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Leave this household?'),
        content: const Text(
          "You'll need a new invite or approval to get back in.",
        ),
        actions: [
          TextButton(onPressed: () => context.pop(false), child: const Text('Cancel')),
          TextButton(
            onPressed: () => context.pop(true),
            child: const Text('Leave', style: TextStyle(color: AppColors.rose)),
          ),
        ],
      ),
    );
    if (confirmed != true) return;

    final success = await ref.read(householdControllerProvider.notifier).leave();
    if (success && context.mounted) context.go('/onboarding');
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final household = ref.watch(householdControllerProvider).household;

    if (household == null) {
      return const Scaffold(
        body: Center(child: CircularProgressIndicator(color: AppColors.forest)),
      );
    }

    final isOwner = household.isOwner;
    final settingsState = ref.watch(householdSettingsControllerProvider(isOwner));
    final settingsController = ref.read(householdSettingsControllerProvider(isOwner).notifier);

    return Scaffold(
      backgroundColor: AppColors.paper,
      appBar: AppBar(title: const Text('Household')),
      body: RefreshIndicator(
        onRefresh: settingsController.load,
        child: ListView(
          padding: const EdgeInsets.all(24),
          children: [
            Container(
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                color: AppColors.forest,
                borderRadius: BorderRadius.circular(24),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    household.name,
                    style: AppTypography.title.copyWith(color: AppColors.paper),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    '${household.memberCount} member${household.memberCount == 1 ? '' : 's'}'
                    '${isOwner ? " · you're the owner" : ''}',
                    style: AppTypography.meta.copyWith(color: AppColors.mint),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),
            if (settingsState.error != null) ...[
              Text(settingsState.error!, style: AppTypography.body.copyWith(color: AppColors.rose)),
              const SizedBox(height: 16),
            ],
            if (isOwner) ...[
              Container(
                padding: const EdgeInsets.all(20),
                decoration: BoxDecoration(
                  color: AppColors.card,
                  borderRadius: BorderRadius.circular(20),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Text(
                          'Requests to join',
                          style: AppTypography.row.copyWith(fontWeight: FontWeight.w600),
                        ),
                        const SizedBox(width: 8),
                        if (settingsState.joinRequests.isNotEmpty)
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                            decoration: BoxDecoration(
                              color: AppColors.sage,
                              borderRadius: BorderRadius.circular(10),
                            ),
                            child: Text(
                              '${settingsState.joinRequests.length}',
                              style: AppTypography.meta.copyWith(color: AppColors.paper),
                            ),
                          ),
                      ],
                    ),
                    if (settingsState.joinRequests.isEmpty)
                      Padding(
                        padding: const EdgeInsets.only(top: 8),
                        child: Text('No pending requests', style: AppTypography.meta),
                      )
                    else
                      ...settingsState.joinRequests.map(
                        (r) => JoinRequestRow(
                          name: r.name,
                          email: r.email,
                          createdAt: r.createdAt,
                          loading: settingsState.actioningRequesterId == r.requesterId,
                          onApprove: () => settingsController.approve(r.requesterId),
                          onDecline: () => settingsController.decline(r.requesterId),
                        ),
                      ),
                  ],
                ),
              ),
              const SizedBox(height: 24),
            ],
            Container(
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                color: AppColors.card,
                borderRadius: BorderRadius.circular(20),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Members', style: AppTypography.row.copyWith(fontWeight: FontWeight.w600)),
                  if (settingsState.loading)
                    const Padding(
                      padding: EdgeInsets.only(top: 16),
                      child: Center(child: CircularProgressIndicator(color: AppColors.forest)),
                    )
                  else
                    ...settingsState.members.map(
                      (m) => MemberRow(
                        name: m.name,
                        role: m.role,
                        // The current user's id isn't available client-side
                        // (AuthState only holds tokens), so "(you)" labeling
                        // is left for a follow-up.
                        isCurrentUser: false,
                        showMenu: isOwner && m.role != 'OWNER',
                        onRemoveTapped: () {
                          ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(content: Text('Member removal is coming soon.')),
                          );
                        },
                      ),
                    ),
                ],
              ),
            ),
            const SizedBox(height: 24),
            InviteCodeCard(householdName: household.name, code: household.inviteCode),
            const SizedBox(height: 24),
            Center(
              child: TextButton.icon(
                onPressed: () => _confirmLeave(context, ref),
                icon: const Icon(Icons.logout, color: AppColors.rose, size: 18),
                label: Text(
                  'Leave this household',
                  style: AppTypography.body.copyWith(color: AppColors.rose, fontWeight: FontWeight.w600),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
