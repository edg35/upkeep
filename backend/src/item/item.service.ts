// item/item.service.ts
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ItemSchedule, ItemType } from '../../generated';
import { PrismaService } from '../prisma/prisma.service';
import { ReminderService } from '../reminder/reminder.service';
import { CompleteItemDto } from './dto/complete-item.dto';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import {
  computeInitialDueDate,
  computeNextDueDateOnCompletion,
} from './schedule.util';

interface ItemFilters {
  category_id?: string;
  item_type?: string;
}

@Injectable()
export class ItemService {
  constructor(
    private prisma: PrismaService,
    private reminderService: ReminderService,
  ) {}

  private async assertCategoryInHousehold(
    householdId: string,
    categoryId: string,
  ) {
    const category = await this.prisma.category.findFirst({
      where: { category_id: categoryId, household_id: householdId },
    });
    if (!category) {
      throw new BadRequestException(
        'category_id does not belong to your household',
      );
    }
  }

  async create(householdId: string, userId: string, dto: CreateItemDto) {
    await this.assertCategoryInHousehold(householdId, dto.category_id);

    const now = new Date();
    const nextDueDate = computeInitialDueDate(
      {
        tracking_mode: dto.schedule.tracking_mode,
        interval_days: dto.schedule.interval_days,
        fixed_due_date: dto.schedule.fixed_due_date
          ? new Date(dto.schedule.fixed_due_date)
          : null,
        recurrence_rule: dto.schedule.recurrence_rule,
      },
      now,
    );

    return this.prisma.$transaction(async (tx) => {
      const item = await tx.item.create({
        data: {
          name: dto.name,
          category_id: dto.category_id,
          household_id: householdId,
          icon: dto.icon,
          item_type: dto.item_type,
          notes: dto.notes,
          purchase_link: dto.purchase_link,
          created_by: userId,
        },
      });

      const schedule = await tx.itemSchedule.create({
        data: {
          item_id: item.item_id,
          tracking_mode: dto.schedule.tracking_mode,
          interval_days: dto.schedule.interval_days,
          fixed_due_date: dto.schedule.fixed_due_date
            ? new Date(dto.schedule.fixed_due_date)
            : null,
          recurrence_rule: dto.schedule.recurrence_rule,
          lead_time_days: dto.schedule.lead_time_days,
          next_due_date: nextDueDate,
        },
      });

      await this.reminderService.syncForItem(
        tx,
        item.item_id,
        householdId,
        nextDueDate,
        dto.schedule.lead_time_days,
      );

      return { ...item, schedule };
    });
  }

  private readonly latestCompletionInclude = {
    schedule: true,
    category: true,
    histories: {
      orderBy: { completed_at: 'desc' as const },
      take: 1,
      select: {
        completed_at: true,
        completed_by: true,
        completer: { select: { name: true } },
      },
    },
  };

  findAll(householdId: string, filters: ItemFilters) {
    return this.prisma.item.findMany({
      where: {
        household_id: householdId,
        deleted_at: null,
        ...(filters.category_id ? { category_id: filters.category_id } : {}),
        ...(filters.item_type
          ? { item_type: filters.item_type as ItemType }
          : {}),
      },
      include: this.latestCompletionInclude,
    });
  }

  async findOne(householdId: string, itemId: string) {
    const item = await this.prisma.item.findFirst({
      where: { item_id: itemId, household_id: householdId, deleted_at: null },
      include: this.latestCompletionInclude,
    });
    if (!item) throw new NotFoundException('Item not found');
    return item;
  }

  async update(householdId: string, itemId: string, dto: UpdateItemDto) {
    await this.findOne(householdId, itemId);

    if (dto.category_id) {
      await this.assertCategoryInHousehold(householdId, dto.category_id);
    }

    return this.prisma.$transaction(async (tx) => {
      const item = await tx.item.update({
        where: { item_id: itemId },
        data: {
          name: dto.name,
          category_id: dto.category_id,
          icon: dto.icon,
          item_type: dto.item_type,
          notes: dto.notes,
          purchase_link: dto.purchase_link,
        },
      });

      let schedule: ItemSchedule | undefined;
      if (dto.schedule) {
        const existing = await tx.itemSchedule.findUnique({
          where: { item_id: itemId },
        });
        const trackingMode =
          dto.schedule.tracking_mode ?? existing!.tracking_mode;
        const nextDueDate = computeInitialDueDate(
          {
            tracking_mode: trackingMode,
            interval_days:
              dto.schedule.interval_days ?? existing!.interval_days,
            fixed_due_date: dto.schedule.fixed_due_date
              ? new Date(dto.schedule.fixed_due_date)
              : existing!.fixed_due_date,
            recurrence_rule:
              dto.schedule.recurrence_rule ?? existing!.recurrence_rule,
          },
          new Date(),
        );

        const leadTimeDays =
          dto.schedule.lead_time_days ?? existing!.lead_time_days;

        schedule = await tx.itemSchedule.update({
          where: { item_id: itemId },
          data: {
            tracking_mode: trackingMode,
            interval_days: dto.schedule.interval_days,
            fixed_due_date: dto.schedule.fixed_due_date
              ? new Date(dto.schedule.fixed_due_date)
              : undefined,
            recurrence_rule: dto.schedule.recurrence_rule,
            lead_time_days: dto.schedule.lead_time_days,
            next_due_date: nextDueDate,
          },
        });

        await this.reminderService.syncForItem(
          tx,
          itemId,
          householdId,
          nextDueDate,
          leadTimeDays,
        );
      }

      return { ...item, ...(schedule ? { schedule } : {}) };
    });
  }

  async remove(householdId: string, itemId: string) {
    await this.findOne(householdId, itemId);
    return this.prisma.item.update({
      where: { item_id: itemId },
      data: { deleted_at: new Date() },
    });
  }

  async complete(
    householdId: string,
    itemId: string,
    userId: string,
    dto: CompleteItemDto,
  ) {
    const item = await this.findOne(householdId, itemId);
    if (!item.schedule) {
      throw new NotFoundException('This item has no schedule configured');
    }
    const schedule = item.schedule;
    const completedAt = dto.completed_at
      ? new Date(dto.completed_at)
      : new Date();

    return this.prisma.$transaction(async (tx) => {
      const history = await tx.itemHistory.create({
        data: {
          item_id: itemId,
          completed_at: completedAt,
          completed_by: userId,
          notes: dto.notes,
        },
      });

      const nextDueDate = computeNextDueDateOnCompletion(
        {
          tracking_mode: schedule.tracking_mode,
          interval_days: schedule.interval_days,
          recurrence_rule: schedule.recurrence_rule,
          next_due_date: schedule.next_due_date,
        },
        completedAt,
        item.created_at,
      );

      const updatedSchedule = await tx.itemSchedule.update({
        where: { item_id: itemId },
        data: { last_completed_at: completedAt, next_due_date: nextDueDate },
      });

      await this.reminderService.syncForItem(
        tx,
        itemId,
        householdId,
        nextDueDate,
        schedule.lead_time_days,
      );

      return { item: { ...item, schedule: updatedSchedule }, history };
    });
  }
}
