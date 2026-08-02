/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { signAccessToken } from './helpers/auth';
import { cleanupDb } from './helpers/cleanup';
import { seedUserWithHousehold } from './helpers/seed';

describe('CategoryController (e2e)', () => {
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

  it('rejects requests with no JWT', async () => {
    await request(app.getHttpServer()).get('/categories').expect(401);
  });

  it('rejects requests from a user with no household membership', async () => {
    const user = await prisma.user.create({
      data: { email: 'lonely@example.com', name: 'Lonely User' },
    });
    const token = signAccessToken(user.user_id, user.email);

    await request(app.getHttpServer())
      .get('/categories')
      .set('Authorization', `Bearer ${token}`)
      .expect(403);
  });

  it('supports the category CRUD happy path, and blocks then allows delete around in-use items', async () => {
    const { user, household } = await seedUserWithHousehold(prisma);
    const token = signAccessToken(user.user_id, user.email);
    const auth = { Authorization: `Bearer ${token}` };

    const createRes = await request(app.getHttpServer())
      .post('/categories')
      .set(auth)
      .send({ name: 'Filters', color: '#ff0000' })
      .expect(201);
    const categoryId = createRes.body.category_id;
    expect(createRes.body.household_id).toBe(household.household_id);

    await request(app.getHttpServer())
      .get('/categories')
      .set(auth)
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveLength(1);
      });

    await request(app.getHttpServer())
      .patch(`/categories/${categoryId}`)
      .set(auth)
      .send({ name: 'HVAC Filters' })
      .expect(200)
      .expect((res) => {
        expect(res.body.name).toBe('HVAC Filters');
      });

    const item = await prisma.item.create({
      data: {
        name: 'Furnace filter',
        category_id: categoryId,
        household_id: household.household_id,
        item_type: 'MAINTENANCE',
        created_by: user.user_id,
      },
    });

    await request(app.getHttpServer())
      .delete(`/categories/${categoryId}`)
      .set(auth)
      .expect(409);

    await prisma.item.delete({ where: { item_id: item.item_id } });

    await request(app.getHttpServer())
      .delete(`/categories/${categoryId}`)
      .set(auth)
      .expect(200);
  });

  it('returns 404 for a category belonging to a different household', async () => {
    const seedA = await seedUserWithHousehold(prisma);
    const seedB = await seedUserWithHousehold(prisma);
    const tokenB = signAccessToken(seedB.user.user_id, seedB.user.email);

    const category = await prisma.category.create({
      data: { name: 'A only', household_id: seedA.household.household_id },
    });

    await request(app.getHttpServer())
      .get(`/categories/${category.category_id}`)
      .set('Authorization', `Bearer ${tokenB}`)
      .expect(404);
  });
});
