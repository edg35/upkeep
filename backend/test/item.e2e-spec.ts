/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { signAccessToken } from './helpers/auth';
import { cleanupDb } from './helpers/cleanup';
import { seedUserWithHousehold } from './helpers/seed';

describe('ItemController (e2e)', () => {
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

  async function setup() {
    const { user, household } = await seedUserWithHousehold(prisma);
    const token = signAccessToken(user.user_id, user.email);
    const auth = { Authorization: `Bearer ${token}` };
    const category = await prisma.category.create({
      data: { name: 'Filters', household_id: household.household_id },
    });
    return { user, household, auth, category };
  }

  it('creates an INTERVAL item with a computed next_due_date', async () => {
    const { auth, category } = await setup();

    const res = await request(app.getHttpServer())
      .post('/items')
      .set(auth)
      .send({
        name: 'Furnace filter',
        category_id: category.category_id,
        item_type: 'MAINTENANCE',
        schedule: { tracking_mode: 'INTERVAL', interval_days: 90 },
      })
      .expect(201);

    expect(res.body.schedule.tracking_mode).toBe('INTERVAL');
    expect(new Date(res.body.schedule.next_due_date).getTime()).toBeGreaterThan(
      Date.now(),
    );
  });

  it('creates a FIXED_DATE item using the supplied due date', async () => {
    const { auth, category } = await setup();
    const fixedDueDate = '2027-01-01T00:00:00.000Z';

    const res = await request(app.getHttpServer())
      .post('/items')
      .set(auth)
      .send({
        name: 'Annual inspection',
        category_id: category.category_id,
        item_type: 'APPOINTMENT',
        schedule: { tracking_mode: 'FIXED_DATE', fixed_due_date: fixedDueDate },
      })
      .expect(201);

    expect(new Date(res.body.schedule.next_due_date).toISOString()).toBe(
      fixedDueDate,
    );
  });

  it('creates a RECURRING item using the RRULE next occurrence', async () => {
    const { auth, category } = await setup();

    const res = await request(app.getHttpServer())
      .post('/items')
      .set(auth)
      .send({
        name: 'Water the plants',
        category_id: category.category_id,
        item_type: 'CONSUMABLE',
        schedule: { tracking_mode: 'RECURRING', recurrence_rule: 'FREQ=DAILY' },
      })
      .expect(201);

    expect(res.body.schedule.tracking_mode).toBe('RECURRING');
    expect(res.body.schedule.next_due_date).toBeDefined();
  });

  it('rejects a schedule with mismatched fields for the chosen tracking_mode', async () => {
    const { auth, category } = await setup();

    await request(app.getHttpServer())
      .post('/items')
      .set(auth)
      .send({
        name: 'Bad schedule',
        category_id: category.category_id,
        item_type: 'MAINTENANCE',
        schedule: {
          tracking_mode: 'INTERVAL',
          interval_days: 30,
          recurrence_rule: 'FREQ=DAILY',
        },
      })
      .expect(400);
  });

  it('rejects a category_id belonging to a different household', async () => {
    const { auth } = await setup();
    const other = await seedUserWithHousehold(prisma);
    const otherCategory = await prisma.category.create({
      data: { name: 'Other', household_id: other.household.household_id },
    });

    await request(app.getHttpServer())
      .post('/items')
      .set(auth)
      .send({
        name: 'Cross household',
        category_id: otherCategory.category_id,
        item_type: 'MAINTENANCE',
        schedule: { tracking_mode: 'INTERVAL', interval_days: 30 },
      })
      .expect(400);
  });

  it('excludes soft-deleted items from list and detail', async () => {
    const { auth, category } = await setup();
    const createRes = await request(app.getHttpServer())
      .post('/items')
      .set(auth)
      .send({
        name: 'Disposable',
        category_id: category.category_id,
        item_type: 'CONSUMABLE',
        schedule: { tracking_mode: 'INTERVAL', interval_days: 30 },
      })
      .expect(201);
    const itemId = createRes.body.item_id;

    await request(app.getHttpServer())
      .delete(`/items/${itemId}`)
      .set(auth)
      .expect(200);

    await request(app.getHttpServer())
      .get(`/items/${itemId}`)
      .set(auth)
      .expect(404);

    await request(app.getHttpServer())
      .get('/items')
      .set(auth)
      .expect(200)
      .expect((res) => {
        expect(res.body).toHaveLength(0);
      });
  });

  it('completing an INTERVAL item logs history and advances next_due_date relative to completion time', async () => {
    const { auth, category } = await setup();
    const createRes = await request(app.getHttpServer())
      .post('/items')
      .set(auth)
      .send({
        name: 'Furnace filter',
        category_id: category.category_id,
        item_type: 'MAINTENANCE',
        schedule: { tracking_mode: 'INTERVAL', interval_days: 30 },
      })
      .expect(201);
    const itemId = createRes.body.item_id;
    const completedAt = '2026-06-01T00:00:00.000Z';

    const res = await request(app.getHttpServer())
      .post(`/items/${itemId}/complete`)
      .set(auth)
      .send({ completed_at: completedAt, notes: 'Replaced filter' })
      .expect(201);

    expect(res.body.history.completed_at).toBe(completedAt);
    expect(res.body.item.schedule.next_due_date).toBe(
      '2026-07-01T00:00:00.000Z',
    );
  });

  it('returns 404 for an item belonging to a different household', async () => {
    const { auth: authA } = await setup();
    const b = await setup();
    const itemB = await prisma.item.create({
      data: {
        name: 'B item',
        category_id: b.category.category_id,
        household_id: b.household.household_id,
        item_type: 'MAINTENANCE',
        created_by: b.user.user_id,
      },
    });

    await request(app.getHttpServer())
      .get(`/items/${itemB.item_id}`)
      .set(authA)
      .expect(404);
  });
});
