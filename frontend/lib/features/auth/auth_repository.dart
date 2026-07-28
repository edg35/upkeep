// features/auth/auth_repository.dart
import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/network/api_client.dart';

abstract class AuthApi {
  Future<Map<String, dynamic>> signup({
    required String email,
    required String password,
    required String name,
  });

  Future<Map<String, dynamic>> login({
    required String email,
    required String password,
  });

  Future<Map<String, dynamic>> refresh(String refreshToken);

  Future<void> logout(String refreshToken);
}

class AuthRepository implements AuthApi {
  AuthRepository(this._dio);
  final Dio _dio;

  @override
  Future<Map<String, dynamic>> signup({
    required String email,
    required String password,
    required String name,
  }) async {
    final res = await _dio.post(
      '/auth/signup',
      data: {'email': email, 'password': password, 'name': name},
    );
    return res.data as Map<String, dynamic>;
  }

  @override
  Future<Map<String, dynamic>> login({
    required String email,
    required String password,
  }) async {
    final res = await _dio.post(
      '/auth/login',
      data: {'email': email, 'password': password},
    );
    return res.data as Map<String, dynamic>;
  }

  @override
  Future<Map<String, dynamic>> refresh(String refreshToken) async {
    final res = await _dio.post(
      '/auth/refresh',
      data: {'refreshToken': refreshToken},
    );
    return res.data as Map<String, dynamic>;
  }

  @override
  Future<void> logout(String refreshToken) {
    return _dio.post('/auth/logout', data: {'refreshToken': refreshToken});
  }
}

final authRepositoryProvider = Provider<AuthApi>((ref) {
  return AuthRepository(ref.watch(dioProvider));
});
