import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';

/// One option in a [FilterChipButton]'s picker sheet.
class FilterOption<T> {
  const FilterOption(this.value, this.label);
  final T value;
  final String label;
}

/// A single filter dimension's control: shows "All" or the current
/// selection, tapping opens a bottom sheet to pick one (or clear back to
/// "All").
class FilterChipButton<T> extends StatelessWidget {
  const FilterChipButton({
    super.key,
    required this.label,
    required this.options,
    required this.value,
    required this.onChanged,
  });

  final String label;
  final List<FilterOption<T>> options;
  final T? value;
  final ValueChanged<T?> onChanged;

  @override
  Widget build(BuildContext context) {
    final selectedLabel = options.where((o) => o.value == value).map((o) => o.label).firstOrNull;
    final active = selectedLabel != null;

    return GestureDetector(
      onTap: () => _showSheet(context),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
        decoration: BoxDecoration(
          color: active ? AppColors.forest : AppColors.card,
          borderRadius: BorderRadius.circular(20),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              active ? selectedLabel : label,
              style: AppTypography.meta.copyWith(
                color: active ? AppColors.paper : AppColors.ink,
                fontWeight: FontWeight.w600,
              ),
            ),
            const SizedBox(width: 4),
            Icon(
              Icons.keyboard_arrow_down_rounded,
              size: 16,
              color: active ? AppColors.paper : AppColors.muted,
            ),
          ],
        ),
      ),
    );
  }

  void _showSheet(BuildContext context) {
    showModalBottomSheet(
      context: context,
      backgroundColor: AppColors.paper,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      builder: (context) {
        return SafeArea(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(label, style: AppTypography.title),
                const SizedBox(height: 8),
                ListTile(
                  contentPadding: EdgeInsets.zero,
                  title: const Text('All'),
                  trailing: value == null ? const Icon(Icons.check_rounded, color: AppColors.sage) : null,
                  onTap: () {
                    onChanged(null);
                    Navigator.of(context).pop();
                  },
                ),
                for (final option in options)
                  ListTile(
                    contentPadding: EdgeInsets.zero,
                    title: Text(option.label),
                    trailing: option.value == value
                        ? const Icon(Icons.check_rounded, color: AppColors.sage)
                        : null,
                    onTap: () {
                      onChanged(option.value);
                      Navigator.of(context).pop();
                    },
                  ),
              ],
            ),
          ),
        );
      },
    );
  }
}

extension _FirstOrNull<T> on Iterable<T> {
  T? get firstOrNull => isEmpty ? null : first;
}
