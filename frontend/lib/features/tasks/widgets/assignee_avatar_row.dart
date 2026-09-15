import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';

/// "Who's on it" — a multi-select row of household-member avatars, styled
/// off [MemberRow]'s pale/forest avatar look. `members` are raw
/// `{user_id, name, role}` maps from `HouseholdApi.listMembers()`.
class AssigneeAvatarRow extends StatelessWidget {
  const AssigneeAvatarRow({
    super.key,
    required this.members,
    required this.selectedIds,
    required this.onToggle,
  });

  final List<Map<String, dynamic>> members;
  final Set<String> selectedIds;
  final ValueChanged<String> onToggle;

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
          Text("Who's on it?", style: AppTypography.meta),
          const SizedBox(height: 12),
          Wrap(
            spacing: 12,
            runSpacing: 12,
            children: [
              for (final member in members)
                _AssigneeChip(
                  name: member['name'] as String? ?? '?',
                  selected: selectedIds.contains(member['user_id']),
                  onTap: () => onToggle(member['user_id'] as String),
                ),
              GestureDetector(
                onTap: () => _showMorePicker(context),
                child: const DottedAddIcon(),
              ),
            ],
          ),
        ],
      ),
    );
  }

  void _showMorePicker(BuildContext context) {
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
                Text('Household members', style: AppTypography.title),
                const SizedBox(height: 8),
                for (final member in members)
                  CheckboxListTile(
                    value: selectedIds.contains(member['user_id']),
                    onChanged: (_) => onToggle(member['user_id'] as String),
                    title: Text(member['name'] as String? ?? 'Member'),
                    activeColor: AppColors.sage,
                    contentPadding: EdgeInsets.zero,
                  ),
              ],
            ),
          ),
        );
      },
    );
  }
}

class _AssigneeChip extends StatelessWidget {
  const _AssigneeChip({
    required this.name,
    required this.selected,
    required this.onTap,
  });

  final String name;
  final bool selected;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          CircleAvatar(
            backgroundColor: selected ? AppColors.forest : AppColors.pale,
            foregroundColor: selected ? AppColors.paper : AppColors.forest,
            child: Text(name.isNotEmpty ? name[0].toUpperCase() : '?'),
          ),
          const SizedBox(height: 4),
          Text(name, style: AppTypography.meta),
        ],
      ),
    );
  }
}

class DottedAddIcon extends StatelessWidget {
  const DottedAddIcon({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 40,
      height: 40,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        border: Border.all(color: AppColors.muted, style: BorderStyle.solid),
      ),
      child: const Icon(Icons.add, color: AppColors.muted, size: 20),
    );
  }
}
