// reminder/reminder.module.ts
import { Module } from '@nestjs/common';
import { HouseholdModule } from '../household/household.module';
import { NotificationService } from './notification.service';
import { ReminderSweepScheduler } from './reminder-sweep.scheduler';
import { ReminderService } from './reminder.service';

@Module({
  imports: [HouseholdModule],
  providers: [ReminderService, NotificationService, ReminderSweepScheduler],
  exports: [ReminderService],
})
export class ReminderModule {}
