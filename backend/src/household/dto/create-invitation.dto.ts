// household/dto/create-invitation.dto.ts
import { IsEmail } from 'class-validator';

export class CreateInvitationDto {
  @IsEmail()
  email: string;
}
