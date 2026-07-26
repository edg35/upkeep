// core/network/api_client.dart
import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

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
  // Auth interceptor for the token slot in flutter_secure_storage
  // gets added in the auth-flow issue (VER-... auth flow).

  return dio;
});
