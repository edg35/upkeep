/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class HouseholdOwnerGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    if (!request.membership)
      throw new Error(
        'Membership information is missing from the request object',
      );
    if (request.membership.role !== 'OWNER')
      throw new ForbiddenException(
        'Only the household owner can perform this action',
      );
    return true;
  }
}
