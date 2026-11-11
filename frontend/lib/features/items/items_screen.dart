import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import '../categories/categories_provider.dart';
import '../household/household_members_provider.dart';
import 'item_filters.dart';
import 'item_status.dart';
import 'items_controller.dart';
import 'widgets/item_filter_bar.dart';
import 'widgets/item_list_row.dart';

class ItemsScreen extends ConsumerWidget {
  const ItemsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final itemsState = ref.watch(itemsControllerProvider);
    final items = ref.watch(filteredItemsProvider);
    final filters = ref.watch(effectiveItemFiltersProvider);
    final filtersController = ref.read(itemFiltersProvider.notifier);
    final categoriesAsync = ref.watch(categoriesProvider);
    final membersAsync = ref.watch(householdMembersProvider);

    return Scaffold(
      backgroundColor: AppColors.paper,
      appBar: AppBar(title: const Text('Tasks')),
      body: SafeArea(
        child: RefreshIndicator(
          onRefresh: () => ref.read(itemsControllerProvider.notifier).load(),
          child: ListView(
            padding: const EdgeInsets.fromLTRB(20, 12, 20, 24),
            children: [
              ItemFilterBar(
                filters: filters,
                categories: categoriesAsync.valueOrNull ?? const [],
                members: membersAsync.valueOrNull ?? const [],
                onCategoryChanged: filtersController.setCategory,
                onItemTypeChanged: filtersController.setItemType,
                onStatusChanged: filtersController.setStatus,
                onAssigneeChanged: filtersController.setAssignee,
                onSortChanged: filtersController.setSort,
                onClearAll: filtersController.clearAll,
              ),
              const SizedBox(height: 16),
              if (itemsState.loading && itemsState.items.isEmpty)
                const Padding(
                  padding: EdgeInsets.symmetric(vertical: 32),
                  child: Center(
                    child: CircularProgressIndicator(color: AppColors.forest),
                  ),
                )
              else if (items.isEmpty)
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 24),
                  child: Text(
                    itemsState.items.isEmpty
                        ? 'No items yet'
                        : 'Nothing matches those filters',
                    style: AppTypography.body,
                  ),
                )
              else
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 16),
                  decoration: BoxDecoration(
                    color: AppColors.card,
                    borderRadius: BorderRadius.circular(24),
                  ),
                  child: Column(
                    children: [
                      for (var i = 0; i < items.length; i++) ...[
                        ItemListRow(
                          item: items[i],
                          completing: items[i].id == itemsState.completingId,
                          onToggle: () {
                            if (computeItemStatus(items[i], DateTime.now()) ==
                                ItemStatus.completedToday) {
                              return;
                            }
                            ref
                                .read(itemsControllerProvider.notifier)
                                .complete(items[i].id);
                          },
                          onTap: () =>
                              context.push('/tasks/edit/${items[i].id}'),
                        ),
                        if (i != items.length - 1)
                          const Divider(height: 1, color: AppColors.paper),
                      ],
                    ],
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
