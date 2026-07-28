import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:frontend/app.dart';
import 'package:frontend/core/storage/secure_token_storage.dart';

class _FakeTokenStorage implements TokenStorage {
  @override
  Future<TokenPair?> read() async => null;

  @override
  Future<void> write({required String access, required String refresh}) async {}

  @override
  Future<void> clear() async {}
}

void main() {
  testWidgets('a logged-out app starts on the welcome screen', (WidgetTester tester) async {
    await tester.pumpWidget(
      ProviderScope(
        overrides: [
          secureTokenStorageProvider.overrideWithValue(_FakeTokenStorage()),
        ],
        child: const UpkeepApp(),
      ),
    );
    await tester.pumpAndSettle();

    expect(find.text('Welcome home.'), findsOneWidget);
  });
}
