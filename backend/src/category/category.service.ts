// category/category.service.ts
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  create(householdId: string, dto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: { ...dto, household_id: householdId },
    });
  }

  findAll(householdId: string) {
    return this.prisma.category.findMany({
      where: { household_id: householdId },
    });
  }

  async findOne(householdId: string, categoryId: string) {
    const category = await this.prisma.category.findFirst({
      where: { category_id: categoryId, household_id: householdId },
    });
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }

  async update(
    householdId: string,
    categoryId: string,
    dto: UpdateCategoryDto,
  ) {
    await this.findOne(householdId, categoryId);
    return this.prisma.category.update({
      where: { category_id: categoryId },
      data: dto,
    });
  }

  async remove(householdId: string, categoryId: string) {
    await this.findOne(householdId, categoryId);

    const activeItemCount = await this.prisma.item.count({
      where: {
        category_id: categoryId,
        household_id: householdId,
        deleted_at: null,
      },
    });
    if (activeItemCount > 0) {
      throw new ConflictException('Category is in use by one or more items');
    }

    return this.prisma.category.delete({ where: { category_id: categoryId } });
  }
}
