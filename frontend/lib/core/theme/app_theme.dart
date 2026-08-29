import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

/// Upkeep design system v0.1 — palette.
class AppColors {
  AppColors._();

  static const ink = Color(0xFF12312A);
  static const forest = Color(0xFF1D4B3B);
  static const sage = Color(0xFF4CA771);
  static const mint = Color(0xFFCBE7C8);
  static const pale = Color(0xFFE9F2E4);
  static const paper = Color(0xFFF5F1E8);
  static const card = Color(0xFFFFFDF7);
  static const clay = Color(0xFFD98F4E);
  static const rose = Color(0xFFC4685C);
  static const muted = Color(0xFF74857A);
  static const plum = Color(0xFF8B6FA8);
  static const sky = Color(0xFF6E90B0);
}

/// Upkeep design system v0.1 — named type scale (Poppins, with Caveat for
/// hand-drawn asides). These don't map 1:1 onto Material's TextTheme slot
/// names, so screens reach for these directly instead of Theme.of(context).
class AppTypography {
  AppTypography._();

  static TextStyle get display => GoogleFonts.poppins(
        fontSize: 32,
        fontWeight: FontWeight.w600,
        color: AppColors.ink,
      );

  static TextStyle get title => GoogleFonts.poppins(
        fontSize: 20,
        fontWeight: FontWeight.w600,
        color: AppColors.ink,
      );

  static TextStyle get row => GoogleFonts.poppins(
        fontSize: 15,
        fontWeight: FontWeight.w500,
        color: AppColors.ink,
      );

  static TextStyle get body => GoogleFonts.poppins(
        fontSize: 14,
        fontWeight: FontWeight.w400,
        color: AppColors.ink,
      );

  static TextStyle get meta => GoogleFonts.poppins(
        fontSize: 12,
        fontWeight: FontWeight.w500,
        color: AppColors.muted,
      );

  static TextStyle get aside => GoogleFonts.caveat(
        fontSize: 20,
        fontWeight: FontWeight.w500,
        color: AppColors.sage,
      );
}

class AppTheme {
  static ThemeData light() {
    const colorScheme = ColorScheme.light(
      primary: AppColors.forest,
      onPrimary: AppColors.paper,
      secondary: AppColors.sage,
      onSecondary: AppColors.paper,
      surface: AppColors.card,
      onSurface: AppColors.ink,
      error: AppColors.rose,
      onError: AppColors.paper,
      tertiary: AppColors.clay,
    );

    final base = ThemeData(useMaterial3: true, colorScheme: colorScheme);

    return base.copyWith(
      scaffoldBackgroundColor: AppColors.paper,
      textTheme: GoogleFonts.poppinsTextTheme(base.textTheme).copyWith(
        displayLarge: AppTypography.display,
        titleLarge: AppTypography.title,
        bodyLarge: AppTypography.row,
        bodyMedium: AppTypography.body,
        labelSmall: AppTypography.meta,
      ),
      appBarTheme: AppBarTheme(
        backgroundColor: AppColors.paper,
        foregroundColor: AppColors.ink,
        elevation: 0,
        titleTextStyle: AppTypography.title,
      ),
      checkboxTheme: CheckboxThemeData(
        fillColor: WidgetStateProperty.resolveWith(
          (states) => states.contains(WidgetState.selected)
              ? AppColors.sage
              : AppColors.card,
        ),
        checkColor: const WidgetStatePropertyAll(AppColors.paper),
        side: const BorderSide(color: AppColors.muted),
      ),
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: AppColors.card,
        labelStyle: AppTypography.meta.copyWith(color: AppColors.muted),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: AppColors.card),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: AppColors.card),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: AppColors.sage, width: 2),
        ),
        errorBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: AppColors.rose),
        ),
        focusedErrorBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(16),
          borderSide: const BorderSide(color: AppColors.rose, width: 2),
        ),
      ),
    );
  }

  // No dark palette exists in design system v0.1 (light/paper-toned only).
  static ThemeData dark() => light();
}
