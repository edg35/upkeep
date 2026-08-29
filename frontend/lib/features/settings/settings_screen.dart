import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import '../auth/auth_controller.dart';
import '../household/household_controller.dart';
import 'task_list_density.dart';

class SettingsScreen extends ConsumerWidget {
  const SettingsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final household = ref.watch(householdControllerProvider).household;
    final density = ref.watch(taskListDensityProvider);

    return Scaffold(
      appBar: AppBar(title: const Text('Profile')),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 16, 16, 40),
        children: [
          if (household != null)
            Card(
              child: ListTile(
                leading: const Icon(Icons.home_outlined, color: AppColors.forest),
                title: const Text('Household'),
                subtitle: Text(household.name),
                trailing: const Icon(Icons.chevron_right),
                onTap: () => context.push('/household/settings'),
              ),
            ),
          const SizedBox(height: 24),
          Text('Task list style', style: AppTypography.title),
          const SizedBox(height: 4),
          Text(
            'Choose how your task list looks on the home screen.',
            style: AppTypography.meta,
          ),
          const SizedBox(height: 12),
          RadioGroup<TaskListDensity>(
            groupValue: density,
            onChanged: (value) {
              if (value != null) {
                ref.read(taskListDensityProvider.notifier).select(value);
              }
            },
            child: Column(
              children: [
                for (final option in TaskListDensity.values)
                  Card(
                    margin: const EdgeInsets.only(bottom: 8),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16),
                      side: BorderSide(
                        color: option == density ? AppColors.sage : Colors.transparent,
                        width: 2,
                      ),
                    ),
                    child: RadioListTile<TaskListDensity>(
                      value: option,
                      activeColor: AppColors.sage,
                      title: Text(option.label, style: AppTypography.row),
                      subtitle: Text(option.description, style: AppTypography.meta),
                    ),
                  ),
              ],
            ),
          ),
          const SizedBox(height: 16),
          OutlinedButton.icon(
            onPressed: () async {
              await ref.read(authControllerProvider.notifier).logout();
              if (context.mounted) context.go('/');
            },
            icon: const Icon(Icons.logout),
            label: const Text('Log Out'),
          ),
        ],
      ),
    );
  }
}
