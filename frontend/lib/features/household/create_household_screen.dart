// features/household/create_household_screen.dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import '../../shared/widgets/app_text_field.dart';
import '../../shared/widgets/back_icon_button.dart';
import '../../shared/widgets/pill_button.dart';
import '../../shared/widgets/progress_bar.dart';
import 'household_controller.dart';

class CreateHouseholdScreen extends ConsumerStatefulWidget {
  const CreateHouseholdScreen({super.key});

  @override
  ConsumerState<CreateHouseholdScreen> createState() => _CreateHouseholdScreenState();
}

class _CreateHouseholdScreenState extends ConsumerState<CreateHouseholdScreen> {
  final _formKey = GlobalKey<FormState>();
  final _nameController = TextEditingController();

  @override
  void dispose() {
    _nameController.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    if (!_formKey.currentState!.validate()) return;
    final success = await ref
        .read(householdControllerProvider.notifier)
        .create(_nameController.text.trim());
    if (success && mounted) context.go('/dashboard');
  }

  @override
  Widget build(BuildContext context) {
    final state = ref.watch(householdControllerProvider);

    return Scaffold(
      backgroundColor: AppColors.paper,
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: Form(
            key: _formKey,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                const BackIconButton(),
                const SizedBox(height: 16),
                const StepProgressBar(progress: 0.66),
                const SizedBox(height: 24),
                Text('Name your place', style: AppTypography.display),
                const SizedBox(height: 8),
                Text(
                  "Whatever you'd call it out loud is perfect.",
                  style: AppTypography.body.copyWith(color: AppColors.muted),
                ),
                const SizedBox(height: 32),
                AppTextField(
                  label: 'Household name',
                  controller: _nameController,
                  textCapitalization: TextCapitalization.words,
                  validator: (v) =>
                      (v == null || v.trim().isEmpty) ? 'Give your household a name' : null,
                ),
                const SizedBox(height: 24),
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: AppColors.pale,
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: Row(
                    children: [
                      const CircleAvatar(
                        backgroundColor: AppColors.mint,
                        foregroundColor: AppColors.ink,
                        child: Icon(Icons.person_outline, size: 20),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'You · owner',
                              style: AppTypography.row.copyWith(fontWeight: FontWeight.w600),
                            ),
                            Text(
                              'You can invite the others in a moment',
                              style: AppTypography.meta,
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                if (state.error != null) ...[
                  const SizedBox(height: 16),
                  Text(
                    state.error!,
                    style: AppTypography.body.copyWith(color: AppColors.rose),
                  ),
                ],
                const SizedBox(height: 32),
                PillButton(
                  label: 'Create household',
                  loading: state.loading,
                  onPressed: _submit,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
