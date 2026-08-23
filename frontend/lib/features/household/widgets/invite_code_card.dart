import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:share_plus/share_plus.dart';

import '../../../core/theme/app_theme.dart';

class InviteCodeCard extends StatelessWidget {
  const InviteCodeCard({
    super.key,
    required this.householdName,
    required this.code,
  });

  final String householdName;
  final String code;

  Future<void> _copy(BuildContext context) async {
    await Clipboard.setData(ClipboardData(text: code));
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Invite code copied')),
      );
    }
  }

  void _share() {
    SharePlus.instance.share(
      ShareParams(
        text: 'Join "$householdName" on Upkeep with the code $code',
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: AppColors.pale,
        borderRadius: BorderRadius.circular(20),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Invite someone', style: AppTypography.row.copyWith(fontWeight: FontWeight.w600)),
                    Text('Share the code or send a link', style: AppTypography.meta),
                  ],
                ),
              ),
              SizedBox(
                height: 40,
                child: FilledButton(
                  style: FilledButton.styleFrom(
                    backgroundColor: AppColors.forest,
                    foregroundColor: AppColors.paper,
                    shape: const StadiumBorder(),
                  ),
                  onPressed: _share,
                  child: const Text('Invite'),
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            decoration: BoxDecoration(
              color: AppColors.card,
              borderRadius: BorderRadius.circular(16),
            ),
            child: Row(
              children: [
                Expanded(
                  child: Text(
                    code,
                    style: AppTypography.title.copyWith(letterSpacing: 2),
                  ),
                ),
                IconButton(
                  icon: const Icon(Icons.copy_outlined, color: AppColors.muted),
                  onPressed: () => _copy(context),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
