import 'dart:io' show Platform;

import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'auth_token_holder.dart';

// TODO: move to env config once you set up flavors/dotenv
// The Android emulator can't reach the host machine's `localhost` directly —
// 10.0.2.2 is its alias for that. Every other target (iOS simulator, web,
// desktop) talks to the backend via plain localhost.
String get _baseUrl {
  if (!kIsWeb && Platform.isAndroid) return 'http://10.0.2.2:3000';
  return 'http://localhost:3000';
}

/// Attaches the bearer token to outgoing requests and retries once, with a
/// refreshed token, on a 401 from anything other than the auth endpoints
/// themselves. Exposed standalone (not just inside [dioProvider]) so it can
/// be exercised directly against a scripted [HttpClientAdapter] in tests.
void addAuthInterceptors(Dio dio) {
  dio.interceptors.add(
    InterceptorsWrapper(
      onRequest: (options, handler) {
        final token = AuthTokenHolder.accessToken;
        if (token != null) {
          options.headers['Authorization'] = 'Bearer $token';
        }
        handler.next(options);
      },
      onError: (error, handler) async {
        final options = error.requestOptions;
        final isAuthEndpoint = options.path.startsWith('/auth/');
        final alreadyRetried = options.extra['retried'] == true;

        if (error.response?.statusCode == 401 && !isAuthEndpoint && !alreadyRetried) {
          final refreshed = await AuthTokenHolder.onUnauthorized?.call() ?? false;
          if (refreshed) {
            try {
              options.extra['retried'] = true;
              options.headers['Authorization'] = 'Bearer ${AuthTokenHolder.accessToken}';
              final response = await dio.fetch<dynamic>(options);
              return handler.resolve(response);
            } catch (_) {
              return handler.next(error);
            }
          }
        }
        handler.next(error);
      },
    ),
  );
}

final dioProvider = Provider<Dio>((ref) {
  final dio = Dio(
    BaseOptions(
      baseUrl: _baseUrl,
      connectTimeout: const Duration(seconds: 10),
      receiveTimeout: const Duration(seconds: 10),
    ),
  );

  dio.interceptors.add(LogInterceptor(responseBody: true));
  addAuthInterceptors(dio);

  return dio;
});
