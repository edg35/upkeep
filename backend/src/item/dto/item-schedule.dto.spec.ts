import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { TrackingMode } from '../../../generated';
import { CreateItemScheduleDto } from './item-schedule.dto';

async function validateSchedule(plain: Record<string, unknown>) {
  const dto = plainToInstance(CreateItemScheduleDto, plain);
  return validate(dto);
}

describe('CreateItemScheduleDto', () => {
  it('accepts a well-formed INTERVAL schedule', async () => {
    const errors = await validateSchedule({
      tracking_mode: TrackingMode.INTERVAL,
      interval_days: 30,
    });

    expect(errors).toHaveLength(0);
  });

  it('rejects INTERVAL without interval_days', async () => {
    const errors = await validateSchedule({
      tracking_mode: TrackingMode.INTERVAL,
    });

    expect(errors.length).toBeGreaterThan(0);
  });

  it('rejects INTERVAL when a recurrence_rule is also set', async () => {
    const errors = await validateSchedule({
      tracking_mode: TrackingMode.INTERVAL,
      interval_days: 30,
      recurrence_rule: 'FREQ=DAILY',
    });

    expect(errors.length).toBeGreaterThan(0);
  });

  it('accepts a well-formed FIXED_DATE schedule', async () => {
    const errors = await validateSchedule({
      tracking_mode: TrackingMode.FIXED_DATE,
      fixed_due_date: '2026-03-01T00:00:00.000Z',
    });

    expect(errors).toHaveLength(0);
  });

  it('rejects FIXED_DATE with a malformed date', async () => {
    const errors = await validateSchedule({
      tracking_mode: TrackingMode.FIXED_DATE,
      fixed_due_date: 'not-a-date',
    });

    expect(errors.length).toBeGreaterThan(0);
  });

  it('accepts a well-formed RECURRING schedule', async () => {
    const errors = await validateSchedule({
      tracking_mode: TrackingMode.RECURRING,
      recurrence_rule: 'FREQ=WEEKLY;INTERVAL=2',
    });

    expect(errors).toHaveLength(0);
  });

  it('rejects RECURRING with a malformed RRULE string', async () => {
    const errors = await validateSchedule({
      tracking_mode: TrackingMode.RECURRING,
      recurrence_rule: 'this is not an rrule',
    });

    expect(errors.length).toBeGreaterThan(0);
  });

  it('accepts an optional lead_time_days alongside any mode', async () => {
    const errors = await validateSchedule({
      tracking_mode: TrackingMode.INTERVAL,
      interval_days: 7,
      lead_time_days: 2,
    });

    expect(errors).toHaveLength(0);
  });
});
