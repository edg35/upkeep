import 'package:dio/dio.dart';

class DeviceApi {
  DeviceApi(this._dio);
  final Dio _dio;

  Future<void> register(String token, String platform) async {
    await _dio.post('/devices', data: {'token': token, 'platform': platform});
  }

  Future<void> unregister(String token) async {
    await _dio.delete('/devices', data: {'token': token});
  }
}
