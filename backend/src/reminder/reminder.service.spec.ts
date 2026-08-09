/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Prisma } from '../../generated';
import { HouseholdService } from '../household/household.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationService } from './notification.service';
import { ReminderService } from './reminder.service';

describe('ReminderService', () => {
  let service: ReminderService;
  let tx: {
    reminder: { deleteMany: jest.Mock; createMany: jest.Mock };
  };
  let prisma: {
    reminder: { findMany: jest.Mock; update: jest.Mock };
  };
  let householdService: { getMemberIds: jest.Mock };
  let notificationService: { notify: jest.Mock };

  beforeEach(() => {
    tx = {
      reminder: { deleteMany: jest.fn(), createMany: jest.fn() },
    };
    prisma = {
      reminder: { findMany: jest.fn(), update: jest.fn() },
    };
    householdService = { getMemberIds: jest.fn() };
    notificationService = { notify: jest.fn() };
    service = new ReminderService(
      prisma as unknown as PrismaService,
      householdService as unknown as HouseholdService,
      notificationService as unknown as NotificationService,
    );
  });

  describe('syncForItem', () => {
    it('creates one reminder per household member when lead_time_days is set', async () => {
      householdService.getMemberIds.mockResolvedValue(['u1', 'u2']);
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
      });
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
      expect(householdService.getMemberIds).not.toHaveBeenCalled();
      expect(tx.reminder.createMany).not.toHaveBeenCalled();
    });
  });

  describe('sweepDue', () => {
    it('notifies and marks sent_at for each due, unsent reminder', async () => {
      const reminder = {
        reminder_id: 'r1',
        item_id: 'i1',
        user_id: 'u1',
        remind_at: new Date('2026-03-07T00:00:00.000Z'),
        sent_at: null,
      };
      prisma.reminder.findMany.mockResolvedValue([reminder]);

      await service.sweepDue();

      expect(prisma.reminder.findMany).toHaveBeenCalledWith({
        where: { remind_at: { lte: expect.any(Date) }, sent_at: null },
      });
      expect(notificationService.notify).toHaveBeenCalledWith(reminder);
      expect(prisma.reminder.update).toHaveBeenCalledWith({
        where: { reminder_id: 'r1' },
        data: { sent_at: expect.any(Date) },
      });
    });

    it('does nothing when there are no due reminders', async () => {
      prisma.reminder.findMany.mockResolvedValue([]);

      await service.sweepDue();

      expect(notificationService.notify).not.toHaveBeenCalled();
      expect(prisma.reminder.update).not.toHaveBeenCalled();
    });
  });
});
