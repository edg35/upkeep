import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';
import '../../items/item_type.dart';

class ItemTypeTabRow extends StatelessWidget {
  const ItemTypeTabRow({
    super.key,
    required this.selected,
    required this.onChanged,
  });

  final ItemType selected;
  final ValueChanged<ItemType> onChanged;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: ItemType.values.map((type) {
        final isSelected = type == selected;
        return Expanded(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 3),
            child: GestureDetector(
              onTap: () => onChanged(type),
              child: Container(
                padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 4),
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  color: isSelected ? AppColors.forest : AppColors.pale,
                  borderRadius: BorderRadius.circular(24),
                ),
                child: Text(
                  type.tabLabel,
                  textAlign: TextAlign.center,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: AppTypography.meta.copyWith(
                    fontSize: 11,
                    color: isSelected ? AppColors.paper : AppColors.forest,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
            ),
          ),
        );
      }).toList(),
    );
  }
}
