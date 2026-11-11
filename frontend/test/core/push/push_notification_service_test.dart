import 'dart:async';

import 'package:flutter_test/flutter_test.dart';
import 'package:frontend/core/push/device_api.dart';
import 'package:frontend/core/push/push_messaging.dart';
import 'package:frontend/core/push/push_notification_service.dart';

class FakePushMessaging implements PushMessaging {
  bool permission = true;
  String? token = 'tok-1';
  final refresh = StreamController<String>.broadcast();
  final calls = <String>[];

  @override
  Future<bool> requestPermission() async {
    calls.add('requestPermission');
    return permission;
  }

  @override
  Future<String?> getToken() async => token;

  @override
  Stream<String> get onTokenRefresh => refresh.stream;

  @override
  Future<void> deleteToken() async => calls.add('deleteToken');

  @override
  Future<void> enableForegroundPresentation() async => calls.add('foreground');
}

class FakeDeviceApi implements DeviceApi {
  final calls = <String>[];
  bool failUnregister = false;

  @override
  Future<void> register(String token, String platform) async => calls.add('register:$token:$platform');

  @override
  Future<void> unregister(String token) async {
    calls.add('unregister:$token');
    if (failUnregister) throw Exception('boom');
  }
}

void main() {
  late FakePushMessaging messaging;
  late FakeDeviceApi api;
  late PushNotificationService service;

  setUp(() {
    messaging = FakePushMessaging();
    api = FakeDeviceApi();
    service = PushNotificationService(messaging, api, platform: 'IOS');
  });

  tearDown(() => service.dispose());

  test('registers token after permission granted', () async {
    await service.onAuthenticated();
    expect(api.calls, ['register:tok-1:IOS']);
    expect(messaging.calls, contains('foreground'));
  });

  test('does not register when permission denied', () async {
    messaging.permission = false;
    await service.onAuthenticated();
    expect(api.calls, isEmpty);
    expect(messaging.calls, isNot(contains('foreground')));
  });

  test('re-registers on token refresh', () async {
    await service.onAuthenticated();
    messaging.refresh.add('tok-2');
    await Future<void>.delayed(Duration.zero);
    expect(api.calls, ['register:tok-1:IOS', 'register:tok-2:IOS']);
  });

  test('onAuthenticated twice subscribes once', () async {
    await service.onAuthenticated();
    await service.onAuthenticated();
    api.calls.clear();
    messaging.refresh.add('tok-2');
    await Future<void>.delayed(Duration.zero);
    expect(api.calls, ['register:tok-2:IOS']);
  });

  test('onBeforeLogout unregisters then deletes token', () async {
    await service.onAuthenticated();
    messaging.calls.clear();
    api.calls.clear();
    await service.onBeforeLogout();
    expect(api.calls, ['unregister:tok-1']);
    expect(messaging.calls, ['deleteToken']);
    api.calls.clear();
    messaging.refresh.add('tok-3');
    await Future<void>.delayed(Duration.zero);
    expect(api.calls, isEmpty);
  });

  test('onBeforeLogout swallows unregister errors', () async {
    await service.onAuthenticated();
    api.failUnregister = true;
    await service.onBeforeLogout();
  });
}
