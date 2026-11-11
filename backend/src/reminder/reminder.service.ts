// reminder/reminder.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { Prisma } from '../../generated';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationService } from '../notification/notification.service';
import { buildDigest, endOfDayInZone, pickPhrase } from './digest.util';
import { computeRemindAt } from './reminder.util';

const DIGEST_TIME_ZONE = 'America/New_York';

@Injectable()
export class ReminderService {
  private readonly logger = new Logger(ReminderService.name);

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

  async sweepDue(now: Date = new Date()): Promise<void> {
    const rows = await this.prisma.reminder.findMany({
      where: {
        sent_at: null,
        remind_at: { lte: endOfDayInZone(now, DIGEST_TIME_ZONE) },
        item: { deleted_at: null },
        user: { memberships: { some: {} } },
      },
      select: {
        reminder_id: true,
        item_id: true,
        user_id: true,
        item: {
          select: { household_id: true, household: { select: { name: true } } },
        },
        user: {
          select: { memberships: { select: { household_id: true } } },
        },
      },
    });

    // Prisma can't compare two columns in a relation filter, so drop rows whose
    // user is no longer a member of the item's household here. Those rows are
    // left untouched (not marked sent).
    const byUser = new Map<
      string,
      { householdName: string; reminderIds: string[]; itemIds: Set<string> }
    >();
    for (const row of rows) {
      if (row.user.memberships[0]?.household_id !== row.item.household_id) {
        continue;
      }
      let group = byUser.get(row.user_id);
      if (!group) {
        group = {
          householdName: row.item.household.name,
          reminderIds: [],
          itemIds: new Set(),
        };
        byUser.set(row.user_id, group);
      }
      group.reminderIds.push(row.reminder_id);
      group.itemIds.add(row.item_id);
    }

    for (const [userId, group] of byUser) {
      try {
        const message = buildDigest(
          group.householdName,
          group.itemIds.size,
          pickPhrase(),
        );
        await this.notificationService.sendDigest(userId, message);
      } catch (err) {
        this.logger.error(
          `Failed to send digest to user ${userId}`,
          err instanceof Error ? err.stack : String(err),
        );
      } finally {
        await this.prisma.reminder.updateMany({
          where: { reminder_id: { in: group.reminderIds } },
          data: { sent_at: now },
        });
      }
    }
  }
}
