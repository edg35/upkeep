// features/household/join_household_screen.dart
import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import '../../shared/widgets/app_text_field.dart';
import '../../shared/widgets/back_icon_button.dart';
import 'join_household_controller.dart';
import 'widgets/pending_invite_banner_card.dart';
import 'widgets/search_result_row.dart';

class JoinHouseholdScreen extends ConsumerStatefulWidget {
  const JoinHouseholdScreen({super.key});

  @override
  ConsumerState<JoinHouseholdScreen> createState() => _JoinHouseholdScreenState();
}

class _JoinHouseholdScreenState extends ConsumerState<JoinHouseholdScreen> {
  final _codeController = TextEditingController();
  final _searchController = TextEditingController();
  Timer? _debounce;
  String? _askedHouseholdId;

  @override
  void dispose() {
    _debounce?.cancel();
    _codeController.dispose();
    _searchController.dispose();
    super.dispose();
  }

  void _onSearchChanged(String value) {
    _debounce?.cancel();
    _debounce = Timer(const Duration(milliseconds: 350), () {
      ref.read(joinHouseholdControllerProvider.notifier).search(value);
    });
  }

  Future<void> _redeem() async {
    final code = _codeController.text.trim();
    if (code.isEmpty) return;
    final success = await ref.read(joinHouseholdControllerProvider.notifier).redeemCode(code);
    if (success && mounted) context.go('/dashboard');
  }

  Future<void> _acceptBanner() async {
    final success = await ref.read(joinHouseholdControllerProvider.notifier).acceptPendingInvite();
    if (success && mounted) context.go('/dashboard');
  }

  Future<void> _ask(String householdId) async {
    setState(() => _askedHouseholdId = householdId);
    final success = await ref.read(joinHouseholdControllerProvider.notifier).ask(householdId);
    if (success && mounted) context.push('/onboarding/pending');
  }

  @override
  Widget build(BuildContext context) {
    final state = ref.watch(joinHouseholdControllerProvider);

    return Scaffold(
      backgroundColor: AppColors.paper,
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const BackIconButton(),
              const SizedBox(height: 16),
              Text('Join a household', style: AppTypography.display),
              const SizedBox(height: 8),
              Text(
                'Search for the place, or use a code for an invite.',
                style: AppTypography.body.copyWith(color: AppColors.muted),
              ),
              const SizedBox(height: 24),
              if (state.showBanner) ...[
                PendingInviteBannerCard(
                  householdName: state.pendingInvite!.householdName,
                  inviterName: state.pendingInvite!.inviterName,
                  memberCount: state.pendingInvite!.memberCount,
                  loading: state.loading,
                  onAccept: _acceptBanner,
                  onIgnore: () =>
                      ref.read(joinHouseholdControllerProvider.notifier).dismissBanner(),
                ),
                const SizedBox(height: 24),
              ],
              Text('HAVE A CODE INSTEAD?', style: AppTypography.meta),
              const SizedBox(height: 8),
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Expanded(
                    child: AppTextField(
                      label: 'Invite code',
                      controller: _codeController,
                      textCapitalization: TextCapitalization.characters,
                    ),
                  ),
                  const SizedBox(width: 12),
                  SizedBox(
                    height: 56,
                    child: FilledButton(
                      style: FilledButton.styleFrom(
                        backgroundColor: AppColors.forest,
                        foregroundColor: AppColors.paper,
                        shape: const StadiumBorder(),
                      ),
                      onPressed: state.loading ? null : _redeem,
                      child: const Text('Redeem'),
                    ),
                  ),
                ],
              ),
              if (state.error != null) ...[
                const SizedBox(height: 12),
                Text(state.error!, style: AppTypography.body.copyWith(color: AppColors.rose)),
              ],
              const SizedBox(height: 24),
              AppTextField(
                label: 'Search households',
                controller: _searchController,
                onChanged: _onSearchChanged,
                suffixIcon: const Icon(Icons.search, color: AppColors.muted),
              ),
              const SizedBox(height: 16),
              if (state.searchResults.isNotEmpty) ...[
                Text('NEARBY MATCHES', style: AppTypography.meta),
                const SizedBox(height: 8),
                ...state.searchResults.map(
                  (result) => SearchResultRow(
                    name: result.name,
                    loading: state.loading && _askedHouseholdId == result.householdId,
                    asked: state.requestSent && _askedHouseholdId == result.householdId,
                    onAsk: () => _ask(result.householdId),
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  'Asking sends the owner a request — you\'ll get in once they say yes.',
                  style: AppTypography.meta,
                ),
              ],
              const SizedBox(height: 32),
              Center(
                child: TextButton(
                  onPressed: () => context.go('/onboarding/create'),
                  child: Text(
                    'Create my own household instead',
                    style: AppTypography.body.copyWith(
                      color: AppColors.forest,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
