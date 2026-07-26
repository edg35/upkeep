import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:frontend/app.dart';

void main() {
  testWidgets('App starts on the dashboard tab', (WidgetTester tester) async {
    await tester.pumpWidget(
      const ProviderScope(child: UpkeepApp()),
    );
    await tester.pumpAndSettle();

    expect(find.text('Dashboard'), findsWidgets);
  });
}
