import 'dart:async';

import 'device_api.dart';
import 'push_messaging.dart';

class PushNotificationService {
  PushNotificationService(this._messaging, this._api, {required this.platform});

  final PushMessaging _messaging;
  final DeviceApi _api;
  final String platform;
  StreamSubscription<String>? _refreshSub;

  Future<void> onAuthenticated() async {
    try {
      if (!await _messaging.requestPermission()) return;
      await _messaging.enableForegroundPresentation();
      final token = await _messaging.getToken();
      if (token != null) await _api.register(token, platform);
      _refreshSub ??= _messaging.onTokenRefresh.listen((t) async {
        try {
          await _api.register(t, platform);
        } catch (_) {}
      });
    } catch (_) {
      // Push is best-effort; never break the auth flow.
    }
  }

  Future<void> onBeforeLogout() async {
    try {
      try {
        final token = await _messaging.getToken();
        if (token != null) {
          await _api.unregister(token).timeout(const Duration(seconds: 5));
        }
      } catch (_) {}
      // Invalidate the local FCM token even if unregister failed; the backend
      // prunes it on the next send.
      try {
        await _messaging.deleteToken();
      } catch (_) {}
    } finally {
      await _refreshSub?.cancel();
      _refreshSub = null;
    }
  }

  void dispose() {
    _refreshSub?.cancel();
    _refreshSub = null;
  }
}
