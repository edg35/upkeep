import { Module } from '@nestjs/common';
import { DeviceController } from './device.controller';
import { DeviceTokenService } from './device-token.service';
import { fcmProvider } from './fcm.provider';
import { NotificationService } from './notification.service';

@Module({
  controllers: [DeviceController],
  providers: [DeviceTokenService, fcmProvider, NotificationService],
  exports: [DeviceTokenService, NotificationService],
})
export class NotificationModule {}
