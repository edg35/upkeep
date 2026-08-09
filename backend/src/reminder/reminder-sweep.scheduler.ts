// reminder/reminder-sweep.scheduler.ts
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ReminderService } from './reminder.service';

@Injectable()
export class ReminderSweepScheduler {
  constructor(private reminderService: ReminderService) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  handleSweep() {
    return this.reminderService.sweepDue();
  }
}
