// household/dto/request-to-join.dto.ts
import { IsUUID } from 'class-validator';

export class RequestToJoinDto {
  @IsUUID()
  household_id: string;
}
