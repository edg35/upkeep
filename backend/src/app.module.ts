import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { HouseholdModule } from './household/household.module';
import { CategoryModule } from './category/category.module';
import { ItemModule } from './item/item.module';
import { ReminderModule } from './reminder/reminder.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    AuthModule,
    PrismaModule,
    UsersModule,
    HouseholdModule,
    CategoryModule,
    ItemModule,
    ReminderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
