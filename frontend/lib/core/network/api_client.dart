// core/network/api_client.dart
import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'auth_token_holder.dart';

// TODO: move to env config once you set up flavors/dotenv
const _baseUrl = 'http://10.0.2.2:3000'; // Android emulator -> localhost
// use 'http://localhost:3000' for iOS simulator

final dioProvider = Provider<Dio>((ref) {
  final dio = Dio(
    BaseOptions(
      baseUrl: _baseUrl,
      connectTimeout: const Duration(seconds: 10),
      receiveTimeout: const Duration(seconds: 10),
    ),
  );

  dio.interceptors.add(LogInterceptor(responseBody: true));
  dio.interceptors.add(
    InterceptorsWrapper(
      onRequest: (options, handler) {
        final token = AuthTokenHolder.accessToken;
        if (token != null) {
          options.headers['Authorization'] = 'Bearer $token';
        }
        handler.next(options);
      },
    ),
  );

  return dio;
});
