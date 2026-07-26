# frontend

Upkeep mobile app, built with Flutter (Riverpod for state, go_router for navigation).

## Getting Started

Install dependencies:

```
flutter pub get
```

### Run on iOS Simulator

```
open -a Simulator
flutter run
```

### Run on Android emulator

```
flutter emulators --launch <emulator_id>
flutter run
```

Use `flutter emulators` to list available emulators and find `<emulator_id>`.

### Other targets

```
flutter run -d chrome   # web
flutter run -d macos    # macOS desktop
```

## Testing

```
flutter analyze
flutter test
```

## Notes

- The API client (`lib/core/network/api_client.dart`) points at `http://10.0.2.2:3000`, which is the Android emulator's alias for the host machine's `localhost`. If testing against a local backend on iOS Simulator, web, or macOS, use `http://localhost:3000` instead.
