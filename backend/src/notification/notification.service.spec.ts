import { Messaging } from 'firebase-admin/messaging';
import { DeviceTokenService } from './device-token.service';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let devices: { tokensFor: jest.Mock; removeTokens: jest.Mock };
  let messaging: { sendEachForMulticast: jest.Mock };
  const message = { title: 'Upkeep', body: 'You have tasks due today.' };

  const build = (m: typeof messaging | null) =>
    new NotificationService(
      m as unknown as Messaging | null,
      devices as unknown as DeviceTokenService,
    );

  beforeEach(() => {
    devices = { tokensFor: jest.fn(), removeTokens: jest.fn() };
    messaging = { sendEachForMulticast: jest.fn() };
  });

  it('logs and returns when messaging is null', async () => {
    await expect(
      build(null).sendDigest('u1', message),
    ).resolves.toBeUndefined();
    expect(devices.tokensFor).not.toHaveBeenCalled();
  });

  it('does nothing when the user has no tokens', async () => {
    devices.tokensFor.mockResolvedValue([]);
    await build(messaging).sendDigest('u1', message);
    expect(messaging.sendEachForMulticast).not.toHaveBeenCalled();
  });

  it('sends to all tokens with android channel and apns sound', async () => {
    devices.tokensFor.mockResolvedValue(['a', 'b']);
    messaging.sendEachForMulticast.mockResolvedValue({
      responses: [{ success: true }, { success: true }],
    });
    await build(messaging).sendDigest('u1', message);
    expect(messaging.sendEachForMulticast).toHaveBeenCalledWith(
      expect.objectContaining({
        tokens: ['a', 'b'],
        notification: { title: message.title, body: message.body },
        android: { notification: { channelId: 'reminders' } },
        apns: { payload: { aps: { sound: 'default' } } },
      }),
    );
    expect(devices.removeTokens).not.toHaveBeenCalled();
  });

  it('prunes unregistered and invalid tokens', async () => {
    devices.tokensFor.mockResolvedValue(['a', 'b', 'c', 'd']);
    messaging.sendEachForMulticast.mockResolvedValue({
      responses: [
        { success: true },
        {
          success: false,
          error: { code: 'messaging/registration-token-not-registered' },
        },
        {
          success: false,
          error: { code: 'messaging/invalid-registration-token' },
        },
        { success: false, error: { code: 'messaging/internal-error' } },
      ],
    });
    await build(messaging).sendDigest('u1', message);
    expect(devices.removeTokens).toHaveBeenCalledWith(['b', 'c']);
  });
});
