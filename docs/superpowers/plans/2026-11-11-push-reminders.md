# Push Reminders (Daily Digest via FCM) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** At 7 AM Eastern, send each person one push notification ("For {household}: you have n tasks…") covering their due reminders. Delivery goes through FCM to every registered device. The Flutter app registers device tokens. The API gets deploy config for Railway.

**Architecture:** The `Reminder` rows and the `@nestjs/schedule` cron already exist. Recipient selection moves to assignees, with all members as the fallback. The sweep becomes a per-user digest. A new `notification` module owns device tokens and the FCM sender. The sender does nothing when Firebase isn't configured. On Flutter, a `PushNotificationService` sits behind a `PushMessaging` interface, and everything Firebase-related is gated on `--dart-define=PUSH_ENABLED=true`, so the app builds and tests without Firebase config.

**Tech Stack:** NestJS 11, Prisma 6 (Postgres), `@nestjs/schedule`, `firebase-admin`, Jest. On Flutter: Riverpod 2, Dio, `firebase_core`, and `firebase_messaging`. Hosting is Railway.

**Spec:** `docs/superpowers/specs/2026-11-11-push-reminders-design.md`

## Global Constraints

- Cron: `@Cron('0 7 * * *', { timeZone: 'America/New_York' })`.
- Sweep window: `remind_at <= end of today in America/New_York` (23:59:59.999 ET), **not** `<= now`.
- Title: `For {household name}`. Body: `You have {n} task{s} to take care of today. {phrase}`. Use "1 task" with no "s".
- Recipients: the item's assignees who are still household members. If none are, every household member.
- Every reminder included in a user's digest gets `sent_at` set, even if delivery fails or the user has no devices.
- `NotificationService` must never throw when `FIREBASE_SERVICE_ACCOUNT` is unset. It logs and returns instead.
- Delete a token when FCM returns `messaging/registration-token-not-registered` or `messaging/invalid-registration-token`.
- Android notification channel id: `reminders`. APNs sound: `default`.
- Run the API as a single Railway replica, because the cron runs in-process.
- Flutter: no Firebase call may run unless `const bool.fromEnvironment('PUSH_ENABLED')` is true. The app and all existing tests must work without `firebase_options.dart`.
- Logout must still succeed if unregistering the device fails.

## Review Focus

1. **Someone with several due items, or two unsent reminders for the same item (e.g. overdue plus new), gets exactly one push.** n counts distinct items. Test: Task 5, `counts distinct items and sends one digest per user`.
2. **A reminder at 3 PM ET today is included in the 7 AM digest. One at 00:30 ET tomorrow is not, including on a DST-change day.** Test: Task 5, `endOfDayInZone` boundary tests.
3. **One user's FCM send throws.** The other users still get their digest, and every user's reminders are marked sent. Test: Task 5, `continues after a send failure`.
4. **A phone that logged in as user A logs in as user B.** The token now belongs to B, and A no longer gets B's phone's pushes. Test: Task 3, `reassigns an existing token to the new user`.
5. **Logging out while the API is unreachable** still clears the session. Test: Task 8, `logout succeeds when unregister throws`.

---

### Task 1: Recipients = current assignees, fallback to members

**Files:**
- Modify: `backend/src/reminder/reminder.service.ts`
- Modify: `backend/src/reminder/reminder.module.ts` (drop the `HouseholdModule` import)
- Test: `backend/src/reminder/reminder.service.spec.ts`

**Interfaces:**
- Produces (signature unchanged): `syncForItem(tx, itemId, householdId, nextDueDate, leadTimeDays): Promise<void>`
- Produces: `resyncItem(tx: Prisma.TransactionClient, itemId: string): Promise<void>`. It loads the item with its schedule. If the item is deleted or has no schedule, it only deletes the unsent reminders. Otherwise it calls `syncForItem` with the item's `household_id`, `schedule.next_due_date`, and `schedule.lead_time_days`.
- `ReminderService` no longer depends on `HouseholdService`. Member IDs are read via `tx.householdMember.findMany({ where: { household_id } })`, which removes the module cycle Task 2 would otherwise create.

- [ ] **Step 1: Update spec mocks and write the failing tests**

The mock `tx` gains `itemAssignee.findMany`, `householdMember.findMany`, and `item.findUnique`. Remove `householdService` from the constructor call. Tests:
- `targets assignees who are current members`: assignees `[u1, u3]`, members `[u1, u2]` → `createMany` called with `data` for `u1` only, plus `skipDuplicates: true`.
- `falls back to all members when no assignee is a current member`: assignees `[u3]`, members `[u1, u2]` → rows for `u1, u2`.
- `falls back to all members when item has no assignees` → rows for `u1, u2`.
- Update the existing `lead_time_days unset` test: `householdMember.findMany` is not called.
- `resyncItem deletes unsent reminders and creates none for a deleted item`: `item.findUnique` returns `{ deleted_at: new Date(), schedule: {...} }` → `deleteMany` called, `createMany` not called.
- `resyncItem syncs from the stored schedule`: returns `{ household_id: 'h1', deleted_at: null, schedule: { next_due_date: D, lead_time_days: 2 } }` → `createMany` called with `remind_at = D - 2 days`.

- [ ] **Step 2: Run, verify they fail**

Run: `cd backend && npx jest src/reminder/reminder.service.spec.ts`
Expected: FAIL. The assignee and resync tests fail, and the constructor's arity changes.

- [ ] **Step 3: Implement the changes in `reminder.service.ts`, and remove `HouseholdModule` from `reminder.module.ts` imports**

- [ ] **Step 4: Run, verify pass**

Run: `cd backend && npx jest src/reminder && npx tsc --noEmit -p tsconfig.json`
Expected: PASS, with no type errors.

- [ ] **Step 5: Commit**

```bash
git add backend/src/reminder
git commit -m "feat(reminder): target current assignees with member fallback"
```

---

### Task 2: Stop stale reminders (deleted items, departed members)

**Files:**
- Modify: `backend/src/item/item.service.ts` (`remove`)
- Modify: `backend/src/household/household.service.ts` (`leave`)
- Modify: `backend/src/household/household.module.ts` (import `ReminderModule`)
- Test: `backend/src/item/item.service.spec.ts`, plus a new `backend/src/household/household.service.spec.ts` covering `leave` only

**Interfaces:**
- Consumes: `ReminderService.resyncItem(tx, itemId)` (Task 1).

- [ ] **Step 1: Write failing tests**

- item spec, `remove deletes unsent reminders for the item`: `remove` runs in a `$transaction`. `tx.reminder.deleteMany` called with `{ where: { item_id: 'i1', sent_at: null } }`, and `tx.item.update` sets `deleted_at`.
- household spec, `leave removes assignments and resyncs affected items`: membership `{ household_id: 'h1', role: 'MEMBER' }`. `tx.itemAssignee.findMany` returns `[{ item_id: 'i1' }, { item_id: 'i2' }]`. Expect, in this order:
  1. `tx.itemAssignee.deleteMany({ where: { user_id: 'u1', item: { household_id: 'h1' } } })`
  2. `tx.reminder.deleteMany({ where: { user_id: 'u1', sent_at: null } })`
  3. `tx.householdMember.delete({ where: { user_id: 'u1' } })`
  4. `reminderService.resyncItem(tx, 'i1')` and `(tx, 'i2')`
  Check the order with `mock.invocationCallOrder`.
- household spec: the owner-with-other-members guard still throws `ConflictException` (existing behavior).

- [ ] **Step 2: Run, verify fail**

Run: `cd backend && npx jest src/item/item.service.spec.ts src/household`
Expected: FAIL.

- [ ] **Step 3: Implement**

Wrap `remove` in `$transaction`. In `leave`, keep the existing checks and run the four steps above inside one `$transaction`. Membership must be deleted before the resync, so the fallback sees the current members. Inject `ReminderService` into `HouseholdService`.

- [ ] **Step 4: Run, verify pass**

Run: `cd backend && npx jest && npx tsc --noEmit -p tsconfig.json`
Expected: PASS. Nest has no circular-dependency error (`ReminderModule` no longer imports `HouseholdModule`).

- [ ] **Step 5: Commit**

```bash
git add backend/src/item backend/src/household
git commit -m "fix(reminder): clear unsent reminders on item delete and member leave"
```

---

### Task 3: Device token model and `/devices` endpoints

**Files:**
- Modify: `backend/prisma/schema.prisma` (`DevicePlatform` enum, `DeviceToken` model exactly as in the spec's "Device tokens" section, `User.deviceTokens DeviceToken[]`)
- Create: migration via `npx prisma migrate dev --name add_device_tokens`
- Create: `backend/src/notification/notification.module.ts`
- Create: `backend/src/notification/device-token.service.ts`
- Create: `backend/src/notification/device.controller.ts`
- Create: `backend/src/notification/dto/register-device.dto.ts`, `backend/src/notification/dto/unregister-device.dto.ts`
- Modify: `backend/src/app.module.ts` (add `NotificationModule`)
- Modify: `backend/test/helpers/cleanup.ts` (delete `deviceToken` and `itemAssignee` before `user` and `item`)
- Test: `backend/src/notification/device-token.service.spec.ts`, `backend/test/device.e2e-spec.ts`

**Interfaces:**
- Produces: `DeviceTokenService.register(userId: string, token: string, platform: DevicePlatform): Promise<void>`. This is an upsert keyed by `token`. On update it sets `user_id`, `platform`, and `last_seen_at: new Date()`.
- Produces: `DeviceTokenService.unregister(userId: string, token: string): Promise<void>`, implemented as `deleteMany({ where: { token, user_id } })`.
- Produces: `DeviceTokenService.tokensFor(userId: string): Promise<string[]>`
- Produces: `DeviceTokenService.removeTokens(tokens: string[]): Promise<void>`
- HTTP: `POST /devices` with body `{ token: string (IsString, MaxLength 4096), platform: 'IOS' | 'ANDROID' }` → 204. `DELETE /devices` with body `{ token }` → 204. Both use `@UseGuards(JwtAuthGuard)` and `@CurrentUser()` (`user.user_id`). There is no household guard, so a user without a household can still register.
- `NotificationModule` exports `DeviceTokenService` (Task 4 adds `NotificationService` to it).

- [ ] **Step 1: Schema + migration**

Run: `cd backend && npx prisma migrate dev --name add_device_tokens` (local Postgres via `docker compose up -d`).
Expected: a new migration folder, and the client is regenerated into `backend/generated`.

- [ ] **Step 2: Write failing tests**

- unit `reassigns an existing token to the new user`: `register('u2', 'tok', 'IOS')` → `prisma.deviceToken.upsert` with `where: { token: 'tok' }`, `create: { token: 'tok', user_id: 'u2', platform: 'IOS' }`, and `update` containing `user_id: 'u2'`.
- unit `unregister only deletes the caller's token` → `deleteMany({ where: { token: 'tok', user_id: 'u1' } })`.
- e2e:
  - `POST /devices` registers (204, row exists).
  - Re-posting the same token as a second user moves the row to that user.
  - `DELETE /devices` by a non-owner leaves the row in place.
  - `DELETE /devices` by the owner removes it.
  - Requests without a token → 401.
  - `platform: 'WEB'` → 400.

- [ ] **Step 3: Run, verify fail**

Run: `cd backend && npx jest src/notification && npm run test:e2e -- device`
Expected: FAIL, because the module doesn't exist yet.

- [ ] **Step 4: Implement the service, DTOs, controller (`@HttpCode(204)`), and module, then register the module in `AppModule`**

- [ ] **Step 5: Run, verify pass**

Run: `cd backend && npx jest && npm run test:e2e`
Expected: PASS. The existing e2e suites still pass with the new cleanup order.

- [ ] **Step 6: Commit**

```bash
git add backend/prisma backend/generated backend/src/notification backend/src/app.module.ts backend/test
git commit -m "feat(notification): device token registration endpoints"
```

---

### Task 4: FCM `NotificationService`

**Files:**
- Create: `backend/src/notification/fcm.provider.ts`
- Move: `backend/src/reminder/notification.service.ts` → `backend/src/notification/notification.service.ts` (rewrite)
- Modify: `backend/src/notification/notification.module.ts`, `backend/src/reminder/reminder.module.ts` (import `NotificationModule`, and drop the local `NotificationService` provider)
- Modify: `backend/package.json` (add `firebase-admin`)
- Test: `backend/src/notification/notification.service.spec.ts`

**Interfaces:**
- Produces: `export const FCM_MESSAGING = 'FCM_MESSAGING'`. This is a factory provider that returns `getMessaging(initializeApp({ credential: cert(JSON.parse(env.FIREBASE_SERVICE_ACCOUNT)) }))` when the env var is set, and otherwise `null`. If the JSON doesn't parse, log the error and return `null`. Don't crash the boot.
- Produces: `export interface DigestMessage { title: string; body: string }`
- Produces: `NotificationService.sendDigest(userId: string, message: DigestMessage): Promise<void>`. Constructor: `(@Inject(FCM_MESSAGING) messaging: Messaging | null, devices: DeviceTokenService)`.
- Consumes: `DeviceTokenService.tokensFor` and `removeTokens` (Task 3).

- [ ] **Step 1: `npm i firebase-admin` in `backend/`**

- [ ] **Step 2: Write failing tests**

- `logs and returns when messaging is null`: construct with `null`. `sendDigest` resolves, and `devices.tokensFor` is not called.
- `does nothing when the user has no tokens`: `tokensFor` → `[]`, and `sendEachForMulticast` is not called.
- `sends to all tokens with android channel and apns sound`: tokens `['a','b']` → `sendEachForMulticast` called with `expect.objectContaining({ tokens: ['a','b'], notification: { title, body }, android: { notification: { channelId: 'reminders' } }, apns: { payload: { aps: { sound: 'default' } } } })`.
- `prunes unregistered and invalid tokens`: the response `responses` holds `[{ success: true }, { success: false, error: { code: 'messaging/registration-token-not-registered' } }, { success: false, error: { code: 'messaging/invalid-registration-token' } }, { success: false, error: { code: 'messaging/internal-error' } }]` for tokens `['a','b','c','d']` → `removeTokens(['b','c'])`.

- [ ] **Step 3: Run, verify fail**

Run: `cd backend && npx jest src/notification/notification.service.spec.ts`
Expected: FAIL.

- [ ] **Step 4: Implement the provider, the service, and the module wiring**

`sendDigest` may throw when the FCM call itself rejects. Task 5 catches that per user.

- [ ] **Step 5: Run, verify pass**

Run: `cd backend && npx jest && npx tsc --noEmit -p tsconfig.json && npm run test:e2e`
Expected: PASS. e2e boots without `FIREBASE_SERVICE_ACCOUNT`.

- [ ] **Step 6: Commit**

```bash
git add backend/package.json backend/package-lock.json backend/src/notification backend/src/reminder
git commit -m "feat(notification): send FCM digests and prune dead tokens"
```

---

### Task 5: Digest sweep + 7 AM ET cron

**Files:**
- Create: `backend/src/reminder/digest.util.ts`
- Modify: `backend/src/reminder/reminder.service.ts` (`sweepDue`)
- Modify: `backend/src/reminder/reminder-sweep.scheduler.ts`
- Test: `backend/src/reminder/digest.util.spec.ts`, `backend/src/reminder/reminder.service.spec.ts`

**Interfaces:**
- Produces: `endOfDayInZone(now: Date, timeZone: string): Date`. Returns the last millisecond of `now`'s calendar day in `timeZone`.
- Produces: `buildDigest(householdName: string, taskCount: number, phrase: string): DigestMessage`
- Produces: `ENCOURAGING_PHRASES: readonly string[]` (about 8 short, warm lines; the builder writes them) and `pickPhrase(random?: () => number): string`
- Produces: `sweepDue(now?: Date): Promise<void>` (defaults to `new Date()`)
- Consumes: `NotificationService.sendDigest` (Task 4).

`endOfDayInZone` algorithm (no date library):
1. Get the Y/M/D of `now` in `timeZone` via `Intl.DateTimeFormat('en-US', { timeZone, year, month, day })` `formatToParts`.
2. Take the naive UTC instant of the *next* day at 00:00, `Date.UTC(y, m-1, d+1)`.
3. Compute the zone's offset at that instant: format it in `timeZone` with hour/minute/second (`hourCycle: 'h23'`), rebuild those parts with `Date.UTC`, and subtract the instant from that.
4. Next local midnight = naive − offset. Return that minus 1 ms.

- [ ] **Step 1: Write failing util tests**

- `endOfDayInZone`:
  - `2026-11-11T12:00Z` (7 AM EST) → `2026-11-12T04:59:59.999Z`.
  - `2026-07-01T11:00Z` (7 AM EDT) → `2026-07-02T03:59:59.999Z`.
  - DST end day `2026-11-01T12:00Z` → `2026-11-02T04:59:59.999Z`.
  - `2026-11-12T04:30Z` (11:30 PM ET on the 11th) → `2026-11-12T04:59:59.999Z`.
- `buildDigest('The Green House', 3, 'Small wins!')` → `{ title: 'For The Green House', body: 'You have 3 tasks to take care of today. Small wins!' }`. Count 1 → `'You have 1 task to take care of today. Small wins!'`.
- `pickPhrase(() => 0)` returns `ENCOURAGING_PHRASES[0]`, and every phrase is non-empty.

- [ ] **Step 2: Write failing sweep tests** (`prisma.reminder.findMany`, `prisma.reminder.updateMany`, `notificationService.sendDigest` mocked)

- `queries unsent reminders through end of today ET for live items and current members`: `sweepDue(new Date('2026-11-11T12:00:00Z'))` → `findMany` where it includes `sent_at: null`, `remind_at: { lte: new Date('2026-11-12T04:59:59.999Z') }`, `item: { deleted_at: null }`, and a membership filter on `user` matching the item's household. Prisma can't compare two columns in a relation filter, so either filter `user.memberships.some` without a household constraint and then drop rows in code where `reminder.user.memberships[0]?.household_id !== reminder.item.household_id`, or include both and filter in code. Assert on whichever the implementation picks, and add a test that a mismatched row gets no send.
- `counts distinct items and sends one digest per user`: rows u1/i1, u1/i1 (a second remind_at), u1/i2, u2/i1, all in household "Home" → `sendDigest` called twice. u1's body starts with `You have 2 tasks`, u2's with `You have 1 task `. `updateMany` called for u1 with all 3 reminder ids and for u2 with 1.
- `continues after a send failure`: `sendDigest` rejects for u1 → u2 still sent, and `updateMany` is called for both u1 and u2.
- `does nothing when there are no due reminders` (keep the existing test).

- [ ] **Step 3: Run, verify fail**

Run: `cd backend && npx jest src/reminder`
Expected: FAIL.

- [ ] **Step 4: Implement `digest.util.ts` and the new `sweepDue`, and change the scheduler to `@Cron('0 7 * * *', { timeZone: 'America/New_York' })`**

Per user, in a try/catch: build and send, then in `finally` run `updateMany({ where: { reminder_id: { in: ids } }, data: { sent_at: now } })`. Errors get logged with the user id.

- [ ] **Step 5: Run, verify pass**

Run: `cd backend && npx jest && npx tsc --noEmit -p tsconfig.json && npm run lint`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add backend/src/reminder
git commit -m "feat(reminder): daily per-user digest at 7am ET"
```

---

### Task 6: Manual sweep trigger + Railway deploy config

**Files:**
- Create: `backend/src/scripts/run-sweep.ts`
- Modify: `backend/package.json` (script `"sweep": "node dist/scripts/run-sweep.js"`, run after `npm run build`)
- Create: `backend/railway.json`
- Modify: `backend/README.md` (Deploy section)

**Interfaces:**
- Consumes: `ReminderService.sweepDue()` (Task 5).

- [ ] **Step 1: Write `run-sweep.ts`**

It runs `NestFactory.createApplicationContext(AppModule)`, then `app.get(ReminderService).sweepDue()`, then `app.close()`. There's no HTTP endpoint, so nothing is reachable in production.

- [ ] **Step 2: Verify it locally**

Run: `cd backend && npm run build && npm run sweep`
Expected: exits 0. With a seeded due reminder and no Firebase env, it logs the would-send line, and the row's `sent_at` is set.

- [ ] **Step 3: Write `railway.json`**

```json
{
  "$schema": "https://railway.com/railway.schema.json",
  "build": { "buildCommand": "npx prisma generate && npm run build" },
  "deploy": {
    "startCommand": "npx prisma migrate deploy && npm run start:prod",
    "numReplicas": 1,
    "restartPolicyType": "ON_FAILURE"
  }
}
```

The build regenerates the Prisma client on Linux, which replaces the committed darwin engine.

- [ ] **Step 4: README Deploy section**

Cover these points:
- The Railway root directory is `backend`.
- Add a Postgres service, and the API service reads its `DATABASE_URL`.
- Required env vars: `DATABASE_URL`, the JWT secrets (list the names the auth module actually reads from `process.env`), and `FIREBASE_SERVICE_ACCOUNT` (single-line JSON; leave it unset to disable push).
- **Keep exactly one replica**, because the cron is in-process.
- `npm run sweep` triggers a digest by hand.

- [ ] **Step 5: Verify a Linux build works**

Run: `cd backend && docker run --rm -v "$PWD":/app -w /app node:22 sh -c "npm ci && npx prisma generate && npm run build"`
Expected: success. (If Docker isn't available, record that this check was skipped. The first Railway deploy is then the check.) Afterwards, restore `generated/` with `git checkout backend/generated` so the darwin engine stays committed.

- [ ] **Step 6: Commit**

```bash
git add backend/src/scripts backend/package.json backend/railway.json backend/README.md
git commit -m "chore: railway deploy config and manual sweep script"
```

---

### Task 7: Flutter: API base URL, device API, `PushNotificationService`

**Files:**
- Modify: `frontend/lib/core/network/api_client.dart` (`_baseUrl` reads `const String.fromEnvironment('API_BASE_URL')` first and falls back to the current logic)
- Modify: `frontend/pubspec.yaml` (add `firebase_core`, `firebase_messaging`)
- Create: `frontend/lib/core/push/push_messaging.dart`
- Create: `frontend/lib/core/push/device_api.dart`
- Create: `frontend/lib/core/push/push_notification_service.dart`
- Create: `frontend/lib/core/push/push_providers.dart`
- Test: `frontend/test/core/push/push_notification_service_test.dart`

**Interfaces:**
- Produces: `abstract class PushMessaging { Future<bool> requestPermission(); Future<String?> getToken(); Stream<String> get onTokenRefresh; Future<void> deleteToken(); Future<void> enableForegroundPresentation(); }`. Implementations: `FirebasePushMessaging` wraps `FirebaseMessaging.instance` (`requestPermission` returns true for `authorized` or `provisional`). `NoopPushMessaging` returns false or null and an empty stream.
- Produces: `class DeviceApi { DeviceApi(Dio dio); Future<void> register(String token, String platform); Future<void> unregister(String token); }`. It hits `POST /devices` and `DELETE /devices` with `data: {'token': …}`. `platform` is `'IOS'` or `'ANDROID'`.
- Produces: `class PushNotificationService { PushNotificationService(PushMessaging messaging, DeviceApi api, {required String platform}); Future<void> onAuthenticated(); Future<void> onBeforeLogout(); void dispose(); }`
  - `onAuthenticated`: request permission. If denied, stop. Otherwise enable foreground presentation, get the token, `register` it, and subscribe to `onTokenRefresh` → `register`. Calling it twice must not double-subscribe.
  - `onBeforeLogout`: get the token. If there is one, `unregister` it, then `deleteToken`, and cancel the subscription. Errors are caught and swallowed.
- Produces: `pushEnabled = const bool.fromEnvironment('PUSH_ENABLED')`. `pushMessagingProvider` returns `FirebasePushMessaging` if `pushEnabled`, otherwise `NoopPushMessaging`. `pushNotificationServiceProvider` passes `Platform.isIOS ? 'IOS' : 'ANDROID'`.

- [ ] **Step 1: `flutter pub add firebase_core firebase_messaging`**

- [ ] **Step 2: Write failing tests** with a hand-written `FakePushMessaging` and `FakeDeviceApi`:
- `registers token after permission granted`
- `does not register when permission denied`
- `re-registers on token refresh`
- `onAuthenticated twice subscribes once` (one refresh event → one extra register)
- `onBeforeLogout unregisters then deletes token`
- `onBeforeLogout swallows unregister errors`

- [ ] **Step 3: Run, verify fail**

Run: `cd frontend && flutter test test/core/push`
Expected: FAIL.

- [ ] **Step 4: Implement the files listed above**

- [ ] **Step 5: Run, verify pass**

Run: `cd frontend && flutter test && flutter analyze`
Expected: all tests pass, and analyze has no new issues.

- [ ] **Step 6: Commit**

```bash
git add frontend/pubspec.yaml frontend/pubspec.lock frontend/lib/core frontend/test/core/push
git commit -m "feat(mobile): push notification service and device registration"
```

---

### Task 8: Flutter: wire push into startup, auth, and logout

**Files:**
- Modify: `frontend/lib/main.dart` (when `pushEnabled`: `WidgetsFlutterBinding.ensureInitialized(); await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform)`, wrapped in try/catch. On failure, log it and continue with push off.)
- Modify: `frontend/lib/features/auth/auth_controller.dart` (add an optional `beforeLogout` callback, awaited inside a try/catch **before** the state is cleared in `logout()`. The provider passes `() => ref.read(pushNotificationServiceProvider).onBeforeLogout()`.)
- Modify: `frontend/lib/app.dart` (`ref.listen(authControllerProvider.select((s) => s.isAuthenticated), …)`. On a change to `true`, call `onAuthenticated()`. Use `fireImmediately: true` so a restored session registers too.)
- Modify: `frontend/android/app/src/main/AndroidManifest.xml` (meta-data `com.google.firebase.messaging.default_notification_channel_id` = `reminders` and `com.google.firebase.messaging.default_notification_icon` = `@drawable/ic_notification`)
- Create: `frontend/android/app/src/main/res/drawable/ic_notification.xml` (a white monochrome vector placeholder. Leave a comment saying to replace it with the logo glyph.)
- Modify: `frontend/android/app/src/main/kotlin/com/example/frontend/MainActivity.kt`. In `onCreate`, on API 26+, create a `NotificationChannel("reminders", "Reminders", IMPORTANCE_DEFAULT)`. FCM won't create a named channel on its own, and it falls back to a generic one if the channel is missing.
- Test: `frontend/test/features/auth/auth_controller_test.dart` (extend the existing file or create it)

**Interfaces:**
- Consumes: `pushNotificationServiceProvider`, `pushEnabled`, `PushNotificationService.onAuthenticated` / `onBeforeLogout` (Task 7).
- `main.dart` can't import `firebase_options.dart` until Task 9 generates it. Until then, `main.dart` calls `Firebase.initializeApp()` without options inside the `pushEnabled` branch. Task 9 switches it to `DefaultFirebaseOptions.currentPlatform`.

- [ ] **Step 1: Write failing tests**

- `logout calls beforeLogout while the access token is still set`: the callback captures `AuthTokenHolder.accessToken`. Expect it to be non-null.
- `logout succeeds when unregister throws`: the callback throws, and afterwards `state.isAuthenticated == false` and token storage is cleared.

- [ ] **Step 2: Run, verify fail**

Run: `cd frontend && flutter test test/features/auth`
Expected: FAIL.

- [ ] **Step 3: Implement the changes in the files listed**

- [ ] **Step 4: Verify**

Run: `cd frontend && flutter test && flutter analyze && flutter build apk --debug && flutter build ios --simulator --debug`
Expected: tests pass, and both builds succeed **without** any Firebase config files. Then run the app on the iOS simulator and log in and out once. There should be no crash and no Firebase errors, since `PUSH_ENABLED` is unset.

- [ ] **Step 5: Commit**

```bash
git add frontend/lib frontend/test frontend/android/app/src/main
git commit -m "feat(mobile): register for push on login, unregister on logout"
```

---

### Task 9: Connect Firebase and do a real-device test. ⛔ Blocked on the user's prerequisites

**Do not start this task** until the user confirms spec prerequisites 1–3 are done: the Firebase project, a real bundle/application ID, and the APNs key uploaded to Firebase. Stop after Task 8 and report.

**Files:**
- Modify: the bundle ID in `frontend/ios/Runner.xcodeproj/project.pbxproj` (all `PRODUCT_BUNDLE_IDENTIFIER` entries), and `applicationId` + `namespace` in `frontend/android/app/build.gradle.kts`. Move `MainActivity.kt` to the matching package path.
- Generated: `frontend/lib/firebase_options.dart`, `frontend/android/app/google-services.json`, `frontend/ios/Runner/GoogleService-Info.plist` (`flutterfire configure`)
- Create: `frontend/ios/Runner/Runner.entitlements` (`aps-environment` = `development`), with Push Notifications and Background Modes → Remote notifications turned on in Xcode
- Modify: `frontend/lib/main.dart` (use `DefaultFirebaseOptions.currentPlatform`)

- [ ] **Step 1: Change the bundle and application IDs to the user's chosen ID**
- [ ] **Step 2: `dart pub global activate flutterfire_cli && flutterfire configure`** and pick the user's Firebase project and both platforms.
- [ ] **Step 3: Add the iOS capabilities and entitlements, and switch `main.dart` to the generated options**
- [ ] **Step 4: Verify end to end**

1. Run the backend with `FIREBASE_SERVICE_ACCOUNT` set.
2. Run the app on a real iPhone, or an Apple-silicon simulator, using `--dart-define=PUSH_ENABLED=true --dart-define=API_BASE_URL=<backend url>`.
3. Log in and allow notifications. A `DeviceToken` row appears.
4. Seed a due reminder and run `npm run sweep`.
5. Expected: a notification titled `For {household}`, with the app icon. Tapping it opens the app.
6. Log out. The token row is deleted.

- [ ] **Step 5: Commit**

```bash
git add frontend
git commit -m "chore(mobile): connect Firebase project and enable push capability"
```
