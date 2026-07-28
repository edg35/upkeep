// features/auth/auth_controller.dart
import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/network/auth_token_holder.dart';
import '../../core/storage/secure_token_storage.dart';
import 'auth_repository.dart';

class AuthState {
  const AuthState({this.accessToken, this.refreshToken, this.loading = false, this.error});

  final String? accessToken;
  final String? refreshToken;
  final bool loading;
  final String? error;

  bool get isAuthenticated => accessToken != null;

  AuthState copyWith({
    String? accessToken,
    String? refreshToken,
    bool? loading,
    String? error,
  }) {
    return AuthState(
      accessToken: accessToken ?? this.accessToken,
      refreshToken: refreshToken ?? this.refreshToken,
      loading: loading ?? this.loading,
      error: error,
    );
  }
}

class AuthController extends StateNotifier<AuthState> {
  AuthController(this._repository, this._tokenStorage) : super(const AuthState()) {
    AuthTokenHolder.onUnauthorized = _handleUnauthorized;
  }

  final AuthApi _repository;
  final TokenStorage _tokenStorage;

  /// Whether the current session's tokens should be re-persisted to secure
  /// storage when they rotate (on signup, on a "keep me signed in" login,
  /// or after a successful cold-start restore).
  bool _persistSession = false;

  @override
  set state(AuthState value) {
    AuthTokenHolder.accessToken = value.accessToken;
    super.state = value;
  }

  Future<bool> signup({
    required String email,
    required String password,
    required String name,
  }) async {
    state = state.copyWith(loading: true, error: null);
    try {
      final data = await _repository.signup(email: email, password: password, name: name);
      final access = data['accessToken'] as String;
      final refresh = data['refreshToken'] as String;
      state = AuthState(accessToken: access, refreshToken: refresh);
      _persistSession = true;
      await _tokenStorage.write(access: access, refresh: refresh);
      return true;
    } on DioException catch (e) {
      state = state.copyWith(loading: false, error: _extractError(e));
      return false;
    }
  }

  Future<bool> login({
    required String email,
    required String password,
    required bool keepSignedIn,
  }) async {
    state = state.copyWith(loading: true, error: null);
    try {
      final data = await _repository.login(email: email, password: password);
      final access = data['accessToken'] as String;
      final refresh = data['refreshToken'] as String;
      state = AuthState(accessToken: access, refreshToken: refresh);
      _persistSession = keepSignedIn;
      if (keepSignedIn) {
        await _tokenStorage.write(access: access, refresh: refresh);
      } else {
        await _tokenStorage.clear();
      }
      return true;
    } on DioException catch (e) {
      state = state.copyWith(loading: false, error: _extractError(e));
      return false;
    }
  }

  Future<void> logout() async {
    final refreshToken = state.refreshToken;
    state = const AuthState();
    _persistSession = false;
    await _tokenStorage.clear();
    if (refreshToken != null) {
      try {
        await _repository.logout(refreshToken);
      } catch (_) {
        // token is already cleared locally; ignore network errors on logout
      }
    }
  }

  /// Runs once at app startup. Reads any tokens persisted from a previous
  /// launch and exchanges them for a fresh pair, so a relaunch lands the
  /// user back in the app instead of at the welcome screen. Leaves state
  /// unauthenticated (silently) if there's nothing stored, or if the stored
  /// refresh token is no longer valid.
  Future<void> restoreSession() async {
    final stored = await _tokenStorage.read();
    if (stored == null) return;

    try {
      final data = await _repository.refresh(stored.refresh);
      final access = data['accessToken'] as String;
      final refresh = data['refreshToken'] as String;
      state = AuthState(accessToken: access, refreshToken: refresh);
      _persistSession = true;
      await _tokenStorage.write(access: access, refresh: refresh);
    } catch (_) {
      _persistSession = false;
      await _tokenStorage.clear();
    }
  }

  /// Registered on [AuthTokenHolder] so the Dio interceptor can silently
  /// refresh an expired access token mid-session.
  Future<bool> _handleUnauthorized() async {
    final refreshToken = state.refreshToken;
    if (refreshToken == null) return false;

    try {
      final data = await _repository.refresh(refreshToken);
      final access = data['accessToken'] as String;
      final refresh = data['refreshToken'] as String;
      state = AuthState(accessToken: access, refreshToken: refresh);
      if (_persistSession) {
        await _tokenStorage.write(access: access, refresh: refresh);
      }
      return true;
    } catch (_) {
      state = const AuthState();
      _persistSession = false;
      await _tokenStorage.clear();
      return false;
    }
  }

  String _extractError(DioException e) {
    final data = e.response?.data;
    if (data is Map && data['message'] != null) {
      final message = data['message'];
      if (message is List) return message.join(', ');
      return message.toString();
    }
    return 'Something went wrong. Please try again.';
  }
}

final authControllerProvider = StateNotifierProvider<AuthController, AuthState>((ref) {
  return AuthController(
    ref.watch(authRepositoryProvider),
    ref.watch(secureTokenStorageProvider),
  );
});

/// Kicks off [AuthController.restoreSession] exactly once, at first read.
/// The router watches this (via the redirect notifier) to gate startup on a
/// splash screen until it resolves.
final sessionInitProvider = FutureProvider<void>((ref) {
  return ref.read(authControllerProvider.notifier).restoreSession();
});
