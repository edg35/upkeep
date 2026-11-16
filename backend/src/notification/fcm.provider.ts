import { Logger, Provider } from '@nestjs/common';
import { cert, initializeApp } from 'firebase-admin/app';
import { getMessaging, Messaging } from 'firebase-admin/messaging';

export const FCM_MESSAGING = 'FCM_MESSAGING';

/**
 * Parses the single-line service-account JSON. Some env loaders (dotenv,
 * Prisma's) expand the `\n` escapes in `private_key` into real newlines,
 * which JSON.parse rejects. Minified JSON has no structural newlines, so any
 * raw newline belongs to a string value and can be re-escaped safely.
 */
export function parseServiceAccount(raw: string): Record<string, string> {
  return JSON.parse(raw.replace(/\r?\n/g, '\\n')) as Record<string, string>;
}

export const fcmProvider: Provider = {
  provide: FCM_MESSAGING,
  useFactory: (): Messaging | null => {
    const logger = new Logger('FcmProvider');
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!raw) {
      logger.warn('FIREBASE_SERVICE_ACCOUNT not set; push sending disabled');
      return null;
    }
    try {
      const app = initializeApp({
        credential: cert(parseServiceAccount(raw)),
      });
      return getMessaging(app);
    } catch (err) {
      logger.error(
        `Failed to initialise Firebase; push sending disabled (${err instanceof Error ? err.name : 'unknown'})`,
      );
      return null;
    }
  },
};
