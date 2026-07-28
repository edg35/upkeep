// core/network/auth_token_holder.dart
// Plain holder (no Riverpod) so the Dio interceptor can read the current
// access token, and trigger a refresh, without creating an import cycle
// with the auth feature.
class AuthTokenHolder {
  static String? accessToken;

  /// Set by AuthController. Attempts a token refresh using the currently
  /// held refresh token; resolves true if it succeeded (a new access token
  /// is available on [accessToken]) or false otherwise.
  static Future<bool> Function()? onUnauthorized;
}
