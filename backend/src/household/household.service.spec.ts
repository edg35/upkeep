/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ReminderService } from '../reminder/reminder.service';
import { HouseholdService } from './household.service';

describe('HouseholdService.leave', () => {
  let service: HouseholdService;
  let tx: {
    itemAssignee: { findMany: jest.Mock; deleteMany: jest.Mock };
    reminder: { deleteMany: jest.Mock };
    householdMember: { delete: jest.Mock };
  };
  let prisma: {
    householdMember: { findUnique: jest.Mock; count: jest.Mock };
    $transaction: jest.Mock;
  };
  let reminderService: { resyncItem: jest.Mock };

  beforeEach(() => {
    tx = {
      itemAssignee: { findMany: jest.fn(), deleteMany: jest.fn() },
      reminder: { deleteMany: jest.fn() },
      householdMember: { delete: jest.fn() },
    };
    prisma = {
      householdMember: { findUnique: jest.fn(), count: jest.fn() },
      $transaction: jest.fn((cb: (tx: unknown) => unknown) => cb(tx)),
    };
    reminderService = { resyncItem: jest.fn() };
    service = new HouseholdService(
      prisma as unknown as PrismaService,
      reminderService as unknown as ReminderService,
    );
  });

  it('leave removes assignments and resyncs affected items', async () => {
    prisma.householdMember.findUnique.mockResolvedValue({
      household_id: 'h1',
      role: 'MEMBER',
    });
    tx.itemAssignee.findMany.mockResolvedValue([
      { item_id: 'i1' },
      { item_id: 'i2' },
    ]);

    await service.leave('u1');

    expect(tx.itemAssignee.deleteMany).toHaveBeenCalledWith({
      where: { user_id: 'u1', item: { household_id: 'h1' } },
    });
    expect(tx.reminder.deleteMany).toHaveBeenCalledWith({
      where: { user_id: 'u1', sent_at: null },
    });
    expect(tx.householdMember.delete).toHaveBeenCalledWith({
      where: { user_id: 'u1' },
    });
    expect(reminderService.resyncItem).toHaveBeenCalledWith(tx, 'i1');
    expect(reminderService.resyncItem).toHaveBeenCalledWith(tx, 'i2');

    const order = (m: jest.Mock) => m.mock.invocationCallOrder[0];
    expect(order(tx.itemAssignee.deleteMany)).toBeLessThan(
      order(tx.reminder.deleteMany),
    );
    expect(order(tx.reminder.deleteMany)).toBeLessThan(
      order(tx.householdMember.delete),
    );
    for (const call of reminderService.resyncItem.mock.invocationCallOrder) {
      expect(order(tx.householdMember.delete)).toBeLessThan(call);
    }
  });

  it('throws ConflictException when an owner leaves with other members', async () => {
    prisma.householdMember.findUnique.mockResolvedValue({
      household_id: 'h1',
      role: 'OWNER',
    });
    prisma.householdMember.count.mockResolvedValue(2);

    await expect(service.leave('u1')).rejects.toThrow(ConflictException);
    expect(prisma.$transaction).not.toHaveBeenCalled();
  });
});
