import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'household_repository.dart';

/// The current household's member list (`{user_id, name, role}` maps), used
/// by the add-item form's assignee picker.
final householdMembersProvider = FutureProvider<List<Map<String, dynamic>>>((
  ref,
) {
  return ref.watch(householdRepositoryProvider).listMembers();
});
