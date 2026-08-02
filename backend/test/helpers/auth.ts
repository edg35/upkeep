import { JwtService } from '@nestjs/jwt';

const jwtService = new JwtService();

export function signAccessToken(userId: string, email: string): string {
  return jwtService.sign(
    { sub: userId, email },
    { secret: process.env.JWT_ACCESS_SECRET, expiresIn: '15m' },
  );
}
