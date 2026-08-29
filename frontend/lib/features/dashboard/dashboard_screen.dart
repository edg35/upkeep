import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import '../household/current_member.dart';
import '../items/items_controller.dart';
import '../settings/task_list_density.dart';
import 'home_task.dart';
import 'widgets/greeting_header.dart';
import 'widgets/progress_card.dart';
import 'widgets/task_list.dart';
import 'widgets/week_glance.dart';

class DashboardScreen extends ConsumerWidget {
  const DashboardScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final name = ref.watch(currentMemberNameProvider).valueOrNull;
    final itemsState = ref.watch(itemsControllerProvider);
    final tasks = ref.watch(dashboardTasksProvider);
    final density = ref.watch(taskListDensityProvider);
    final doneCount = tasks.where((t) => t.isDone).length;
    final lateCount = tasks.where((t) => t.isLate && !t.isDone).length;

    return Scaffold(
      backgroundColor: AppColors.paper,
      body: SafeArea(
        child: RefreshIndicator(
          onRefresh: () => ref.read(itemsControllerProvider.notifier).load(),
          child: ListView(
            padding: const EdgeInsets.fromLTRB(20, 16, 20, 24),
            children: [
              GreetingHeader(name: name),
              const SizedBox(height: 20),
              const WeekGlance(),
              const SizedBox(height: 16),
              DashboardProgressCard(
                doneCount: doneCount,
                totalCount: tasks.length,
                lateCount: lateCount,
              ),
              const SizedBox(height: 24),
              Row(
                children: [
                  Text('Today', style: AppTypography.title),
                  const Spacer(),
                  GestureDetector(
                    onTap: () => context.go('/items'),
                    child: Text(
                      'See all',
                      style: AppTypography.body.copyWith(
                        color: AppColors.sage,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 12),
              if (itemsState.error != null)
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  child: Text(
                    itemsState.error!,
                    style: AppTypography.body.copyWith(color: AppColors.rose),
                  ),
                )
              else if (itemsState.loading && itemsState.items.isEmpty)
                const Padding(
                  padding: EdgeInsets.symmetric(vertical: 32),
                  child: Center(child: CircularProgressIndicator(color: AppColors.forest)),
                )
              else if (tasks.isEmpty)
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 24),
                  child: Text('No tasks today', style: AppTypography.body),
                )
              else
                TaskList(
                  tasks: tasks,
                  density: density,
                  completingId: itemsState.completingId,
                  onToggle: (id) {
                    final task = tasks.firstWhere((t) => t.id == id);
                    if (task.isDone) return;
                    ref.read(itemsControllerProvider.notifier).complete(id);
                  },
                ),
            ],
          ),
        ),
      ),
    );
  }
}
