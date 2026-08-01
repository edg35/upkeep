/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class HouseholdMemberGuard implements CanActivate {
  constructor(private readonly prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId = request.user?.user_id;
    if (!userId) throw new UnauthorizedException();

    const membership = await this.prisma.householdMember.findUnique({
      where: { user_id: userId },
    });

    if (!membership)
      throw new ForbiddenException('User is not a member of any household');

    // Attach membership and household information to the request object for further use
    request.membership = membership;
    request.household = { household_id: membership.household_id };

    return true;
  }
}
