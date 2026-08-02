/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
// item/item.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentHousehold } from '../household/decorators/current-household.decorator';
import { HouseholdMemberGuard } from '../household/guards/household-member.guard';
import { CompleteItemDto } from './dto/complete-item.dto';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemService } from './item.service';

@UseGuards(JwtAuthGuard, HouseholdMemberGuard)
@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Post()
  create(
    @CurrentHousehold() household,
    @CurrentUser() user,
    @Body() dto: CreateItemDto,
  ) {
    return this.itemService.create(household.household_id, user.user_id, dto);
  }

  @Get()
  findAll(
    @CurrentHousehold() household,
    @Query('category_id') categoryId?: string,
    @Query('item_type') itemType?: string,
  ) {
    return this.itemService.findAll(household.household_id, {
      category_id: categoryId,
      item_type: itemType,
    });
  }

  @Get(':id')
  findOne(@CurrentHousehold() household, @Param('id') id: string) {
    return this.itemService.findOne(household.household_id, id);
  }

  @Patch(':id')
  update(
    @CurrentHousehold() household,
    @Param('id') id: string,
    @Body() dto: UpdateItemDto,
  ) {
    return this.itemService.update(household.household_id, id, dto);
  }

  @Delete(':id')
  remove(@CurrentHousehold() household, @Param('id') id: string) {
    return this.itemService.remove(household.household_id, id);
  }

  @Post(':id/complete')
  complete(
    @CurrentHousehold() household,
    @CurrentUser() user,
    @Param('id') id: string,
    @Body() dto: CompleteItemDto,
  ) {
    return this.itemService.complete(
      household.household_id,
      id,
      user.user_id,
      dto,
    );
  }
}
