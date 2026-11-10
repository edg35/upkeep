import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';
import '../../items/icon_option.dart';

class IconPicker extends StatelessWidget {
  const IconPicker({super.key, required this.value, required this.onChanged});

  final String? value;
  final ValueChanged<String> onChanged;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppColors.card,
        borderRadius: BorderRadius.circular(16),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Icon', style: AppTypography.meta),
          const SizedBox(height: 12),
          Wrap(
            spacing: 10,
            runSpacing: 10,
            children: [
              for (final option in iconOptions)
                _IconChoice(
                  option: option,
                  selected: option.key == value,
                  onTap: () => onChanged(option.key),
                ),
            ],
          ),
        ],
      ),
    );
  }
}

class _IconChoice extends StatelessWidget {
  const _IconChoice({required this.option, required this.selected, required this.onTap});

  final IconOption option;
  final bool selected;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Tooltip(
        message: option.label,
        child: Container(
          width: 44,
          height: 44,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: selected ? AppColors.forest : AppColors.pale,
            shape: BoxShape.circle,
          ),
          child: Icon(
            option.icon,
            size: 20,
            color: selected ? AppColors.paper : AppColors.forest,
          ),
        ),
      ),
    );
  }
}
