// reminder/reminder.module.ts
import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { ReminderSweepScheduler } from './reminder-sweep.scheduler';
import { ReminderService } from './reminder.service';

@Module({
  providers: [ReminderService, NotificationService, ReminderSweepScheduler],
  exports: [ReminderService],
})
export class ReminderModule {}
