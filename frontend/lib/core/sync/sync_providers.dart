import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../features/categories/category_repository.dart';
import '../../features/items/item_repository.dart';
import '../db/db_providers.dart';
import 'connectivity_provider.dart';
import 'sync_service.dart';
import 'sync_status.dart';

final syncServiceProvider = Provider<SyncService>((ref) {
  return SyncService(
    ref.watch(itemRepositoryProvider),
    ref.watch(categoryRepositoryProvider),
    ref.watch(localItemStoreProvider),
    ref.watch(syncStatusControllerProvider.notifier),
  );
});

final syncStatusProvider = Provider<SyncState>((ref) {
  return ref.watch(syncStatusControllerProvider);
});

/// Kicks off a sync whenever the device regains connectivity. Watched once
/// from the app root (see [UpkeepApp]) so it stays alive for the app's
/// lifetime rather than being torn down between screens.
final connectivitySyncProvider = Provider<void>((ref) {
  ref.listen<AsyncValue<bool>>(onlineChangesProvider, (previous, next) {
    final wasOffline = previous?.valueOrNull == false;
    final isOnlineNow = next.valueOrNull == true;
    if (isOnlineNow && (previous == null || wasOffline)) {
      ref.read(syncServiceProvider).syncNow();
    }
  });
});
