import { IsString, MaxLength } from 'class-validator';

export class UnregisterDeviceDto {
  @IsString()
  @MaxLength(4096)
  token: string;
}
