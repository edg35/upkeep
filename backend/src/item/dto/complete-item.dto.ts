// item/dto/complete-item.dto.ts
import { IsISO8601, IsOptional, IsString, MaxLength } from 'class-validator';

export class CompleteItemDto {
  @IsOptional()
  @IsISO8601()
  completed_at?: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  notes?: string;
}
