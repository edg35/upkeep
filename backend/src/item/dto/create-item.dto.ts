// item/dto/create-item.dto.ts
import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { ItemType } from '../../../generated';
import { CreateItemScheduleDto } from './item-schedule.dto';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  name: string;

  @IsUUID()
  category_id: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  icon?: string;

  @IsEnum(ItemType)
  item_type: ItemType;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  notes?: string;

  @IsOptional()
  @IsUrl()
  purchase_link?: string;

  @ValidateNested()
  @Type(() => CreateItemScheduleDto)
  schedule: CreateItemScheduleDto;
}
