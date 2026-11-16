import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { signAccessToken } from './helpers/auth';
import { cleanupDb } from './helpers/cleanup';

describe('DeviceController (e2e)', () => {
  let app: INestApplication<App>;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
    prisma = app.get(PrismaService);
  });

  afterEach(async () => {
    await cleanupDb(prisma);
  });

  afterAll(async () => {
    await app.close();
  });

  async function makeUser(email: string) {
    const user = await prisma.user.create({ data: { email, name: 'U' } });
    const auth = {
      Authorization: `Bearer ${signAccessToken(user.user_id, user.email)}`,
    };
    return { user, auth };
  }

  it('registers a device token', async () => {
    const { user, auth } = await makeUser('d1@example.com');
    await request(app.getHttpServer())
      .post('/devices')
      .set(auth)
      .send({ token: 'tok-1', platform: 'IOS' })
      .expect(204);
    const row = await prisma.deviceToken.findUnique({
      where: { token: 'tok-1' },
    });
    expect(row?.user_id).toBe(user.user_id);
    expect(row?.platform).toBe('IOS');
  });

  it('moves the token to a second user who re-registers it', async () => {
    const a = await makeUser('d2a@example.com');
    const b = await makeUser('d2b@example.com');
    await request(app.getHttpServer())
      .post('/devices')
      .set(a.auth)
      .send({ token: 'tok-2', platform: 'ANDROID' })
      .expect(204);
    await request(app.getHttpServer())
      .post('/devices')
      .set(b.auth)
      .send({ token: 'tok-2', platform: 'ANDROID' })
      .expect(204);
    const row = await prisma.deviceToken.findUnique({
      where: { token: 'tok-2' },
    });
    expect(row?.user_id).toBe(b.user.user_id);
  });

  it('does not delete a token when a non-owner unregisters', async () => {
    const a = await makeUser('d3a@example.com');
    const b = await makeUser('d3b@example.com');
    await request(app.getHttpServer())
      .post('/devices')
      .set(a.auth)
      .send({ token: 'tok-3', platform: 'IOS' })
      .expect(204);
    await request(app.getHttpServer())
      .delete('/devices')
      .set(b.auth)
      .send({ token: 'tok-3' })
      .expect(204);
    expect(
      await prisma.deviceToken.findUnique({ where: { token: 'tok-3' } }),
    ).not.toBeNull();
  });

  it('deletes the token when the owner unregisters', async () => {
    const a = await makeUser('d4@example.com');
    await request(app.getHttpServer())
      .post('/devices')
      .set(a.auth)
      .send({ token: 'tok-4', platform: 'IOS' })
      .expect(204);
    await request(app.getHttpServer())
      .delete('/devices')
      .set(a.auth)
      .send({ token: 'tok-4' })
      .expect(204);
    expect(
      await prisma.deviceToken.findUnique({ where: { token: 'tok-4' } }),
    ).toBeNull();
  });

  it('rejects unauthenticated requests with 401', async () => {
    await request(app.getHttpServer())
      .post('/devices')
      .send({ token: 'x', platform: 'IOS' })
      .expect(401);
    await request(app.getHttpServer())
      .delete('/devices')
      .send({ token: 'x' })
      .expect(401);
  });

  it('rejects an invalid platform with 400', async () => {
    const a = await makeUser('d6@example.com');
    await request(app.getHttpServer())
      .post('/devices')
      .set(a.auth)
      .send({ token: 'tok-6', platform: 'WEB' })
      .expect(400);
  });
});
