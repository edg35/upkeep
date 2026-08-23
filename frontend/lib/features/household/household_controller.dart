// features/household/household_controller.dart
import 'package:dio/dio.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/network/extract_error.dart';
import '../auth/auth_controller.dart';
import 'household_repository.dart';

class Household {
  const Household({
    required this.householdId,
    required this.name,
    required this.inviteCode,
    required this.memberCount,
    required this.role,
  });

  final String householdId;
  final String name;
  final String inviteCode;
  final int memberCount;
  final String role; // 'OWNER' | 'MEMBER'

  bool get isOwner => role == 'OWNER';

  factory Household.fromJson(Map<String, dynamic> json) {
    return Household(
      householdId: json['household_id'] as String,
      name: json['name'] as String,
      inviteCode: json['invite_code'] as String,
      memberCount: json['member_count'] as int,
      role: json['role'] as String,
    );
  }
}

class HouseholdState {
  const HouseholdState({
    this.household,
    this.loading = false,
    this.error,
    this.hasLoaded = false,
  });

  /// null = confirmed no household (once [hasLoaded] is true).
  final Household? household;
  final bool loading;
  final String? error;

  /// Distinguishes "not fetched yet" from "fetched, none found".
  final bool hasLoaded;

  HouseholdState copyWith({
    Household? household,
    bool clearHousehold = false,
    bool? loading,
    String? error,
    bool? hasLoaded,
  }) {
    return HouseholdState(
      household: clearHousehold ? null : (household ?? this.household),
      loading: loading ?? this.loading,
      error: error,
      hasLoaded: hasLoaded ?? this.hasLoaded,
    );
  }
}

class HouseholdController extends StateNotifier<HouseholdState> {
  HouseholdController(this._repository) : super(const HouseholdState());

  final HouseholdApi _repository;

  Future<void> loadMine() async {
    state = state.copyWith(loading: true, error: null);
    try {
      final data = await _repository.getMine();
      state = HouseholdState(
        household: data == null ? null : Household.fromJson(data),
        hasLoaded: true,
      );
    } on DioException catch (e) {
      state = state.copyWith(loading: false, error: extractError(e));
    } catch (e) {
      state = state.copyWith(loading: false, error: e.toString());
    }
  }

  Future<bool> create(String name) async {
    state = state.copyWith(loading: true, error: null);
    try {
      await _repository.create(name);
      await loadMine();
      return true;
    } on DioException catch (e) {
      state = state.copyWith(loading: false, error: extractError(e));
      return false;
    } catch (e) {
      state = state.copyWith(loading: false, error: e.toString());
      return false;
    }
  }

  Future<bool> leave() async {
    state = state.copyWith(loading: true, error: null);
    try {
      await _repository.leave();
      state = const HouseholdState(hasLoaded: true);
      return true;
    } on DioException catch (e) {
      state = state.copyWith(loading: false, error: extractError(e));
      return false;
    } catch (e) {
      state = state.copyWith(loading: false, error: e.toString());
      return false;
    }
  }

  /// Clears cached household data on logout so a subsequent login (as a
  /// different account) can't briefly redirect based on the previous
  /// account's household.
  void reset() {
    state = const HouseholdState();
  }
}

final householdControllerProvider =
    StateNotifierProvider<HouseholdController, HouseholdState>((ref) {
  return HouseholdController(ref.watch(householdRepositoryProvider));
});

/// Re-fetches household state whenever auth state flips (login/signup/
/// logout). Mirrors [sessionInitProvider]'s role for household data — the
/// router watches this (via the redirect notifier) to gate startup on a
/// splash screen until it resolves.
final householdInitProvider = FutureProvider<void>((ref) {
  final isAuthenticated =
      ref.watch(authControllerProvider.select((s) => s.isAuthenticated));
  if (!isAuthenticated) {
    return Future.microtask(
      () => ref.read(householdControllerProvider.notifier).reset(),
    );
  }
  // Deferred via microtask: loadMine() synchronously writes to
  // householdControllerProvider before its first await, and Riverpod
  // forbids mutating one provider while another (this one) is still
  // building. Scheduling it a microtask later lets this provider's build
  // finish first.
  return Future.microtask(
    () => ref.read(householdControllerProvider.notifier).loadMine(),
  );
});
