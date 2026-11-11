// reminder/reminder-sweep.scheduler.ts
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ReminderService } from './reminder.service';

@Injectable()
export class ReminderSweepScheduler {
  constructor(private reminderService: ReminderService) {}

  @Cron('0 7 * * *', { timeZone: 'America/New_York' })
  handleSweep() {
    return this.reminderService.sweepDue();
  }
}
