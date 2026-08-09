import { computeRemindAt } from './reminder.util';

describe('computeRemindAt', () => {
  it('subtracts lead_time_days from next_due_date', () => {
    const nextDueDate = new Date('2026-03-10T00:00:00.000Z');

    const result = computeRemindAt(nextDueDate, 3);

    expect(result).toEqual(new Date('2026-03-07T00:00:00.000Z'));
  });

  it('returns next_due_date unchanged when lead_time_days is 0', () => {
    const nextDueDate = new Date('2026-03-10T00:00:00.000Z');

    const result = computeRemindAt(nextDueDate, 0);

    expect(result).toEqual(nextDueDate);
  });

  it('does not mutate the input date', () => {
    const nextDueDate = new Date('2026-03-10T00:00:00.000Z');

    computeRemindAt(nextDueDate, 5);

    expect(nextDueDate).toEqual(new Date('2026-03-10T00:00:00.000Z'));
  });
});
