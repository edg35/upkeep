import { Prisma } from '../../generated';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationService } from '../notification/notification.service';
import { ReminderService } from './reminder.service';

describe('ReminderService', () => {
  let service: ReminderService;
  let tx: {
    reminder: { deleteMany: jest.Mock; createMany: jest.Mock };
    itemAssignee: { findMany: jest.Mock };
    householdMember: { findMany: jest.Mock };
    item: { findUnique: jest.Mock };
  };
  let prisma: {
    reminder: { findMany: jest.Mock; updateMany: jest.Mock };
  };
  let notificationService: { sendDigest: jest.Mock };

  beforeEach(() => {
    tx = {
      reminder: { deleteMany: jest.fn(), createMany: jest.fn() },
      itemAssignee: { findMany: jest.fn().mockResolvedValue([]) },
      householdMember: { findMany: jest.fn().mockResolvedValue([]) },
      item: { findUnique: jest.fn() },
    };
    prisma = {
      reminder: { findMany: jest.fn(), updateMany: jest.fn() },
    };
    notificationService = { sendDigest: jest.fn() };
    service = new ReminderService(
      prisma as unknown as PrismaService,
      notificationService as unknown as NotificationService,
    );
  });

  const createdUserIds = (): string[] => {
    const [arg] = tx.reminder.createMany.mock.calls[0] as [
      { data: { user_id: string }[] },
    ];
    return arg.data.map((r) => r.user_id);
  };

  describe('syncForItem', () => {
    it('creates one reminder per household member when lead_time_days is set', async () => {
      tx.householdMember.findMany.mockResolvedValue([
        { user_id: 'u1' },
        { user_id: 'u2' },
      ]);
      const nextDueDate = new Date('2026-03-10T00:00:00.000Z');

      await service.syncForItem(
        tx as unknown as Prisma.TransactionClient,
        'i1',
        'h1',
        nextDueDate,
        3,
      );

      expect(tx.reminder.deleteMany).toHaveBeenCalledWith({
        where: { item_id: 'i1', sent_at: null },
      });
      expect(tx.reminder.createMany).toHaveBeenCalledWith({
        data: [
          {
            item_id: 'i1',
            user_id: 'u1',
            remind_at: new Date('2026-03-07T00:00:00.000Z'),
          },
          {
            item_id: 'i1',
            user_id: 'u2',
            remind_at: new Date('2026-03-07T00:00:00.000Z'),
          },
        ],
        skipDuplicates: true,
      });
    });

    it('targets assignees who are current members', async () => {
      tx.itemAssignee.findMany.mockResolvedValue([
        { user_id: 'u1' },
        { user_id: 'u3' },
      ]);
      tx.householdMember.findMany.mockResolvedValue([
        { user_id: 'u1' },
        { user_id: 'u2' },
      ]);

      await service.syncForItem(
        tx as unknown as Prisma.TransactionClient,
        'i1',
        'h1',
        new Date('2026-03-10T00:00:00.000Z'),
        3,
      );

      expect(tx.reminder.createMany).toHaveBeenCalledWith({
        data: [
          {
            item_id: 'i1',
            user_id: 'u1',
            remind_at: new Date('2026-03-07T00:00:00.000Z'),
          },
        ],
        skipDuplicates: true,
      });
    });

    it('falls back to all members when no assignee is a current member', async () => {
      tx.itemAssignee.findMany.mockResolvedValue([{ user_id: 'u3' }]);
      tx.householdMember.findMany.mockResolvedValue([
        { user_id: 'u1' },
        { user_id: 'u2' },
      ]);

      await service.syncForItem(
        tx as unknown as Prisma.TransactionClient,
        'i1',
        'h1',
        new Date('2026-03-10T00:00:00.000Z'),
        3,
      );

      expect(createdUserIds()).toEqual(['u1', 'u2']);
    });

    it('falls back to all members when item has no assignees', async () => {
      tx.householdMember.findMany.mockResolvedValue([
        { user_id: 'u1' },
        { user_id: 'u2' },
      ]);

      await service.syncForItem(
        tx as unknown as Prisma.TransactionClient,
        'i1',
        'h1',
        new Date('2026-03-10T00:00:00.000Z'),
        3,
      );

      expect(createdUserIds()).toEqual(['u1', 'u2']);
    });

    it('deletes stale unsent reminders and creates none when lead_time_days is unset', async () => {
      await service.syncForItem(
        tx as unknown as Prisma.TransactionClient,
        'i1',
        'h1',
        new Date('2026-03-10T00:00:00.000Z'),
        null,
      );

      expect(tx.reminder.deleteMany).toHaveBeenCalledWith({
        where: { item_id: 'i1', sent_at: null },
      });
      expect(tx.householdMember.findMany).not.toHaveBeenCalled();
      expect(tx.reminder.createMany).not.toHaveBeenCalled();
    });
  });

  describe('resyncItem', () => {
    it('deletes unsent reminders and creates none for a deleted item', async () => {
      tx.item.findUnique.mockResolvedValue({
        household_id: 'h1',
        deleted_at: new Date(),
        schedule: {
          next_due_date: new Date('2026-03-10T00:00:00.000Z'),
          lead_time_days: 2,
        },
      });

      await service.resyncItem(tx as unknown as Prisma.TransactionClient, 'i1');

      expect(tx.reminder.deleteMany).toHaveBeenCalledWith({
        where: { item_id: 'i1', sent_at: null },
      });
      expect(tx.reminder.createMany).not.toHaveBeenCalled();
    });

    it('syncs from the stored schedule', async () => {
      tx.item.findUnique.mockResolvedValue({
        household_id: 'h1',
        deleted_at: null,
        schedule: {
          next_due_date: new Date('2026-03-10T00:00:00.000Z'),
          lead_time_days: 2,
        },
      });
      tx.householdMember.findMany.mockResolvedValue([{ user_id: 'u1' }]);

      await service.resyncItem(tx as unknown as Prisma.TransactionClient, 'i1');

      expect(tx.reminder.createMany).toHaveBeenCalledWith({
        data: [
          {
            item_id: 'i1',
            user_id: 'u1',
            remind_at: new Date('2026-03-08T00:00:00.000Z'),
          },
        ],
        skipDuplicates: true,
      });
    });
  });

  describe('sweepDue', () => {
    const now = new Date('2026-11-11T12:00:00Z');

    const row = (
      reminderId: string,
      userId: string,
      itemId: string,
      opts: { memberOf?: string; householdId?: string } = {},
    ) => ({
      reminder_id: reminderId,
      item_id: itemId,
      user_id: userId,
      item: {
        household_id: opts.householdId ?? 'h1',
        household: { name: 'Home' },
      },
      user: { memberships: [{ household_id: opts.memberOf ?? 'h1' }] },
    });

    const sentTo = (userId: string): { title: string; body: string } => {
      const call = (
        notificationService.sendDigest.mock.calls as [
          string,
          { title: string; body: string },
        ][]
      ).find(([id]) => id === userId);
      if (!call) throw new Error(`no digest sent to ${userId}`);
      return call[1];
    };

    it('queries unsent reminders through end of today ET for live items and current members', async () => {
      prisma.reminder.findMany.mockResolvedValue([]);

      await service.sweepDue(now);

      expect(prisma.reminder.findMany).toHaveBeenCalledWith({
        where: {
          sent_at: null,
          remind_at: { lte: new Date('2026-11-12T04:59:59.999Z') },
          item: { deleted_at: null },
          user: { memberships: { some: {} } },
        },
        select: {
          reminder_id: true,
          item_id: true,
          user_id: true,
          item: {
            select: {
              household_id: true,
              household: { select: { name: true } },
            },
          },
          user: {
            select: { memberships: { select: { household_id: true } } },
          },
        },
      });
    });

    it('skips reminders whose user is not a member of the item household', async () => {
      prisma.reminder.findMany.mockResolvedValue([
        row('r1', 'u1', 'i1', { memberOf: 'h2' }),
      ]);

      await service.sweepDue(now);

      expect(notificationService.sendDigest).not.toHaveBeenCalled();
      expect(prisma.reminder.updateMany).not.toHaveBeenCalled();
    });

    it('counts distinct items and sends one digest per user', async () => {
      prisma.reminder.findMany.mockResolvedValue([
        row('r1', 'u1', 'i1'),
        row('r2', 'u1', 'i1'),
        row('r3', 'u1', 'i2'),
        row('r4', 'u2', 'i1'),
      ]);

      await service.sweepDue(now);

      expect(notificationService.sendDigest).toHaveBeenCalledTimes(2);
      expect(sentTo('u1').title).toBe('For Home');
      expect(sentTo('u1').body.startsWith('You have 2 tasks')).toBe(true);
      expect(sentTo('u2').title).toBe('For Home');
      expect(sentTo('u2').body.startsWith('You have 1 task ')).toBe(true);
      expect(prisma.reminder.updateMany).toHaveBeenCalledWith({
        where: { reminder_id: { in: ['r1', 'r2', 'r3'] } },
        data: { sent_at: now },
      });
      expect(prisma.reminder.updateMany).toHaveBeenCalledWith({
        where: { reminder_id: { in: ['r4'] } },
        data: { sent_at: now },
      });
    });

    it('continues after a send failure', async () => {
      prisma.reminder.findMany.mockResolvedValue([
        row('r1', 'u1', 'i1'),
        row('r2', 'u2', 'i1'),
      ]);
      notificationService.sendDigest.mockImplementation((userId: string) =>
        userId === 'u1'
          ? Promise.reject(new Error('fcm down'))
          : Promise.resolve(),
      );

      await service.sweepDue(now);

      expect(notificationService.sendDigest).toHaveBeenCalledWith(
        'u2',
        expect.objectContaining({ title: 'For Home' }),
      );
      expect(prisma.reminder.updateMany).toHaveBeenCalledWith({
        where: { reminder_id: { in: ['r1'] } },
        data: { sent_at: now },
      });
      expect(prisma.reminder.updateMany).toHaveBeenCalledWith({
        where: { reminder_id: { in: ['r2'] } },
        data: { sent_at: now },
      });
    });

    it('does nothing when there are no due reminders', async () => {
      prisma.reminder.findMany.mockResolvedValue([]);

      await service.sweepDue(now);

      expect(notificationService.sendDigest).not.toHaveBeenCalled();
      expect(prisma.reminder.updateMany).not.toHaveBeenCalled();
    });
  });
});
