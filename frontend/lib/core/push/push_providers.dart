import 'dart:io' show Platform;

import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../network/api_client.dart';
import 'device_api.dart';
import 'push_messaging.dart';
import 'push_notification_service.dart';

const bool pushEnabled = bool.fromEnvironment('PUSH_ENABLED');

final pushMessagingProvider = Provider<PushMessaging>(
  (ref) => pushEnabled ? FirebasePushMessaging() : NoopPushMessaging(),
);

final deviceApiProvider = Provider<DeviceApi>((ref) => DeviceApi(ref.watch(dioProvider)));

final pushNotificationServiceProvider = Provider<PushNotificationService>((ref) {
  final service = PushNotificationService(
    ref.watch(pushMessagingProvider),
    ref.watch(deviceApiProvider),
    platform: Platform.isIOS ? 'IOS' : 'ANDROID',
  );
  ref.onDispose(service.dispose);
  return service;
});
