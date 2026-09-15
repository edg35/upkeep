import 'package:flutter/material.dart';

import '../../categories/category.dart';

class RoomDropdown extends StatelessWidget {
  const RoomDropdown({
    super.key,
    required this.categories,
    required this.value,
    required this.onChanged,
  });

  final List<Category> categories;
  final String? value;
  final ValueChanged<String?> onChanged;

  @override
  Widget build(BuildContext context) {
    return DropdownButtonFormField<String>(
      // ignore: deprecated_member_use
      value: categories.any((c) => c.id == value) ? value : null,
      decoration: const InputDecoration(labelText: 'Room'),
      items: categories
          .map((c) => DropdownMenuItem(value: c.id, child: Text(c.name)))
          .toList(),
      onChanged: onChanged,
    );
  }
}
