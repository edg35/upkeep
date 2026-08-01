/* eslint-disable prettier/prettier */

import {
    BadRequestException,
    ConflictException,
    ForbiddenException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { randomBytes } from 'crypto';
import { PrismaService } from '../prisma/prisma.service';

const INVITE_EXPIRY_DAYS = 7;

@Injectable()
export class HouseholdService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, name: string) {
    const existing = await this.prisma.householdMember.findUnique({
      where: { user_id: userId },
    });
    if (existing) {
      throw new ConflictException('You already belong to a household.');
    }

    return this.prisma.$transaction(async (tx) => {
      const household = await tx.household.create({
        data: { name, created_by: userId },
      });
      await tx.householdMember.create({
        data: {
          user_id: userId,
          household_id: household.household_id,
          role: 'OWNER',
        },
      });
      return household;
    });
  }

  search(query: string) {
    return this.prisma.household.findMany({
      where: { name: { contains: query, mode: 'insensitive' } },
      select: { household_id: true, name: true },
      take: 20,
    });
  }

  // --- Invitations (targeted by email) ---

  async createInvitation(
    inviterId: string,
    householdId: string,
    email: string,
  ) {
    const code = randomBytes(16).toString('hex');
    const expires_at = new Date(
      Date.now() + INVITE_EXPIRY_DAYS * 24 * 60 * 60 * 1000,
    );

    return this.prisma.householdInvitation.upsert({
      where: { household_id_email: { household_id: householdId, email } },
      update: { code, status: 'PENDING', expires_at, invited_by: inviterId },
      create: {
        household_id: householdId,
        email,
        code,
        invited_by: inviterId,
        expires_at,
      },
    });
  }

  async acceptInvitation(userId: string, userEmail: string, code: string) {
    const alreadyMember = await this.prisma.householdMember.findUnique({
      where: { user_id: userId },
    });
    if (alreadyMember)
      throw new ConflictException('You already belong to a household.');

    const invitation = await this.prisma.householdInvitation.findUnique({
      where: { code },
    });
    if (!invitation) throw new NotFoundException('Invitation not found.');
    if (invitation.status !== 'PENDING') {
      throw new ConflictException('This invitation is no longer valid.');
    }
    if (invitation.expires_at < new Date()) {
      throw new ConflictException('This invitation has expired.');
    }
    if (invitation.email.toLowerCase() !== userEmail.toLowerCase()) {
      throw new ForbiddenException(
        'This invitation was sent to a different email address.',
      );
    }

    return this.prisma.$transaction(async (tx) => {
      await tx.householdMember.create({
        data: {
          user_id: userId,
          household_id: invitation.household_id,
          role: 'MEMBER',
        },
      });
      await tx.householdInvitation.update({
        where: { invitation_id: invitation.invitation_id },
        data: { status: 'ACCEPTED' },
      });
      return tx.household.findUnique({
        where: { household_id: invitation.household_id },
      });
    });
  }

  // --- Join requests (initiated by the requester, e.g. after search) ---

  async requestToJoin(userId: string, householdId: string) {
    const alreadyMember = await this.prisma.householdMember.findUnique({
      where: { user_id: userId },
    });
    if (alreadyMember)
      throw new ConflictException('You already belong to a household.');

    return this.prisma.householdJoinRequest.upsert({
      where: {
        household_id_requested_by: {
          household_id: householdId,
          requested_by: userId,
        },
      },
      update: { status: 'PENDING', created_at: new Date() },
      create: { household_id: householdId, requested_by: userId },
    });
  }

  listJoinRequests(householdId: string) {
    return this.prisma.householdJoinRequest.findMany({
      where: { household_id: householdId, status: 'PENDING' },
      include: {
        requester: { select: { user_id: true, name: true, email: true } },
      },
    });
  }

  async approveJoinRequest(householdId: string, requesterId: string) {
    const request = await this.prisma.householdJoinRequest.findUnique({
      where: {
        household_id_requested_by: {
          household_id: householdId,
          requested_by: requesterId,
        },
      },
    });
    if (!request || request.status !== 'PENDING') {
      throw new NotFoundException('No pending join request found.');
    }

    const alreadyMember = await this.prisma.householdMember.findUnique({
      where: { user_id: requesterId },
    });
    if (alreadyMember) {
      throw new ConflictException('That user already belongs to a household.');
    }

    return this.prisma.$transaction(async (tx) => {
      await tx.householdMember.create({
        data: {
          user_id: requesterId,
          household_id: householdId,
          role: 'MEMBER',
        },
      });
      return tx.householdJoinRequest.update({
        where: {
          household_id_requested_by: {
            household_id: householdId,
            requested_by: requesterId,
          },
        },
        data: { status: 'ACCEPTED' },
      });
    });
  }

  declineJoinRequest(householdId: string, requesterId: string) {
    return this.prisma.householdJoinRequest.update({
      where: {
        household_id_requested_by: {
          household_id: householdId,
          requested_by: requesterId,
        },
      },
      data: { status: 'DECLINED' },
    });
  }

  // --- Leave / transfer ---

  async leave(userId: string) {
    const membership = await this.prisma.householdMember.findUnique({
      where: { user_id: userId },
    });
    if (!membership) throw new NotFoundException('You are not in a household.');

    if (membership.role === 'OWNER') {
      const memberCount = await this.prisma.householdMember.count({
        where: { household_id: membership.household_id },
      });
      if (memberCount > 1) {
        throw new ConflictException(
          'Transfer ownership to another member before leaving.',
        );
      }
    }

    return this.prisma.householdMember.delete({ where: { user_id: userId } });
  }

  async transferOwnership(
    currentOwnerId: string,
    householdId: string,
    newOwnerId: string,
  ) {
    const newOwnerMembership = await this.prisma.householdMember.findUnique({
      where: { user_id: newOwnerId },
    });
    if (
      !newOwnerMembership ||
      newOwnerMembership.household_id !== householdId
    ) {
      throw new BadRequestException(
        'The new owner must already be a member of this household.',
      );
    }

    return this.prisma.$transaction([
      this.prisma.householdMember.update({
        where: { user_id: currentOwnerId },
        data: { role: 'MEMBER' },
      }),
      this.prisma.householdMember.update({
        where: { user_id: newOwnerId },
        data: { role: 'OWNER' },
      }),
    ]);
  }
}
