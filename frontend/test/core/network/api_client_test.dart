import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:dio/dio.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:frontend/core/network/api_client.dart';
import 'package:frontend/core/network/auth_token_holder.dart';

class _ScriptedAdapter implements HttpClientAdapter {
  _ScriptedAdapter(this.responses);
  final List<ResponseBody> responses;
  final List<RequestOptions> requests = [];

  @override
  Future<ResponseBody> fetch(
    RequestOptions options,
    Stream<Uint8List>? requestStream,
    Future<void>? cancelFuture,
  ) async {
    requests.add(options);
    return responses.removeAt(0);
  }

  @override
  void close({bool force = false}) {}
}

ResponseBody _jsonResponse(int statusCode, Map<String, dynamic> body) {
  return ResponseBody.fromString(
    jsonEncode(body),
    statusCode,
    headers: {
      Headers.contentTypeHeader: [Headers.jsonContentType],
    },
  );
}

void main() {
  tearDown(() {
    AuthTokenHolder.accessToken = null;
    AuthTokenHolder.onUnauthorized = null;
  });

  test('retries once with a refreshed token after a 401', () async {
    AuthTokenHolder.accessToken = 'stale-token';
    var refreshCalls = 0;
    AuthTokenHolder.onUnauthorized = () async {
      refreshCalls++;
      AuthTokenHolder.accessToken = 'fresh-token';
      return true;
    };

    final adapter = _ScriptedAdapter([
      _jsonResponse(401, {'message': 'Unauthorized'}),
      _jsonResponse(200, {'ok': true}),
    ]);

    final dio = Dio(BaseOptions(baseUrl: 'http://example.test'))..httpClientAdapter = adapter;
    addAuthInterceptors(dio);

    final response = await dio.get<Map<String, dynamic>>('/items');

    expect(response.statusCode, 200);
    expect(response.data, {'ok': true});
    expect(refreshCalls, 1);
    // Dio retries by re-fetching the same RequestOptions instance in place
    // (not a copy), so both captured entries share one object — only the
    // final, post-refresh header value is observable here.
    expect(adapter.requests, hasLength(2));
    expect(adapter.requests.last.headers['Authorization'], 'Bearer fresh-token');
  });

  test('does not retry when refresh fails, propagates the 401', () async {
    AuthTokenHolder.accessToken = 'stale-token';
    AuthTokenHolder.onUnauthorized = () async => false;

    final adapter = _ScriptedAdapter([
      _jsonResponse(401, {'message': 'Unauthorized'}),
    ]);

    final dio = Dio(BaseOptions(baseUrl: 'http://example.test'))..httpClientAdapter = adapter;
    addAuthInterceptors(dio);

    await expectLater(
      dio.get<Map<String, dynamic>>('/items'),
      throwsA(
        isA<DioException>().having((e) => e.response?.statusCode, 'statusCode', 401),
      ),
    );
    expect(adapter.requests, hasLength(1));
  });

  test('does not attempt a refresh for /auth/* endpoints', () async {
    var called = false;
    AuthTokenHolder.onUnauthorized = () async {
      called = true;
      return true;
    };

    final adapter = _ScriptedAdapter([
      _jsonResponse(401, {'message': 'Invalid credentials'}),
    ]);

    final dio = Dio(BaseOptions(baseUrl: 'http://example.test'))..httpClientAdapter = adapter;
    addAuthInterceptors(dio);

    await expectLater(
      dio.post<Map<String, dynamic>>('/auth/login', data: {}),
      throwsA(isA<DioException>()),
    );
    expect(called, false);
    expect(adapter.requests, hasLength(1));
  });

  test('does not retry a request more than once', () async {
    AuthTokenHolder.accessToken = 'stale-token';
    var refreshCalls = 0;
    AuthTokenHolder.onUnauthorized = () async {
      refreshCalls++;
      AuthTokenHolder.accessToken = 'still-bad-token';
      return true;
    };

    final adapter = _ScriptedAdapter([
      _jsonResponse(401, {'message': 'Unauthorized'}),
      _jsonResponse(401, {'message': 'Unauthorized'}),
    ]);

    final dio = Dio(BaseOptions(baseUrl: 'http://example.test'))..httpClientAdapter = adapter;
    addAuthInterceptors(dio);

    await expectLater(
      dio.get<Map<String, dynamic>>('/items'),
      throwsA(isA<DioException>()),
    );
    expect(refreshCalls, 1);
    expect(adapter.requests, hasLength(2));
  });
}
