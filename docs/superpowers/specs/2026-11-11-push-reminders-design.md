# Push Reminders: Daily Digest via FCM — Design

Ticket: [Backend] Notification/reminder scheduler (cron + push dispatch). The mobile ticket for push setup is folded in here, so this spec covers both the backend and the Flutter app.

## Why

Upkeep keeps track of recurring household chores, bills, and appointments, but today nothing nudges anyone. Reminder rows already get created and swept. The sweep just logs a line. This work makes those reminders show up on people's phones, once a day, in a way that feels encouraging and not naggy, and puts the API somewhere it can run around the clock.

## What already exists (do not rebuild)

- `@nestjs/schedule` is installed, and `ScheduleModule.forRoot()` is registered in `app.module.ts`.
- `Reminder` model (`item_id`, `user_id`, `remind_at`, `sent_at`), plus a unique key on `(item_id, user_id, remind_at)` and an index on `(remind_at, sent_at)`.
- `ReminderService.syncForItem(tx, itemId, householdId, nextDueDate, leadTimeDays)` deletes the item's unsent reminders and recreates one per household member with `remind_at = next_due_date - lead_time_days`. It's called from item create, item update (when a schedule is sent), and complete.
- `ReminderService.sweepDue()` finds reminders that are due and unsent, calls `NotificationService.notify(reminder)` for each one, and sets `sent_at`.
- `ReminderSweepScheduler` runs `sweepDue` from `@Cron(EVERY_DAY_AT_MIDNIGHT)`, which is midnight UTC.
- `NotificationService.notify` only logs.

## Goals

1. **One digest push per person per day**, at **7:00 AM America/New_York**. It does not send one push per item.
2. **Notification content:**
   - Title: `For {household name}`
   - Body: `You have {n} task(s) to take care of today. {encouraging phrase}`. The text should read naturally for n = 1 ("1 task").
   - The phrase comes at random from a small built-in list of short, warm lines (about 8 of them, e.g. "Small wins keep the house running!"). This is the builder's call.
   - Icon: the app's own icon. iOS uses the app icon automatically. Android uses a default notification icon set in the manifest (see Flutter section).
   - Tapping the notification just opens the app. No deep links.
3. **Recipients:** the item's assignees. If an item has no assignees, every member of the household gets it.
4. **No duplicate sends.** Every reminder included in a digest gets `sent_at` set, so it never appears in another digest.
5. **Delivery through Firebase Cloud Messaging** to every registered device the user has, on both iOS and Android.
6. **The Flutter app** gets set up with Firebase, asks for notification permission, registers its FCM token with the API, and unregisters on logout.
7. **The backend gets hosted** on an always-on server that runs the cron in-process.

## Non-goals

- Per-user time zones or a user-chosen send time. 7 AM Eastern is fixed for now.
- Per-user notification preferences or a mute toggle.
- Deep linking from the notification to an item or the task list.
- Showing a banner on Android while the app is in the foreground. iOS gets one through presentation options, and Android shows nothing in the foreground.
- Push for other events (invites, join requests). The schema comment about invitation pushes stays future work.
- Editing assignees after an item is created. `UpdateItemDto` doesn't support it today, so no resync on assignee change is needed yet. If assignee editing gets added later, it must call `syncForItem`.

## Anti-goals (would count as failure even if it "works")

- Someone gets several pushes in one morning, or gets the same task again on a later day.
- A push goes to someone who has left the household, or reminders fire for deleted items.
- A failing or misconfigured Firebase setup crashes the API or breaks local dev and the test suites.

## Backend design

### Recipients in `syncForItem`

`syncForItem` changes from "all household members" to "the item's assignees who are still household members, or every member if none are". Assignees are read inside the same transaction (`tx.itemAssignee.findMany({ where: { item_id } })`), because `create` inserts assignees in that transaction before it calls sync. The rest of the logic (delete unsent reminders, compute `remind_at`, `createMany`) stays the same, except that `createMany` uses `skipDuplicates: true`. Completing a FIXED_DATE item can recreate a `remind_at` that was already sent, which would otherwise hit the unique key.

*(Builder-check call)* When someone leaves, `HouseholdService.leave` deletes their `ItemAssignee` rows in that household and re-runs `syncForItem` for each affected item. That way an item that was only assigned to them falls back to everyone, and doesn't go silent.

Known limitation, accepted: someone who joins a household doesn't get reminders for existing unassigned items until each item resyncs (on its next edit or completion).

### Fixing stale reminders

- **Deleted items:** `ItemService.remove` (soft delete) also deletes that item's unsent reminders. The sweep query also requires `item.deleted_at = null` as a safety net.
- **Members who leave:** the sweep only includes reminders where the user is still a member of the item's household (a relation filter: `user.memberships.some({ household_id: item.household_id })` or equivalent). `HouseholdService.leave` also deletes that user's unsent reminders.

### Digest sweep

`sweepDue()` becomes:

1. Load the unsent reminders with `remind_at <= end of today ET` (see Cron timing), filtered as described above, including `item.household.name`.
2. Group them by `user_id`. A user belongs to only one household (`HouseholdMember` is keyed by `user_id`), so each group has a single household name.
3. For each user: n = number of distinct `item_id`s in the group. Build the title and body, then call `NotificationService.sendDigest(userId, { title, body })`.
4. After each user's send attempt, mark all of that user's included reminders `sent_at = now` in one `updateMany`. They're marked whether or not delivery worked, and even if the user has no devices. That way a missed day can't build into a backlog, and a newly installed app won't get flooded. A daily nudge isn't worth retrying.
5. If one user's send throws, it gets logged and the sweep moves on to the next user. One bad user can't stop the others.

What "today" means: the count covers every reminder whose lead-time window has opened, so some of those tasks may be due a few days from now. The user accepted this wording.

### Cron timing

`@Cron('0 7 * * *', { timeZone: 'America/New_York' })`. DST is handled automatically.

*(Builder-check call)* `remind_at` is **not** always midnight. INTERVAL and RECURRING due dates keep the clock time from when the item was created or completed (`schedule.util.ts`), so a 3 PM reminder would miss the 7 AM digest that day. Rule: **a reminder belongs to its Eastern calendar day.** The sweep selects `remind_at <= end of today in America/New_York` (23:59:59.999 ET), not `<= now`. The stored values stay as they are, and no schedule-util change is needed.

### Device tokens

New Prisma model and migration:

```prisma
enum DevicePlatform { IOS ANDROID }

model DeviceToken {
  token        String         @id
  user_id      String
  platform     DevicePlatform
  created_at   DateTime       @default(now())
  last_seen_at DateTime       @default(now())

  user User @relation(fields: [user_id], references: [user_id])
  @@index([user_id])
}
```

A new `NotificationModule`, or endpoints added to the existing reminder module (the builder decides). The endpoints are JWT-guarded:

- `POST /devices` with body `{ token, platform }`. Upserts by token. If the token already belongs to a different user (a shared phone after re-login), it's reassigned to the current user. Sets `last_seen_at`. Returns 204.
- `DELETE /devices` with body `{ token }`. Deletes the token only if it belongs to the current user. Returns 204.

### `NotificationService` with FCM

- Uses the `firebase-admin` package. Credentials come from env `FIREBASE_SERVICE_ACCOUNT`, which holds the service-account JSON as a single-line string.
- **If the env var is unset** (local dev, unit tests, e2e tests), it logs what it would send and returns. It must never throw because Firebase is missing.
- `sendDigest(userId, { title, body })` loads the user's tokens and calls `messaging().sendEachForMulticast({ tokens, notification: { title, body } })`. When a token comes back with `messaging/registration-token-not-registered` or `messaging/invalid-registration-token`, that token is deleted.
- Android config in the message sets the notification channel ID used by the app (e.g. `reminders`). For APNs, set `sound: 'default'`.

### Tests

- Unit: `syncForItem` targets assignees when present and all members otherwise. `sweepDue` groups by user, gets the singular/plural count right, includes the household name, marks every included reminder sent, and keeps going when one user's send throws. `NotificationService` prunes invalid tokens and does nothing (no throw) when Firebase isn't configured. Device upsert reassigns a token to a new user.
- E2E: register and unregister a device. A deleted item's reminders aren't swept.

## Flutter design

- Add `firebase_core` and `firebase_messaging`. Run `flutterfire configure` to generate `lib/firebase_options.dart` along with the platform config files.
- Call `Firebase.initializeApp(...)` in `main.dart` before `runApp`.
- A small `PushNotificationService` (in `core/`, exposed with Riverpod like the other services) that:
  - once the user is authenticated and lands in the app, asks for permission (`requestPermission`). That's the first authenticated app launch, not the welcome screen.
  - if permission is granted, gets the FCM token and calls `POST /devices` with the platform.
  - listens to `onTokenRefresh` and re-registers.
  - on iOS, sets `setForegroundNotificationPresentationOptions(alert: true, badge: true, sound: true)`.
- On logout, call `DELETE /devices` with the current token **before** auth is cleared (it needs the JWT). Then `deleteToken()`. A failure here must not block logout.
- **Android:** create a `reminders` notification channel (by declaring the default channel ID in the manifest via `com.google.firebase.messaging.default_notification_channel_id`). Set `com.google.firebase.messaging.default_notification_icon` to a white monochrome drawable `ic_notification` made from the app logo. If there's no real logo asset yet, use a simple placeholder glyph and note it. Android 13+ needs `POST_NOTIFICATIONS`, which `requestPermission` handles.
- **iOS:** turn on the Push Notifications capability and Background Modes → Remote notifications in Xcode (`Runner.entitlements` with `aps-environment`).
- **API base URL:** `api_client.dart` hardcodes `localhost`. Change it to read `--dart-define=API_BASE_URL` and fall back to the current localhost logic, so a build can point at the hosted API.

## Hosting

**Railway** (my call; the user asked for simple and always-on). One Railway project with:

- a Postgres service. `DATABASE_URL` is wired into the API service.
- the API service built from `backend/`. The build runs `npx prisma generate && npm run build`, and the start command is `npx prisma migrate deploy && npm run start:prod`.
  - **Gotcha:** `backend/generated/` is committed and contains a macOS-only query engine (`libquery_engine-darwin-arm64.dylib.node`). The build must regenerate the client on Linux. Either regenerate at build time (above), or add `binaryTargets = ["native", "debian-openssl-3.0.x"]` to the generator. The builder picks one and checks that the deployed app boots.
- env vars: `DATABASE_URL`, the JWT secrets the auth module already reads, `FIREBASE_SERVICE_ACCOUNT`, `PORT` (set by Railway; `main.ts` already respects it).
- **A single replica only.** The cron runs in-process, so more replicas would send duplicate digests. Write this down in the backend README's deploy notes.

The builder writes deploy config as code where Railway supports it (`railway.json` or a `Dockerfile` in `backend/`) and documents the manual steps.

## Prerequisites the user does by hand (outside the code)

1. Create a Firebase project. Add the iOS and Android apps.
2. Pick a real bundle ID / application ID to replace `com.example.frontend` (Apple won't register `com.example.*`) and update both platforms.
3. Apple Developer account: create an APNs auth key (.p8) and upload it in Firebase project settings → Cloud Messaging.
4. Generate a Firebase service-account key, and put it in Railway as `FIREBASE_SERVICE_ACCOUNT`.
5. Create the Railway project and connect the GitHub repo.

**Status (2026-11-11): none of these are done yet.** So the build order is:

- All backend work, the Flutter Dart code, and the Railway config are built and tested first, **without** Firebase config.
- The Flutter app must still build and run with no `firebase_options.dart`, `google-services.json`, or `GoogleService-Info.plist`:
  - `Firebase.initializeApp` is guarded, either behind a flag such as `--dart-define=PUSH_ENABLED=true` or with a try/catch.
  - `PushNotificationService` becomes a no-op when Firebase didn't initialize.
  - Existing tests must not need Firebase.
- Running `flutterfire configure`, changing the bundle/application ID, adding the iOS capability, and doing a real-device push test make up a separate final step. That step happens after the user finishes prerequisites 1–3, and the plan should say it's blocked on them.

## Left to the builder

- Exact list of encouraging phrases.
- Module layout (a new `notification` module vs. extending `reminder`).
- Dockerfile vs. Railway's native builder.
- Where in the Flutter app the permission prompt fires, as long as it happens after authentication.
- A manual way to trigger the sweep for testing, e.g. an npm script or a dev-only endpoint. If it's an endpoint, it must not be reachable in production.
