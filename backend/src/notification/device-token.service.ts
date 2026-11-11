import { Injectable } from '@nestjs/common';
import { DevicePlatform } from '../../generated';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DeviceTokenService {
  constructor(private prisma: PrismaService) {}

  async register(
    userId: string,
    token: string,
    platform: DevicePlatform,
  ): Promise<void> {
    await this.prisma.deviceToken.upsert({
      where: { token },
      create: { token, user_id: userId, platform },
      update: { user_id: userId, platform, last_seen_at: new Date() },
    });
  }

  async unregister(userId: string, token: string): Promise<void> {
    await this.prisma.deviceToken.deleteMany({
      where: { token, user_id: userId },
    });
  }

  async tokensFor(userId: string): Promise<string[]> {
    const rows = await this.prisma.deviceToken.findMany({
      where: { user_id: userId },
      select: { token: true },
    });
    return rows.map((r) => r.token);
  }

  async removeTokens(tokens: string[]): Promise<void> {
    if (tokens.length === 0) return;
    await this.prisma.deviceToken.deleteMany({
      where: { token: { in: tokens } },
    });
  }
}
