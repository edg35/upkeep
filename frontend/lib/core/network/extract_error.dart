import 'package:dio/dio.dart';

/// Extracts a user-facing message from a NestJS validation/error response
/// shaped as `{ message: string | string[] }`. Shared by feature controllers
/// that need the same DioException-to-string handling as [AuthController].
String extractError(DioException e) {
  final data = e.response?.data;
  if (data is Map && data['message'] != null) {
    final message = data['message'];
    if (message is List) return message.join(', ');
    return message.toString();
  }
  return 'Something went wrong. Please try again.';
}
