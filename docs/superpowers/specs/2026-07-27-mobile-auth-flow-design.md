# Mobile auth flow: screens, theme, secure token storage

Issue: #9 (mobile-auth-flow-signup-login-screens)

## Scope

- Restyle welcome/login/signup screens to match the supplied wireframes.
- Apply the "Upkeep" design system v0.1 color palette + typography to `AppTheme`.
- Persist auth tokens on-device with `flutter_secure_storage`, and use that
  storage to restore a session on cold start and to survive access-token
  expiry during a session.

Out of scope (separate issues): household onboarding after signup, real
Google OAuth, forgot-password flow, terms/privacy page content. These appear
in the wireframe but are rendered inert/disabled for now.

## Theme (`core/theme/app_theme.dart`)

Palette constants, matching the design system swatch:

| Name  | Hex     | Role |
|-------|---------|------|
| Ink   | #12312A | Primary text, dark hero background |
| Forest| #1D4B3B | Primary buttons, hero background |
| Sage  | #4CA771 | Focus/accent, checkboxes, links |
| Mint  | #CBE7C8 | Light accent fill |
| Pale  | #E9F2E4 | Light accent fill |
| Paper | #F5F1E8 | Scaffold background |
| Card  | #FFFDF7 | Input/card surfaces |
| Clay  | #D98F4E | Money accent (reserved for bills/items screens) |
| Rose  | #C4685C | Error / overdue accent |
| Muted | #74857A | Secondary/subtext |

`ColorScheme.light()` built from these: `primary` = Forest, `onPrimary` =
Paper, `secondary` = Sage, `surface` = Card, `background`-equivalent
(scaffold) = Paper, `error` = Rose, `tertiary` = Clay, `onSurfaceVariant`/
muted text = Muted.

`AppTheme.dark()` returns the same `ThemeData` as `light()` — no dark
palette exists in v0.1, revisit when one is designed.

Typography via `google_fonts`: Poppins for everything except hand-drawn
asides, which use Caveat. Material's `TextTheme` slots are populated with
the closest Poppins equivalents (for default widget chrome: AppBar, buttons,
etc). In addition, a small `AppTypography` class exposes the design system's
own named scale directly, since it doesn't map 1:1 onto Material's slots:

```dart
class AppTypography {
  static TextStyle get display; // Poppins 32/600
  static TextStyle get title;   // Poppins 20/600
  static TextStyle get row;     // Poppins 15/500
  static TextStyle get body;    // Poppins 14/400
  static TextStyle get meta;    // Poppins 12/500
  static TextStyle get aside;   // Caveat 20
}
```

Screens use `AppTypography.*` directly for anything that isn't a stock
Material widget default.

## Secure token storage (`core/storage/secure_token_storage.dart`)

Thin wrapper around `flutter_secure_storage`:

```dart
class SecureTokenStorage {
  Future<({String access, String refresh})?> read();
  Future<void> write({required String access, required String refresh});
  Future<void> clear();
}
final secureTokenStorageProvider = Provider((ref) => SecureTokenStorage(...));
```

Two keys: `access_token`, `refresh_token`. No plaintext fallback.

## Auth session wiring

**`AuthRepository`**: add `refresh(String refreshToken)` hitting
`POST /auth/refresh`, returning a new `{accessToken, refreshToken}` pair
(mirrors `login`/`signup`).

**`AuthController`**:
- `login(..., {required bool keepSignedIn})`: on success, always updates
  in-memory state (`AuthTokenHolder.accessToken`); additionally persists to
  `SecureTokenStorage` only if `keepSignedIn` is true. If false, any
  previously-stored tokens are cleared so a stale "remembered" session
  doesn't linger.
- `signup(...)`: always persists to secure storage (no checkbox on that
  screen — creating an account implies staying signed in).
- `logout()`: clears in-memory state and calls `SecureTokenStorage.clear()`
  in addition to the existing server-side revoke call.
- `restoreSession()`: reads `SecureTokenStorage`. If tokens exist, calls
  `_repository.refresh(refreshToken)`; on success, updates state and
  re-persists the rotated pair (backend rotates refresh tokens on use); on
  failure (expired/revoked), clears storage and leaves state unauthenticated.
  Returns nothing meaningful to callers — callers just re-read
  `authControllerProvider` state afterward.
- Registers a static callback, `AuthTokenHolder.onUnauthorized`, at
  construction time (same decoupling trick `AuthTokenHolder` already uses to
  avoid `api_client.dart` importing the auth feature). This callback:
  attempts `restoreSession()`-style refresh using the currently held refresh
  token, returns `true`/`false` for success.

**`api_client.dart`**: existing request interceptor unchanged. Add a
response-error interceptor: on a `401` from any non-`/auth/*` endpoint, call
`AuthTokenHolder.onUnauthorized?.call()`. If it resolves `true`, retry the
original request once with the refreshed access token. If `false`/absent,
propagate the error as-is (screens already show `authState.error`; a 401
bubbling up after a failed refresh effectively logs the user out since
`AuthController` will have cleared state during the failed refresh attempt).

**`app.dart`**: wrap the existing `MaterialApp.router` build behind a
`sessionInitProvider` (`FutureProvider` that calls
`authControllerProvider.notifier.restoreSession()` once). While loading,
render a minimal splash (`Scaffold` on Paper background with a centered
spinner, no navigation). Once resolved, build the router as today — initial
route logic already lands authenticated users needing a destination; router
routes are unchanged (`/`, `/login`, `/signup`, `/dashboard`, ...), but I'll
adjust `initialLocation` to be `/dashboard` when `authControllerProvider`
reports authenticated at that point, `/` otherwise.

## Screens

Shared small widgets under `features/auth/widgets/`:
- `AuthPillButton` — filled Forest pill button with loading spinner state
  (replaces the ad hoc `FilledButton` + `CircularProgressIndicator` in each
  screen today).
- `AuthTextField` — Card-surface rounded text field matching the wireframe
  styling (label above, Sage focus border).
- `AuthBackButton` — circular back chevron button used on login/signup.

**`welcome_screen.dart`**: Forest full-bleed background. Decorative
placeholder panel standing in for the "hand-drawn house + plants"
illustration (no real asset provided — a simple striped/hatched
`CustomPaint` or gradient container, easily swapped for a real asset image
later). Headline "Welcome home.", body copy, Caveat-styled aside line, white
"Log in" pill button, "Don't have an account? Sign up" row.

**`login_screen.dart`**: `AuthBackButton`, "Welcome back" title + subtext,
email `AuthTextField`, password `AuthTextField` with a show/hide `Icon`
toggle (local `bool _obscure` state), "Keep me signed in" `Checkbox` (Sage
fill when checked) paired with a disabled "Forgot password?" text (styled
muted, `onTap: null` — no backend support), primary pill "Log in" button
wired to `login(..., keepSignedIn: _keepSignedIn)`, divider row, disabled
"Continue with Google" outlined button, bottom "Sign up" link.

**`signup_screen.dart`**: `AuthBackButton`, "Make an account" title +
subtext, name/email/password/confirm-password `AuthTextField`s. Password
field renders a 3-segment strength meter driven by a pure function
`passwordStrength(String) -> 0..3` (heuristic: length ≥ 8, contains a digit
or symbol, contains mixed case — each satisfied criterion fills one
segment). Confirm-password field shows a green check icon once its value
equals the password field's current value. Static (non-interactive) "I
agree to the terms and privacy policy" text with a `Checkbox`; the
"Create account" button is disabled until that checkbox is checked. On
submit, calls `signup(...)` (always persists per the session wiring above).

## Error handling

Unchanged pattern: `AuthState.error` (already extracted from Dio responses
in `AuthController._extractError`) is displayed inline under the form
fields on both screens. `restoreSession()` failures are silent (expected —
e.g. first launch, or an expired 30-day refresh token) and simply leave the
user at the welcome screen; no error surfaced for that case.

## Testing

- Unit test `passwordStrength()` heuristic function directly.
- Unit test `AuthController`: login persists/doesn't persist based on
  `keepSignedIn`; signup always persists; `restoreSession()` success and
  failure paths; `logout()` clears storage. Use a fake `AuthRepository` and
  an in-memory fake of `SecureTokenStorage` (no real keychain access in
  tests).
- Existing `test/widget_test.dart` ("App starts on the dashboard tab")
  already fails on `master` — it expects `Dashboard` text at startup, but
  `initialLocation` is `/` (Welcome). Fix it as part of this work: pump
  `UpkeepApp`, let the splash resolve, and assert the welcome screen (not
  dashboard) renders for a logged-out session.

## Dependencies

Add to `pubspec.yaml`: `flutter_secure_storage`, `google_fonts`.
