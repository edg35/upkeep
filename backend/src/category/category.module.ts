// category/category.module.ts
import { Module } from '@nestjs/common';
import { HouseholdModule } from '../household/household.module';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [HouseholdModule],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
