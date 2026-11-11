import 'package:firebase_messaging/firebase_messaging.dart';

abstract class PushMessaging {
  Future<bool> requestPermission();
  Future<String?> getToken();
  Stream<String> get onTokenRefresh;
  Future<void> deleteToken();
  Future<void> enableForegroundPresentation();
}

// ignore_for_file: deprecated_member_use
// firebase_messaging 17 deprecates getToken/onTokenRefresh/deleteToken in favour
// of register()/onRegistered/unregister(); they still work and match the
// brief. Migrate later if desired.

/// Wraps [FirebaseMessaging.instance]. Only construct when Firebase has been
/// initialized (see `pushEnabled`).
class FirebasePushMessaging implements PushMessaging {
  FirebaseMessaging get _fm => FirebaseMessaging.instance;

  @override
  Future<bool> requestPermission() async {
    final settings = await _fm.requestPermission();
    return settings.authorizationStatus == AuthorizationStatus.authorized ||
        settings.authorizationStatus == AuthorizationStatus.provisional;
  }

  @override
  Future<String?> getToken() => _fm.getToken();

  @override
  Stream<String> get onTokenRefresh => _fm.onTokenRefresh;

  @override
  Future<void> deleteToken() => _fm.deleteToken();

  @override
  Future<void> enableForegroundPresentation() =>
      _fm.setForegroundNotificationPresentationOptions(alert: true, badge: true, sound: true);
}

/// Used when push is disabled; never touches Firebase.
class NoopPushMessaging implements PushMessaging {
  @override
  Future<bool> requestPermission() async => false;

  @override
  Future<String?> getToken() async => null;

  @override
  Stream<String> get onTokenRefresh => const Stream<String>.empty();

  @override
  Future<void> deleteToken() async {}

  @override
  Future<void> enableForegroundPresentation() async {}
}
