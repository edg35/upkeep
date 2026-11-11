import { Inject, Injectable, Logger } from '@nestjs/common';
import { Messaging } from 'firebase-admin/messaging';
import { DeviceTokenService } from './device-token.service';
import { FCM_MESSAGING } from './fcm.provider';

export interface DigestMessage {
  title: string;
  body: string;
}

const DEAD_TOKEN_CODES = new Set([
  'messaging/registration-token-not-registered',
  'messaging/invalid-registration-token',
]);

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(
    @Inject(FCM_MESSAGING) private messaging: Messaging | null,
    private devices: DeviceTokenService,
  ) {}

  async sendDigest(userId: string, message: DigestMessage): Promise<void> {
    if (!this.messaging) {
      this.logger.log(`FCM not configured; skipping digest for user ${userId}`);
      return;
    }
    const tokens = await this.devices.tokensFor(userId);
    if (tokens.length === 0) return;

    const res = await this.messaging.sendEachForMulticast({
      tokens,
      notification: { title: message.title, body: message.body },
      android: { notification: { channelId: 'reminders' } },
      apns: { payload: { aps: { sound: 'default' } } },
    });

    const dead = tokens.filter((_, i) => {
      const r = res.responses[i];
      return !r.success && !!r.error && DEAD_TOKEN_CODES.has(r.error.code);
    });
    if (dead.length > 0) await this.devices.removeTokens(dead);
  }
}
