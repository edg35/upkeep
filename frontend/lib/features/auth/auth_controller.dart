// features/auth/auth_controller.dart
import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/network/auth_token_holder.dart';
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
  AuthController(this._repository) : super(const AuthState());

  final AuthRepository _repository;

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
      state = AuthState(
        accessToken: data['accessToken'] as String,
        refreshToken: data['refreshToken'] as String,
      );
      return true;
    } on DioException catch (e) {
      state = state.copyWith(loading: false, error: _extractError(e));
      return false;
    }
  }

  Future<bool> login({required String email, required String password}) async {
    state = state.copyWith(loading: true, error: null);
    try {
      final data = await _repository.login(email: email, password: password);
      state = AuthState(
        accessToken: data['accessToken'] as String,
        refreshToken: data['refreshToken'] as String,
      );
      return true;
    } on DioException catch (e) {
      state = state.copyWith(loading: false, error: _extractError(e));
      return false;
    }
  }

  Future<void> logout() async {
    final refreshToken = state.refreshToken;
    state = const AuthState();
    if (refreshToken != null) {
      try {
        await _repository.logout(refreshToken);
      } catch (_) {
        // token is already cleared locally; ignore network errors on logout
      }
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
  return AuthController(ref.watch(authRepositoryProvider));
});
