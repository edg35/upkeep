// item/item.module.ts
import { Module } from '@nestjs/common';
import { HouseholdModule } from '../household/household.module';
import { ReminderModule } from '../reminder/reminder.module';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

@Module({
  imports: [HouseholdModule, ReminderModule],
  controllers: [ItemController],
  providers: [ItemService],
  exports: [ItemService],
})
export class ItemModule {}
