import 'package:flutter_test/flutter_test.dart';
import 'package:frontend/core/theme/app_theme.dart';

// Uses testWidgets (not a plain test()) so GoogleFonts' background font
// loading resolves inside the widget test zone instead of surfacing as a
// stray unhandled error after the test completes.
void main() {
  testWidgets('light theme maps the design system palette onto ColorScheme roles', (
    tester,
  ) async {
    final theme = AppTheme.light();

    expect(theme.colorScheme.primary, AppColors.forest);
    expect(theme.colorScheme.secondary, AppColors.sage);
    expect(theme.colorScheme.surface, AppColors.card);
    expect(theme.colorScheme.error, AppColors.rose);
    expect(theme.scaffoldBackgroundColor, AppColors.paper);
  });

  testWidgets('text theme uses the named type scale sizes', (tester) async {
    final theme = AppTheme.light();

    expect(theme.textTheme.displayLarge?.fontSize, 32);
    expect(theme.textTheme.titleLarge?.fontSize, 20);
    expect(theme.textTheme.bodyLarge?.fontSize, 15);
    expect(theme.textTheme.bodyMedium?.fontSize, 14);
    expect(theme.textTheme.labelSmall?.fontSize, 12);
  });

  testWidgets('dark() mirrors light() (no dark palette in design system v0.1)', (tester) async {
    expect(AppTheme.dark().colorScheme.primary, AppTheme.light().colorScheme.primary);
  });
}
