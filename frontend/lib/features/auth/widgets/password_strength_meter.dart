import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';
import '../password_strength.dart';

class PasswordStrengthMeter extends StatelessWidget {
  const PasswordStrengthMeter({super.key, required this.password});

  final String password;

  @override
  Widget build(BuildContext context) {
    final strength = passwordStrength(password);

    return Row(
      children: List.generate(3, (index) {
        final filled = index < strength;
        return Expanded(
          child: Container(
            margin: EdgeInsets.only(right: index < 2 ? 6 : 0),
            height: 4,
            decoration: BoxDecoration(
              color: filled ? AppColors.sage : AppColors.pale,
              borderRadius: BorderRadius.circular(2),
            ),
          ),
        );
      }),
    );
  }
}
