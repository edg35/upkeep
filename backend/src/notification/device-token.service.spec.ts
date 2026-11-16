/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismaService } from '../prisma/prisma.service';
import { DeviceTokenService } from './device-token.service';

describe('DeviceTokenService', () => {
  let service: DeviceTokenService;
  let prisma: {
    deviceToken: {
      upsert: jest.Mock;
      deleteMany: jest.Mock;
      findMany: jest.Mock;
    };
  };

  beforeEach(() => {
    prisma = {
      deviceToken: {
        upsert: jest.fn(),
        deleteMany: jest.fn(),
        findMany: jest.fn(),
      },
    };
    service = new DeviceTokenService(prisma as unknown as PrismaService);
  });

  it('reassigns an existing token to the new user', async () => {
    await service.register('u2', 'tok', 'IOS');
    expect(prisma.deviceToken.upsert).toHaveBeenCalledWith({
      where: { token: 'tok' },
      create: { token: 'tok', user_id: 'u2', platform: 'IOS' },
      update: expect.objectContaining({
        user_id: 'u2',
        platform: 'IOS',
        last_seen_at: expect.any(Date),
      }),
    });
  });

  it("unregister only deletes the caller's token", async () => {
    await service.unregister('u1', 'tok');
    expect(prisma.deviceToken.deleteMany).toHaveBeenCalledWith({
      where: { token: 'tok', user_id: 'u1' },
    });
  });

  it('tokensFor returns token strings', async () => {
    prisma.deviceToken.findMany.mockResolvedValue([
      { token: 'a' },
      { token: 'b' },
    ]);
    await expect(service.tokensFor('u1')).resolves.toEqual(['a', 'b']);
  });

  it('removeTokens deletes by token list and skips empty', async () => {
    await service.removeTokens([]);
    expect(prisma.deviceToken.deleteMany).not.toHaveBeenCalled();
    await service.removeTokens(['a']);
    expect(prisma.deviceToken.deleteMany).toHaveBeenCalledWith({
      where: { token: { in: ['a'] } },
    });
  });
});
