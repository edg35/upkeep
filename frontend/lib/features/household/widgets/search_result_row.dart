import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';

class SearchResultRow extends StatelessWidget {
  const SearchResultRow({
    super.key,
    required this.name,
    required this.onAsk,
    this.loading = false,
    this.asked = false,
  });

  final String name;
  final VoidCallback onAsk;
  final bool loading;
  final bool asked;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(
        children: [
          Container(
            width: 40,
            height: 40,
            decoration: BoxDecoration(color: AppColors.pale, borderRadius: BorderRadius.circular(12)),
            child: const Icon(Icons.home_outlined, color: AppColors.forest, size: 20),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Text(name, style: AppTypography.row),
          ),
          SizedBox(
            height: 36,
            child: OutlinedButton(
              style: OutlinedButton.styleFrom(
                foregroundColor: AppColors.ink,
                side: const BorderSide(color: AppColors.card),
                backgroundColor: asked ? AppColors.pale : AppColors.forest,
                shape: const StadiumBorder(),
              ),
              onPressed: (loading || asked) ? null : onAsk,
              child: loading
                  ? const SizedBox(
                      height: 16,
                      width: 16,
                      child: CircularProgressIndicator(strokeWidth: 2, color: AppColors.paper),
                    )
                  : Text(
                      asked ? 'Asked' : 'Ask',
                      style: AppTypography.meta.copyWith(
                        color: asked ? AppColors.muted : AppColors.paper,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
            ),
          ),
        ],
      ),
    );
  }
}
