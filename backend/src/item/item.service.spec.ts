/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { ItemType, TrackingMode } from '../../generated';
import { CreateItemDto } from './dto/create-item.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ReminderService } from '../reminder/reminder.service';
import { ItemService } from './item.service';

describe('ItemService', () => {
  let service: ItemService;
  let tx: {
    item: { create: jest.Mock; update: jest.Mock };
    itemSchedule: { create: jest.Mock; update: jest.Mock };
    itemHistory: { create: jest.Mock };
    itemAssignee: { createMany: jest.Mock; findMany: jest.Mock };
  };
  let prisma: {
    category: { findFirst: jest.Mock };
    householdMember: { findMany: jest.Mock };
    item: { findFirst: jest.Mock; findMany: jest.Mock; update: jest.Mock };
    $transaction: jest.Mock;
  };
  let reminderService: { syncForItem: jest.Mock };

  beforeEach(() => {
    tx = {
      item: { create: jest.fn(), update: jest.fn() },
      itemSchedule: { create: jest.fn(), update: jest.fn() },
      itemHistory: { create: jest.fn() },
      itemAssignee: { createMany: jest.fn(), findMany: jest.fn() },
    };
    prisma = {
      category: { findFirst: jest.fn() },
      householdMember: { findMany: jest.fn() },
      item: { findFirst: jest.fn(), findMany: jest.fn(), update: jest.fn() },
      $transaction: jest.fn((cb: (tx: unknown) => unknown) => cb(tx)),
    };
    reminderService = { syncForItem: jest.fn() };
    service = new ItemService(
      prisma as unknown as PrismaService,
      reminderService as unknown as ReminderService,
    );
  });

  describe('create', () => {
    const dto = {
      name: 'Furnace filter',
      category_id: 'c1',
      item_type: ItemType.MAINTENANCE,
      schedule: { tracking_mode: TrackingMode.INTERVAL, interval_days: 90 },
    } as CreateItemDto;

    it('rejects a category_id that belongs to a different household', async () => {
      prisma.category.findFirst.mockResolvedValue(null);

      await expect(service.create('h1', 'u1', dto)).rejects.toThrow(
        BadRequestException,
      );
      expect(prisma.$transaction).not.toHaveBeenCalled();
    });

    it('creates an item with no category_id at all, skipping category validation', async () => {
      tx.item.create.mockResolvedValue({ item_id: 'i1' });

      const { category_id, ...dtoWithoutCategory } = dto;
      await service.create('h1', 'u1', dtoWithoutCategory as CreateItemDto);

      expect(prisma.category.findFirst).not.toHaveBeenCalled();
      expect(tx.item.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ category_id: undefined }),
        }),
      );
    });

    it('creates the Item and its ItemSchedule together with a computed next_due_date', async () => {
      prisma.category.findFirst.mockResolvedValue({
        category_id: 'c1',
        household_id: 'h1',
      });
      tx.item.create.mockResolvedValue({ item_id: 'i1' });

      await service.create('h1', 'u1', dto);

      expect(tx.item.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            name: 'Furnace filter',
            category_id: 'c1',
            household_id: 'h1',
            created_by: 'u1',
            item_type: ItemType.MAINTENANCE,
          }),
        }),
      );
      expect(tx.itemSchedule.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            item_id: 'i1',
            tracking_mode: TrackingMode.INTERVAL,
            interval_days: 90,
            next_due_date: expect.any(Date),
          }),
        }),
      );
      expect(reminderService.syncForItem).toHaveBeenCalledWith(
        tx,
        'i1',
        'h1',
        expect.any(Date),
        undefined,
      );
    });

    it('rejects an assignee_user_id that is not a member of the household', async () => {
      prisma.category.findFirst.mockResolvedValue({
        category_id: 'c1',
        household_id: 'h1',
      });
      prisma.householdMember.findMany.mockResolvedValue([{ user_id: 'u1' }]);

      await expect(
        service.create('h1', 'u1', {
          ...dto,
          assignee_user_ids: ['u1', 'not-a-member'],
        }),
      ).rejects.toThrow(BadRequestException);
      expect(prisma.$transaction).not.toHaveBeenCalled();
    });

    it('creates ItemAssignee rows and echoes them back in the response', async () => {
      prisma.category.findFirst.mockResolvedValue({
        category_id: 'c1',
        household_id: 'h1',
      });
      prisma.householdMember.findMany.mockResolvedValue([
        { user_id: 'u1' },
        { user_id: 'u2' },
      ]);
      tx.item.create.mockResolvedValue({ item_id: 'i1' });
      tx.itemAssignee.findMany.mockResolvedValue([
        { item_id: 'i1', user_id: 'u1', user: { user_id: 'u1', name: 'A' } },
        { item_id: 'i1', user_id: 'u2', user: { user_id: 'u2', name: 'B' } },
      ]);

      const result = await service.create('h1', 'u1', {
        ...dto,
        assignee_user_ids: ['u1', 'u2'],
      });

      expect(tx.itemAssignee.createMany).toHaveBeenCalledWith({
        data: [
          { item_id: 'i1', user_id: 'u1' },
          { item_id: 'i1', user_id: 'u2' },
        ],
      });
      expect(result.assignees).toHaveLength(2);
    });

    it('overrides the computed next_due_date when initial_due_date is provided', async () => {
      prisma.category.findFirst.mockResolvedValue({
        category_id: 'c1',
        household_id: 'h1',
      });
      tx.item.create.mockResolvedValue({ item_id: 'i1' });

      await service.create('h1', 'u1', {
        ...dto,
        schedule: {
          ...dto.schedule,
          initial_due_date: '2026-09-05T00:00:00.000Z',
        },
      });

      expect(tx.itemSchedule.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            next_due_date: new Date('2026-09-05T00:00:00.000Z'),
          }),
        }),
      );
    });
  });

  describe('findAll', () => {
    it('excludes soft-deleted items and scopes to the caller household', async () => {
      prisma.item.findMany.mockResolvedValue([]);

      await service.findAll('h1', {});

      expect(prisma.item.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            household_id: 'h1',
            deleted_at: null,
          }),
        }),
      );
    });
  });

  describe('findOne', () => {
    it('returns the item when it belongs to the caller household and is not deleted', async () => {
      const item = { item_id: 'i1', household_id: 'h1' };
      prisma.item.findFirst.mockResolvedValue(item);

      const result = await service.findOne('h1', 'i1');

      expect(result).toBe(item);
      expect(prisma.item.findFirst).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { item_id: 'i1', household_id: 'h1', deleted_at: null },
        }),
      );
    });

    it('throws NotFoundException for an item in another household', async () => {
      prisma.item.findFirst.mockResolvedValue(null);

      await expect(service.findOne('h1', 'i1')).rejects.toThrow(
        NotFoundException,
      );
    });

    it('throws NotFoundException for a soft-deleted item', async () => {
      prisma.item.findFirst.mockResolvedValue(null); // deleted_at: null filter excludes it

      await expect(service.findOne('h1', 'i1')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('remove', () => {
    it('soft-deletes by setting deleted_at', async () => {
      prisma.item.findFirst.mockResolvedValue({
        item_id: 'i1',
        household_id: 'h1',
      });
      prisma.item.update.mockResolvedValue({});

      await service.remove('h1', 'i1');

      expect(prisma.item.update).toHaveBeenCalledWith({
        where: { item_id: 'i1' },
        data: { deleted_at: expect.any(Date) },
      });
    });

    it('throws NotFoundException when the item does not exist in this household', async () => {
      prisma.item.findFirst.mockResolvedValue(null);

      await expect(service.remove('h1', 'i1')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('complete', () => {
    it('recalculates next_due_date relative to completion time for an INTERVAL item and logs history', async () => {
      const completedAt = new Date('2026-02-01T00:00:00.000Z');
      prisma.item.findFirst.mockResolvedValue({
        item_id: 'i1',
        household_id: 'h1',
        created_at: new Date('2026-01-01T00:00:00.000Z'),
        schedule: {
          tracking_mode: TrackingMode.INTERVAL,
          interval_days: 30,
          next_due_date: new Date('2026-01-05T00:00:00.000Z'),
        },
      });
      tx.itemHistory.create.mockResolvedValue({ history_id: 'h1' });
      tx.itemSchedule.update.mockResolvedValue({});

      await service.complete('h1', 'i1', 'u1', {
        completed_at: completedAt.toISOString(),
      });

      expect(tx.itemHistory.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            item_id: 'i1',
            completed_by: 'u1',
            completed_at: completedAt,
          }),
        }),
      );
      expect(tx.itemSchedule.update).toHaveBeenCalledWith({
        where: { item_id: 'i1' },
        data: {
          last_completed_at: completedAt,
          next_due_date: new Date('2026-03-03T00:00:00.000Z'),
        },
      });
      expect(reminderService.syncForItem).toHaveBeenCalledWith(
        tx,
        'i1',
        'h1',
        new Date('2026-03-03T00:00:00.000Z'),
        undefined,
      );
    });

    it('throws NotFoundException when the item does not exist in this household', async () => {
      prisma.item.findFirst.mockResolvedValue(null);

      await expect(service.complete('h1', 'i1', 'u1', {})).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
