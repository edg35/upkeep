import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/network/jwt_payload.dart';
import '../auth/auth_controller.dart';
import 'household_controller.dart';
import 'household_repository.dart';

/// The signed-in user's id, read from the access token's `sub` claim.
final currentUserIdProvider = Provider<String?>((ref) {
  final token = ref.watch(authControllerProvider.select((s) => s.accessToken));
  if (token == null) return null;
  return decodeJwtPayload(token)?['sub'] as String?;
});

/// The signed-in user's display name, resolved by matching [currentUserIdProvider]
/// against the current household's member list.
final currentMemberNameProvider = FutureProvider<String?>((ref) async {
  final userId = ref.watch(currentUserIdProvider);
  final household = ref.watch(householdControllerProvider).household;
  if (userId == null || household == null) return null;

  final members = await ref.watch(householdRepositoryProvider).listMembers();
  for (final member in members) {
    if (member['user_id'] == userId) return member['name'] as String?;
  }
  return null;
});
