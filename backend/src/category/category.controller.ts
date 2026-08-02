/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
// category/category.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentHousehold } from '../household/decorators/current-household.decorator';
import { HouseholdMemberGuard } from '../household/guards/household-member.guard';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@UseGuards(JwtAuthGuard, HouseholdMemberGuard)
@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  create(@CurrentHousehold() household, @Body() dto: CreateCategoryDto) {
    return this.categoryService.create(household.household_id, dto);
  }

  @Get()
  findAll(@CurrentHousehold() household) {
    return this.categoryService.findAll(household.household_id);
  }

  @Get(':id')
  findOne(@CurrentHousehold() household, @Param('id') id: string) {
    return this.categoryService.findOne(household.household_id, id);
  }

  @Patch(':id')
  update(
    @CurrentHousehold() household,
    @Param('id') id: string,
    @Body() dto: UpdateCategoryDto,
  ) {
    return this.categoryService.update(household.household_id, id, dto);
  }

  @Delete(':id')
  remove(@CurrentHousehold() household, @Param('id') id: string) {
    return this.categoryService.remove(household.household_id, id);
  }
}
