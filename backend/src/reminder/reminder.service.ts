// reminder/reminder.service.ts
import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated';
import { HouseholdService } from '../household/household.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationService } from './notification.service';
import { computeRemindAt } from './reminder.util';

@Injectable()
export class ReminderService {
  constructor(
    private prisma: PrismaService,
    private householdService: HouseholdService,
    private notificationService: NotificationService,
  ) {}

  async syncForItem(
    tx: Prisma.TransactionClient,
    itemId: string,
    householdId: string,
    nextDueDate: Date,
    leadTimeDays: number | null | undefined,
  ): Promise<void> {
    await tx.reminder.deleteMany({
      where: { item_id: itemId, sent_at: null },
    });

    if (leadTimeDays == null) return;

    const remindAt = computeRemindAt(nextDueDate, leadTimeDays);
    const memberIds = await this.householdService.getMemberIds(householdId);

    await tx.reminder.createMany({
      data: memberIds.map((user_id) => ({
        item_id: itemId,
        user_id,
        remind_at: remindAt,
      })),
    });
  }

  async sweepDue(): Promise<void> {
    const dueReminders = await this.prisma.reminder.findMany({
      where: { remind_at: { lte: new Date() }, sent_at: null },
    });

    for (const reminder of dueReminders) {
      this.notificationService.notify(reminder);
      await this.prisma.reminder.update({
        where: { reminder_id: reminder.reminder_id },
        data: { sent_at: new Date() },
      });
    }
  }
}
