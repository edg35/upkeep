import { IsEnum, IsString, MaxLength } from 'class-validator';
import { DevicePlatform } from '../../../generated';

export class RegisterDeviceDto {
  @IsString()
  @MaxLength(4096)
  token: string;

  @IsEnum(DevicePlatform)
  platform: DevicePlatform;
}
