// core/network/auth_token_holder.dart
// Plain holder (no Riverpod) so the Dio interceptor can read the current
// access token without creating an import cycle with the auth feature.
class AuthTokenHolder {
  static String? accessToken;
}
