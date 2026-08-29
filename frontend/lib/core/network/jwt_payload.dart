import 'dart:convert';

/// Decodes the payload of a JWT without verifying its signature — safe here
/// because we only ever read tokens the backend already issued to us over
/// TLS, purely to pull display data (like the `sub` user id) out locally.
Map<String, dynamic>? decodeJwtPayload(String token) {
  final parts = token.split('.');
  if (parts.length != 3) return null;
  try {
    final normalized = base64Url.normalize(parts[1]);
    final decoded = utf8.decode(base64Url.decode(normalized));
    return json.decode(decoded) as Map<String, dynamic>;
  } catch (_) {
    return null;
  }
}
