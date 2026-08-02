// item/dto/update-item.dto.ts
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { ItemType } from '../../../generated';
import { UpdateItemScheduleDto } from './item-schedule.dto';

export class UpdateItemDto {
  @IsOptional()
  @IsString()
  @MaxLength(150)
  name?: string;

  @IsOptional()
  @IsUUID()
  category_id?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  icon?: string;

  @IsOptional()
  @IsEnum(ItemType)
  item_type?: ItemType;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  notes?: string;

  @IsOptional()
  @IsUrl()
  purchase_link?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateItemScheduleDto)
  schedule?: UpdateItemScheduleDto;
}
