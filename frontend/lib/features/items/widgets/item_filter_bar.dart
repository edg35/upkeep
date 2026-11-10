import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';
import '../../categories/category.dart';
import '../item_filters.dart';
import '../item_status.dart';
import '../item_type.dart';
import 'filter_chip_button.dart';

class ItemFilterBar extends StatelessWidget {
  const ItemFilterBar({
    super.key,
    required this.filters,
    required this.categories,
    required this.members,
    required this.onCategoryChanged,
    required this.onItemTypeChanged,
    required this.onStatusChanged,
    required this.onAssigneeChanged,
    required this.onClearAll,
  });

  final ItemFilters filters;
  final List<Category> categories;
  final List<Map<String, dynamic>> members;
  final ValueChanged<String?> onCategoryChanged;
  final ValueChanged<ItemType?> onItemTypeChanged;
  final ValueChanged<ItemStatus?> onStatusChanged;
  final ValueChanged<String?> onAssigneeChanged;
  final VoidCallback onClearAll;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          child: Row(
            children: [
              FilterChipButton<String>(
                label: 'Category',
                value: filters.categoryId,
                options: [for (final c in categories) FilterOption(c.id, c.name)],
                onChanged: onCategoryChanged,
              ),
              const SizedBox(width: 8),
              FilterChipButton<ItemType>(
                label: 'Type',
                value: filters.itemType,
                options: [for (final t in ItemType.values) FilterOption(t, t.tabLabel)],
                onChanged: onItemTypeChanged,
              ),
              const SizedBox(width: 8),
              FilterChipButton<ItemStatus>(
                label: 'Status',
                value: filters.status,
                options: [for (final s in ItemStatus.values) FilterOption(s, s.label)],
                onChanged: onStatusChanged,
              ),
              const SizedBox(width: 8),
              FilterChipButton<String>(
                label: 'Assigned to',
                value: filters.assigneeId,
                options: [
                  for (final m in members)
                    FilterOption(m['user_id'] as String, m['name'] as String? ?? 'Member'),
                ],
                onChanged: onAssigneeChanged,
              ),
              if (!filters.isEmpty) ...[
                const SizedBox(width: 8),
                GestureDetector(
                  onTap: onClearAll,
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                    child: Text(
                      'Clear all',
                      style: AppTypography.meta.copyWith(
                        color: AppColors.rose,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                ),
              ],
            ],
          ),
        ),
      ],
    );
  }
}
