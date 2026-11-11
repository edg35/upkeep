import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'app.dart';
import 'core/push/push_providers.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  if (pushEnabled) {
    try {
      // TODO(task 9): pass DefaultFirebaseOptions.currentPlatform.
      await Firebase.initializeApp();
    } catch (e) {
      debugPrint('Firebase init failed, push disabled: $e');
    }
  }
  runApp(const ProviderScope(child: UpkeepApp()));
}
