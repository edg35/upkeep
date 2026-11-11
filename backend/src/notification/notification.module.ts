import { Module } from '@nestjs/common';
import { DeviceController } from './device.controller';
import { DeviceTokenService } from './device-token.service';

@Module({
  controllers: [DeviceController],
  providers: [DeviceTokenService],
  exports: [DeviceTokenService],
})
export class NotificationModule {}
