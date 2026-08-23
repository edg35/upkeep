// features/household/household_repository.dart
import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/network/api_client.dart';

abstract class HouseholdApi {
  Future<Map<String, dynamic>?> getMine();
  Future<Map<String, dynamic>> create(String name);
  Future<List<Map<String, dynamic>>> search(String query);
  Future<void> requestToJoin(String householdId);
  Future<Map<String, dynamic>?> getMyJoinRequest();
  Future<void> cancelMyJoinRequest();
  Future<List<Map<String, dynamic>>> getPendingInvitations();
  Future<void> acceptInvitation(String code);
  Future<void> redeemInviteCode(String code);
  Future<List<Map<String, dynamic>>> listJoinRequests();
  Future<void> approveJoinRequest(String requesterId);
  Future<void> declineJoinRequest(String requesterId);
  Future<List<Map<String, dynamic>>> listMembers();
  Future<void> leave();
}

class HouseholdRepository implements HouseholdApi {
  HouseholdRepository(this._dio);
  final Dio _dio;

  /// A "no resource" 200 comes back with an empty body, which dio can't
  /// parse as JSON — `res.data` is `''`, not `null`, in that case.
  Map<String, dynamic>? _asMapOrNull(dynamic data) {
    return data is Map<String, dynamic> ? data : null;
  }

  @override
  Future<Map<String, dynamic>?> getMine() async {
    final res = await _dio.get('/households/me');
    return _asMapOrNull(res.data);
  }

  @override
  Future<Map<String, dynamic>> create(String name) async {
    final res = await _dio.post('/households', data: {'name': name});
    return res.data as Map<String, dynamic>;
  }

  @override
  Future<List<Map<String, dynamic>>> search(String query) async {
    final res = await _dio.get(
      '/households/search',
      queryParameters: {'q': query},
    );
    return (res.data as List).cast<Map<String, dynamic>>();
  }

  @override
  Future<void> requestToJoin(String householdId) {
    return _dio.post(
      '/households/join-requests',
      data: {'household_id': householdId},
    );
  }

  @override
  Future<Map<String, dynamic>?> getMyJoinRequest() async {
    final res = await _dio.get('/households/join-requests/mine');
    return _asMapOrNull(res.data);
  }

  @override
  Future<void> cancelMyJoinRequest() {
    return _dio.delete('/households/join-requests/mine');
  }

  @override
  Future<List<Map<String, dynamic>>> getPendingInvitations() async {
    final res = await _dio.get('/households/invitations/pending');
    return (res.data as List).cast<Map<String, dynamic>>();
  }

  @override
  Future<void> acceptInvitation(String code) {
    return _dio.post('/households/invitations/$code/accept');
  }

  @override
  Future<void> redeemInviteCode(String code) {
    return _dio.post('/households/invite-code/$code/redeem');
  }

  @override
  Future<List<Map<String, dynamic>>> listJoinRequests() async {
    final res = await _dio.get('/households/join-requests');
    return (res.data as List).cast<Map<String, dynamic>>();
  }

  @override
  Future<void> approveJoinRequest(String requesterId) {
    return _dio.post('/households/join-requests/$requesterId/approve');
  }

  @override
  Future<void> declineJoinRequest(String requesterId) {
    return _dio.post('/households/join-requests/$requesterId/decline');
  }

  @override
  Future<List<Map<String, dynamic>>> listMembers() async {
    final res = await _dio.get('/households/members');
    return (res.data as List).cast<Map<String, dynamic>>();
  }

  @override
  Future<void> leave() {
    return _dio.delete('/households/membership');
  }
}

final householdRepositoryProvider = Provider<HouseholdApi>((ref) {
  return HouseholdRepository(ref.watch(dioProvider));
});
