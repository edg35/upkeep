/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { DeviceTokenService } from './device-token.service';
import { RegisterDeviceDto } from './dto/register-device.dto';
import { UnregisterDeviceDto } from './dto/unregister-device.dto';

@UseGuards(JwtAuthGuard)
@Controller('devices')
export class DeviceController {
  constructor(private deviceTokens: DeviceTokenService) {}

  @Post()
  @HttpCode(204)
  async register(@CurrentUser() user, @Body() dto: RegisterDeviceDto) {
    await this.deviceTokens.register(user.user_id, dto.token, dto.platform);
  }

  @Delete()
  @HttpCode(204)
  async unregister(@CurrentUser() user, @Body() dto: UnregisterDeviceDto) {
    await this.deviceTokens.unregister(user.user_id, dto.token);
  }
}
