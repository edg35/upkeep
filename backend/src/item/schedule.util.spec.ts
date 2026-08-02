import { ConflictException } from '@nestjs/common';
import { TrackingMode } from '../../generated';
import {
  computeInitialDueDate,
  computeNextDueDateOnCompletion,
} from './schedule.util';

describe('computeInitialDueDate', () => {
  it('adds interval_days to now for INTERVAL mode', () => {
    const now = new Date('2026-01-01T00:00:00.000Z');

    const result = computeInitialDueDate(
      { tracking_mode: TrackingMode.INTERVAL, interval_days: 7 },
      now,
    );

    expect(result).toEqual(new Date('2026-01-08T00:00:00.000Z'));
  });

  it('uses fixed_due_date as-is for FIXED_DATE mode', () => {
    const now = new Date('2026-01-01T00:00:00.000Z');
    const fixedDueDate = new Date('2026-03-01T00:00:00.000Z');

    const result = computeInitialDueDate(
      { tracking_mode: TrackingMode.FIXED_DATE, fixed_due_date: fixedDueDate },
      now,
    );

    expect(result).toEqual(fixedDueDate);
  });

  it('returns the first occurrence on/after now for RECURRING mode', () => {
    const now = new Date('2026-01-01T10:00:00.000Z');

    const result = computeInitialDueDate(
      { tracking_mode: TrackingMode.RECURRING, recurrence_rule: 'FREQ=DAILY' },
      now,
    );

    expect(result).toEqual(now);
  });
});

describe('computeNextDueDateOnCompletion', () => {
  it('computes next due date relative to completion time for INTERVAL mode, ignoring the previous due date', () => {
    const completedAt = new Date('2026-02-01T00:00:00.000Z');

    const result = computeNextDueDateOnCompletion(
      {
        tracking_mode: TrackingMode.INTERVAL,
        interval_days: 30,
        next_due_date: new Date('2026-01-05T00:00:00.000Z'), // overdue, should be ignored
      },
      completedAt,
      completedAt, // recurrenceAnchor unused for INTERVAL
    );

    expect(result).toEqual(new Date('2026-03-03T00:00:00.000Z'));
  });

  it('leaves next_due_date unchanged for FIXED_DATE mode', () => {
    const completedAt = new Date('2026-04-01T00:00:00.000Z');
    const existingNextDueDate = new Date('2026-05-01T00:00:00.000Z');

    const result = computeNextDueDateOnCompletion(
      {
        tracking_mode: TrackingMode.FIXED_DATE,
        next_due_date: existingNextDueDate,
      },
      completedAt,
      completedAt,
    );

    expect(result).toEqual(existingNextDueDate);
  });

  it('computes the next occurrence strictly after completion time for RECURRING mode, anchored to a stable dtstart', () => {
    const anchor = new Date('2026-01-01T00:00:00.000Z'); // e.g. item.created_at
    const completedAt = new Date('2026-01-15T00:00:00.000Z'); // an occurrence itself

    const result = computeNextDueDateOnCompletion(
      {
        tracking_mode: TrackingMode.RECURRING,
        recurrence_rule: 'FREQ=WEEKLY;INTERVAL=2',
        next_due_date: completedAt,
      },
      completedAt,
      anchor,
    );

    expect(result).toEqual(new Date('2026-01-29T00:00:00.000Z'));
  });

  it('throws ConflictException when a RECURRING rule has no further occurrences', () => {
    const anchor = new Date('2026-01-01T00:00:00.000Z');
    const completedAt = anchor; // the only occurrence, per COUNT=1

    expect(() =>
      computeNextDueDateOnCompletion(
        {
          tracking_mode: TrackingMode.RECURRING,
          recurrence_rule: 'FREQ=DAILY;COUNT=1',
          next_due_date: completedAt,
        },
        completedAt,
        anchor,
      ),
    ).toThrow(ConflictException);
  });
});
