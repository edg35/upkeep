// household/household.module.ts
import { Module } from '@nestjs/common';
import { HouseholdMemberGuard } from './guards/household-member.guard';
import { HouseholdOwnerGuard } from './guards/household-owner.guard';
import { HouseholdController } from './household.controller';
import { ReminderModule } from '../reminder/reminder.module';
import { HouseholdService } from './household.service';

@Module({
  imports: [ReminderModule],
  controllers: [HouseholdController],
  providers: [HouseholdService, HouseholdMemberGuard, HouseholdOwnerGuard],
  exports: [HouseholdService, HouseholdMemberGuard, HouseholdOwnerGuard],
})
export class HouseholdModule {}
