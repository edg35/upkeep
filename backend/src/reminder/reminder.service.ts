// reminder/reminder.service.ts
import { Injectable } from '@nestjs/common';
import { Prisma } from '../../generated';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationService } from './notification.service';
import { computeRemindAt } from './reminder.util';

@Injectable()
export class ReminderService {
  constructor(
    private prisma: PrismaService,
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

    const [assignees, members] = await Promise.all([
      tx.itemAssignee.findMany({ where: { item_id: itemId } }),
      tx.householdMember.findMany({ where: { household_id: householdId } }),
    ]);
    const memberIds = members.map((m) => m.user_id);
    const assigneeIds = new Set(assignees.map((a) => a.user_id));
    const assignedMembers = memberIds.filter((id) => assigneeIds.has(id));
    const recipients = assignedMembers.length > 0 ? assignedMembers : memberIds;

    await tx.reminder.createMany({
      data: recipients.map((user_id) => ({
        item_id: itemId,
        user_id,
        remind_at: remindAt,
      })),
      skipDuplicates: true,
    });
  }

  async resyncItem(
    tx: Prisma.TransactionClient,
    itemId: string,
  ): Promise<void> {
    const item = await tx.item.findUnique({
      where: { item_id: itemId },
      include: { schedule: true },
    });

    if (!item || item.deleted_at || !item.schedule) {
      await tx.reminder.deleteMany({
        where: { item_id: itemId, sent_at: null },
      });
      return;
    }

    await this.syncForItem(
      tx,
      itemId,
      item.household_id,
      item.schedule.next_due_date,
      item.schedule.lead_time_days,
    );
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
