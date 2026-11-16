// reminder/reminder.module.ts
import { Module } from '@nestjs/common';
import { NotificationModule } from '../notification/notification.module';
import { ReminderSweepScheduler } from './reminder-sweep.scheduler';
import { ReminderService } from './reminder.service';

@Module({
  imports: [NotificationModule],
  providers: [ReminderService, ReminderSweepScheduler],
  exports: [ReminderService],
})
export class ReminderModule {}
