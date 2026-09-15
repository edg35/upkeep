import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final connectivityProvider = Provider<Connectivity>((ref) => Connectivity());

/// Emits `true` whenever the device transitions to having *some* network
/// path (wifi/mobile/ethernet/vpn) — not a guarantee of internet access,
/// just enough signal to justify attempting a sync.
final onlineChangesProvider = StreamProvider<bool>((ref) {
  final connectivity = ref.watch(connectivityProvider);
  return connectivity.onConnectivityChanged.map(
    (results) => results.any((r) => r != ConnectivityResult.none),
  );
});
