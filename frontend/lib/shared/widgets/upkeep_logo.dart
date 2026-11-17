import 'package:flutter/material.dart';

/// The Upkeep mark: a U whose right arm sprouts two leaves.
///
/// Drawn for dark backgrounds (cream U, dark leaf veins), so place it on
/// forest or ink. Source art lives in assets/branding/logo.svg.
class UpkeepLogo extends StatelessWidget {
  const UpkeepLogo({super.key, required this.height});

  final double height;

  static const _asset = 'assets/branding/logo_mark.png';

  @override
  Widget build(BuildContext context) {
    return Image.asset(
      _asset,
      height: height,
      fit: BoxFit.contain,
      filterQuality: FilterQuality.medium,
      semanticLabel: 'Upkeep logo',
    );
  }
}
