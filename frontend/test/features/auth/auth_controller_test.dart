import 'package:flutter_test/flutter_test.dart';
import 'package:frontend/core/network/auth_token_holder.dart';
import 'package:frontend/core/storage/secure_token_storage.dart';
import 'package:frontend/features/auth/auth_controller.dart';
import 'package:frontend/features/auth/auth_repository.dart';

class _FakeAuthApi implements AuthApi {
  Map<String, dynamic>? nextRefreshResult;
  Object? nextRefreshError;
  int refreshCalls = 0;

  @override
  Future<Map<String, dynamic>> signup({
    required String email,
    required String password,
    required String name,
  }) async {
    return {'accessToken': 'signup-access', 'refreshToken': 'signup-refresh'};
  }

  @override
  Future<Map<String, dynamic>> login({
    required String email,
    required String password,
  }) async {
    return {'accessToken': 'login-access', 'refreshToken': 'login-refresh'};
  }

  @override
  Future<Map<String, dynamic>> refresh(String refreshToken) async {
    refreshCalls++;
    if (nextRefreshError != null) throw nextRefreshError!;
    return nextRefreshResult ??
        {'accessToken': 'refreshed-access', 'refreshToken': 'refreshed-refresh'};
  }

  @override
  Future<void> logout(String refreshToken) async {}
}

class _FakeTokenStorage implements TokenStorage {
  TokenPair? stored;
  int clearCalls = 0;

  @override
  Future<TokenPair?> read() async => stored;

  @override
  Future<void> write({required String access, required String refresh}) async {
    stored = (access: access, refresh: refresh);
  }

  @override
  Future<void> clear() async {
    clearCalls++;
    stored = null;
  }
}

void main() {
  late _FakeAuthApi api;
  late _FakeTokenStorage storage;
  late AuthController controller;

  setUp(() {
    api = _FakeAuthApi();
    storage = _FakeTokenStorage();
    controller = AuthController(api, storage);
  });

  tearDown(() {
    AuthTokenHolder.accessToken = null;
    AuthTokenHolder.onUnauthorized = null;
  });

  group('login', () {
    test('persists tokens to storage when keepSignedIn is true', () async {
      final result = await controller.login(
        email: 'a@b.com',
        password: 'pw',
        keepSignedIn: true,
      );

      expect(result, true);
      expect(controller.state.accessToken, 'login-access');
      expect(storage.stored, (access: 'login-access', refresh: 'login-refresh'));
    });

    test('does not persist and clears any stale storage when keepSignedIn is false', () async {
      storage.stored = (access: 'stale-access', refresh: 'stale-refresh');

      final result = await controller.login(
        email: 'a@b.com',
        password: 'pw',
        keepSignedIn: false,
      );

      expect(result, true);
      expect(controller.state.accessToken, 'login-access');
      expect(storage.stored, isNull);
    });
  });

  test('signup always persists tokens to storage', () async {
    final result = await controller.signup(email: 'a@b.com', password: 'pw', name: 'A');

    expect(result, true);
    expect(storage.stored, (access: 'signup-access', refresh: 'signup-refresh'));
  });

  group('restoreSession', () {
    test('does nothing when nothing is stored', () async {
      await controller.restoreSession();

      expect(controller.state.isAuthenticated, false);
      expect(api.refreshCalls, 0);
    });

    test('exchanges a stored refresh token for a fresh pair', () async {
      storage.stored = (access: 'old-access', refresh: 'old-refresh');
      api.nextRefreshResult = {'accessToken': 'new-access', 'refreshToken': 'new-refresh'};

      await controller.restoreSession();

      expect(controller.state.accessToken, 'new-access');
      expect(controller.state.refreshToken, 'new-refresh');
      expect(storage.stored, (access: 'new-access', refresh: 'new-refresh'));
    });

    test('clears storage and stays unauthenticated when the refresh token is invalid', () async {
      storage.stored = (access: 'old-access', refresh: 'expired-refresh');
      api.nextRefreshError = Exception('invalid refresh token');

      await controller.restoreSession();

      expect(controller.state.isAuthenticated, false);
      expect(storage.stored, isNull);
    });
  });

  test('logout clears state and storage', () async {
    await controller.login(email: 'a@b.com', password: 'pw', keepSignedIn: true);
    expect(storage.stored, isNotNull);

    await controller.logout();

    expect(controller.state.isAuthenticated, false);
    expect(storage.stored, isNull);
  });

  group('AuthTokenHolder.onUnauthorized (silent refresh on 401)', () {
    test('refreshes the access token and re-persists it for a kept-signed-in session', () async {
      await controller.login(email: 'a@b.com', password: 'pw', keepSignedIn: true);
      api.nextRefreshResult = {'accessToken': 'silent-access', 'refreshToken': 'silent-refresh'};

      final refreshed = await AuthTokenHolder.onUnauthorized!();

      expect(refreshed, true);
      expect(AuthTokenHolder.accessToken, 'silent-access');
      expect(storage.stored, (access: 'silent-access', refresh: 'silent-refresh'));
    });

    test('does not persist the refreshed token for a not-kept-signed-in session', () async {
      await controller.login(email: 'a@b.com', password: 'pw', keepSignedIn: false);
      api.nextRefreshResult = {'accessToken': 'silent-access', 'refreshToken': 'silent-refresh'};

      final refreshed = await AuthTokenHolder.onUnauthorized!();

      expect(refreshed, true);
      expect(AuthTokenHolder.accessToken, 'silent-access');
      expect(storage.stored, isNull);
    });

    test('clears state and storage when the refresh token has also expired', () async {
      await controller.login(email: 'a@b.com', password: 'pw', keepSignedIn: true);
      api.nextRefreshError = Exception('invalid refresh token');

      final refreshed = await AuthTokenHolder.onUnauthorized!();

      expect(refreshed, false);
      expect(controller.state.isAuthenticated, false);
      expect(storage.stored, isNull);
    });

    test('returns false without calling refresh when there is no session', () async {
      final refreshed = await AuthTokenHolder.onUnauthorized!();

      expect(refreshed, false);
      expect(api.refreshCalls, 0);
    });
  });
}
