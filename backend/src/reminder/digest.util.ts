// reminder/digest.util.ts
import { DigestMessage } from '../notification/notification.service';

export const ENCOURAGING_PHRASES: readonly string[] = [
  'Small wins add up!',
  'Your home thanks you.',
  'One thing at a time.',
  'You’ve got this.',
  'A little care goes a long way.',
  'Future you will be grateful.',
  'Nice and steady wins the day.',
  'Every task done is a weight lifted.',
];

export function pickPhrase(random: () => number = Math.random): string {
  const index = Math.min(
    Math.floor(random() * ENCOURAGING_PHRASES.length),
    ENCOURAGING_PHRASES.length - 1,
  );
  return ENCOURAGING_PHRASES[index];
}

export function buildDigest(
  householdName: string,
  taskCount: number,
  phrase: string,
): DigestMessage {
  const noun = taskCount === 1 ? 'task' : 'tasks';
  return {
    title: `For ${householdName}`,
    body: `You have ${taskCount} ${noun} to take care of today. ${phrase}`,
  };
}

/**
 * Reminders belong to their UTC calendar date (fixed dates are stored at
 * 00:00Z). Returns the last millisecond of today's `timeZone` calendar date,
 * expressed as that same date in UTC: `${D}T23:59:59.999Z`.
 */
export function sweepCutoff(now: Date, timeZone: string): Date {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now);
  const get = (type: Intl.DateTimeFormatPartTypes): string =>
    parts.find((p) => p.type === type)?.value ?? '';
  return new Date(`${get('year')}-${get('month')}-${get('day')}T23:59:59.999Z`);
}
