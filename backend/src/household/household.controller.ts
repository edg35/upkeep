/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentHousehold } from './decorators/current-household.decorator';
import { CreateHouseholdDto } from './dto/create-household.dto';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { RequestToJoinDto } from './dto/request-to-join.dto';
import { TransferOwnershipDto } from './dto/transfer-ownership.dto';
import { HouseholdMemberGuard } from './guards/household-member.guard';
import { HouseholdOwnerGuard } from './guards/household-owner.guard';
import { HouseholdService } from './household.service';

@UseGuards(JwtAuthGuard)
@Controller('households')
export class HouseholdController {
  constructor(private householdService: HouseholdService) {}

  @Post()
  create(@CurrentUser() user, @Body() dto: CreateHouseholdDto) {
    return this.householdService.create(user.user_id, dto.name);
  }

  @Get('search')
  search(@Query('q') query: string) {
    return this.householdService.search(query ?? '');
  }

  @UseGuards(HouseholdMemberGuard)
  @Post('invitations')
  createInvitation(
    @CurrentUser() user,
    @CurrentHousehold() household,
    @Body() dto: CreateInvitationDto,
  ) {
    return this.householdService.createInvitation(
      user.user_id,
      household.id,
      dto.email,
    );
  }

  @Post('invitations/:code/accept')
  acceptInvitation(@CurrentUser() user, @Param('code') code: string) {
    return this.householdService.acceptInvitation(
      user.user_id,
      user.email,
      code,
    );
  }

  @Post('join-requests')
  requestToJoin(@CurrentUser() user, @Body() dto: RequestToJoinDto) {
    return this.householdService.requestToJoin(user.user_id, dto.household_id);
  }

  @UseGuards(HouseholdMemberGuard, HouseholdOwnerGuard)
  @Get('join-requests')
  getJoinRequests(@CurrentHousehold() household) {
    return this.householdService.listJoinRequests(household.id);
  }

  @UseGuards(HouseholdMemberGuard, HouseholdOwnerGuard)
  @Post('join-requests/:requesterId/approve')
  approveJoinRequest(
    @CurrentHousehold() household,
    @Param('requesterId') requesterId: string,
  ) {
    return this.householdService.approveJoinRequest(household.id, requesterId);
  }

  @UseGuards(HouseholdMemberGuard, HouseholdOwnerGuard)
  @Post('join-requests/:requesterId/decline')
  declineJoinRequest(
    @CurrentHousehold() household,
    @Param('requesterId') requesterId: string,
  ) {
    return this.householdService.declineJoinRequest(household.id, requesterId);
  }

  @UseGuards(HouseholdMemberGuard)
  @Delete('membership')
  leave(@CurrentUser() user) {
    return this.householdService.leave(user.user_id);
  }

  @UseGuards(HouseholdMemberGuard, HouseholdOwnerGuard)
  @Patch('transfer-ownership')
  transferOwnership(
    @CurrentUser() user,
    @CurrentHousehold() household,
    @Body() dto: TransferOwnershipDto,
  ) {
    return this.householdService.transferOwnership(
      user.user_id,
      household.id,
      dto.new_owner_user_id,
    );
  }
}
