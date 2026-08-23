import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';

class MemberRow extends StatelessWidget {
  const MemberRow({
    super.key,
    required this.name,
    required this.role,
    required this.isCurrentUser,
    this.showMenu = false,
    this.onRemoveTapped,
  });

  final String name;
  final String role; // 'OWNER' | 'MEMBER'
  final bool isCurrentUser;
  final bool showMenu;
  final VoidCallback? onRemoveTapped;

  @override
  Widget build(BuildContext context) {
    final label = role == 'OWNER' ? 'Owner' : 'Member';
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: Row(
        children: [
          CircleAvatar(
            backgroundColor: AppColors.pale,
            foregroundColor: AppColors.forest,
            child: Text(name.isNotEmpty ? name[0].toUpperCase() : '?'),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  isCurrentUser ? '$name (you)' : name,
                  style: AppTypography.row,
                ),
                Text(label, style: AppTypography.meta),
              ],
            ),
          ),
          if (showMenu)
            PopupMenuButton<String>(
              icon: const Icon(Icons.more_vert, color: AppColors.muted),
              onSelected: (_) => onRemoveTapped?.call(),
              itemBuilder: (context) => const [
                PopupMenuItem(
                  value: 'remove',
                  child: Text('Remove member (coming soon)'),
                ),
              ],
            ),
        ],
      ),
    );
  }
}
