import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';

const _monthAbbrev = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

/// A single explicit due date — for a one-off item like an annual renewal,
/// as opposed to something that repeats after every completion.
class FixedDateField extends StatelessWidget {
  const FixedDateField({super.key, required this.value, required this.onChanged});

  final DateTime? value;
  final ValueChanged<DateTime> onChanged;

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
          Text('Due on', style: AppTypography.meta),
          const SizedBox(height: 8),
          GestureDetector(
            onTap: () => _pick(context),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
              decoration: BoxDecoration(
                color: AppColors.pale,
                borderRadius: BorderRadius.circular(20),
              ),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(Icons.calendar_today_outlined, size: 16, color: AppColors.forest),
                  const SizedBox(width: 8),
                  Text(
                    value != null ? _formatDate(value!) : 'Pick a date',
                    style: AppTypography.meta.copyWith(
                      color: AppColors.forest,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Future<void> _pick(BuildContext context) async {
    final now = DateTime.now();
    final picked = await showDatePicker(
      context: context,
      initialDate: value ?? now,
      firstDate: now,
      lastDate: now.add(const Duration(days: 365 * 5)),
    );
    if (picked != null) onChanged(picked);
  }

  static String _formatDate(DateTime date) {
    return '${_monthAbbrev[date.month - 1]} ${date.day}, ${date.year}';
  }
}
