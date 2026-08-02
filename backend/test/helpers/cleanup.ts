import { PrismaClient } from '../../generated';

export async function cleanupDb(prisma: PrismaClient): Promise<void> {
  await prisma.itemHistory.deleteMany();
  await prisma.reminder.deleteMany();
  await prisma.itemSchedule.deleteMany();
  await prisma.item.deleteMany();
  await prisma.category.deleteMany();
  await prisma.householdMember.deleteMany();
  await prisma.householdJoinRequest.deleteMany();
  await prisma.householdInvitation.deleteMany();
  await prisma.household.deleteMany();
  await prisma.refreshToken.deleteMany();
  await prisma.user.deleteMany();
}
