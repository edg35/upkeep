import { PrismaClient } from '../../generated';

let counter = 0;

export async function seedUserWithHousehold(
  prisma: PrismaClient,
  overrides: { email?: string; name?: string; householdName?: string } = {},
) {
  counter += 1;
  const user = await prisma.user.create({
    data: {
      email: overrides.email ?? `test-user-${counter}@example.com`,
      name: overrides.name ?? 'Test User',
    },
  });
  const household = await prisma.household.create({
    data: {
      name: overrides.householdName ?? 'Test Household',
      created_by: user.user_id,
      invite_code: `TST-${counter.toString().padStart(4, '0')}`,
    },
  });
  await prisma.householdMember.create({
    data: {
      user_id: user.user_id,
      household_id: household.household_id,
      role: 'OWNER',
    },
  });
  return { user, household };
}
