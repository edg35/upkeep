import { Logger, Provider } from '@nestjs/common';
import { cert, initializeApp } from 'firebase-admin/app';
import { getMessaging, Messaging } from 'firebase-admin/messaging';

export const FCM_MESSAGING = 'FCM_MESSAGING';

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
        credential: cert(JSON.parse(raw) as Record<string, string>),
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
