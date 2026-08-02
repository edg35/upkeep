import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { HouseholdModule } from './household/household.module';
import { CategoryModule } from './category/category.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    UsersModule,
    HouseholdModule,
    CategoryModule,
    ItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
