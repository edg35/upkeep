// reminder/notification.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { Reminder } from '../../generated';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  notify(reminder: Reminder): void {
    this.logger.log(
      `Reminder ${reminder.reminder_id} for user ${reminder.user_id}: item ${reminder.item_id} due soon`,
    );
  }
}
