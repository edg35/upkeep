// item/schedule.util.ts
import { ConflictException } from '@nestjs/common';
import { rrulestr } from 'rrule';
import { TrackingMode } from '../../generated';

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + days);
  return result;
}

function nextRecurrenceAfter(
  recurrenceRule: string,
  dtstart: Date,
  after: Date,
  inclusive: boolean,
): Date {
  const rule = rrulestr(recurrenceRule, { dtstart });
  const next = rule.after(after, inclusive);
  if (!next) {
    throw new ConflictException(
      "This item's recurrence has ended; update its schedule or tracking mode manually",
    );
  }
  return next;
}

interface InitialScheduleInput {
  tracking_mode: TrackingMode;
  interval_days?: number | null;
  fixed_due_date?: Date | null;
  recurrence_rule?: string | null;
}

export function computeInitialDueDate(
  schedule: InitialScheduleInput,
  now: Date,
): Date {
  switch (schedule.tracking_mode) {
    case TrackingMode.INTERVAL:
      return addDays(now, schedule.interval_days!);
    case TrackingMode.FIXED_DATE:
      return schedule.fixed_due_date!;
    case TrackingMode.RECURRING:
      return nextRecurrenceAfter(schedule.recurrence_rule!, now, now, true);
  }
}

interface CompletionScheduleInput {
  tracking_mode: TrackingMode;
  interval_days?: number | null;
  recurrence_rule?: string | null;
  next_due_date: Date;
}

export function computeNextDueDateOnCompletion(
  schedule: CompletionScheduleInput,
  completedAt: Date,
  recurrenceAnchor: Date,
): Date {
  switch (schedule.tracking_mode) {
    case TrackingMode.INTERVAL:
      return addDays(completedAt, schedule.interval_days!);
    case TrackingMode.FIXED_DATE:
      return schedule.next_due_date;
    case TrackingMode.RECURRING:
      return nextRecurrenceAfter(
        schedule.recurrence_rule!,
        recurrenceAnchor,
        completedAt,
        false,
      );
  }
}
