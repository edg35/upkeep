import { ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryService;
  let prisma: {
    category: {
      create: jest.Mock;
      findMany: jest.Mock;
      findFirst: jest.Mock;
      update: jest.Mock;
      delete: jest.Mock;
    };
    item: { count: jest.Mock };
  };

  beforeEach(() => {
    prisma = {
      category: {
        create: jest.fn(),
        findMany: jest.fn(),
        findFirst: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
      item: { count: jest.fn() },
    };
    service = new CategoryService(prisma as unknown as PrismaService);
  });

  describe('create', () => {
    it('creates a category scoped to the caller household', async () => {
      prisma.category.create.mockResolvedValue({ category_id: 'c1' });

      await service.create('h1', { name: 'Filters' });

      expect(prisma.category.create).toHaveBeenCalledWith({
        data: { name: 'Filters', household_id: 'h1' },
      });
    });
  });

  describe('findAll', () => {
    it('lists categories scoped to the caller household', async () => {
      prisma.category.findMany.mockResolvedValue([]);

      await service.findAll('h1');

      expect(prisma.category.findMany).toHaveBeenCalledWith({
        where: { household_id: 'h1' },
      });
    });
  });

  describe('findOne', () => {
    it('returns the category when it belongs to the caller household', async () => {
      const category = { category_id: 'c1', household_id: 'h1' };
      prisma.category.findFirst.mockResolvedValue(category);

      const result = await service.findOne('h1', 'c1');

      expect(result).toBe(category);
      expect(prisma.category.findFirst).toHaveBeenCalledWith({
        where: { category_id: 'c1', household_id: 'h1' },
      });
    });

    it('throws NotFoundException when the category belongs to a different household', async () => {
      prisma.category.findFirst.mockResolvedValue(null);

      await expect(service.findOne('h1', 'c1')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('updates the category after confirming it belongs to the caller household', async () => {
      prisma.category.findFirst.mockResolvedValue({
        category_id: 'c1',
        household_id: 'h1',
      });
      prisma.category.update.mockResolvedValue({ category_id: 'c1' });

      await service.update('h1', 'c1', { name: 'Renamed' });

      expect(prisma.category.update).toHaveBeenCalledWith({
        where: { category_id: 'c1' },
        data: { name: 'Renamed' },
      });
    });

    it('throws NotFoundException without updating when the category is in another household', async () => {
      prisma.category.findFirst.mockResolvedValue(null);

      await expect(
        service.update('h1', 'c1', { name: 'Renamed' }),
      ).rejects.toThrow(NotFoundException);
      expect(prisma.category.update).not.toHaveBeenCalled();
    });
  });

  describe('remove', () => {
    it('deletes the category when no active items reference it', async () => {
      prisma.category.findFirst.mockResolvedValue({
        category_id: 'c1',
        household_id: 'h1',
      });
      prisma.item.count.mockResolvedValue(0);
      prisma.category.delete.mockResolvedValue({ category_id: 'c1' });

      await service.remove('h1', 'c1');

      expect(prisma.item.count).toHaveBeenCalledWith({
        where: { category_id: 'c1', household_id: 'h1', deleted_at: null },
      });
      expect(prisma.category.delete).toHaveBeenCalledWith({
        where: { category_id: 'c1' },
      });
    });

    it('throws ConflictException and does not delete when active items reference it', async () => {
      prisma.category.findFirst.mockResolvedValue({
        category_id: 'c1',
        household_id: 'h1',
      });
      prisma.item.count.mockResolvedValue(2);

      await expect(service.remove('h1', 'c1')).rejects.toThrow(
        ConflictException,
      );
      expect(prisma.category.delete).not.toHaveBeenCalled();
    });

    it('throws NotFoundException when the category is in another household', async () => {
      prisma.category.findFirst.mockResolvedValue(null);

      await expect(service.remove('h1', 'c1')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
