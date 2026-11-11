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

function partsToMap(parts: Intl.DateTimeFormatPart[]): Record<string, number> {
  const map: Record<string, number> = {};
  for (const part of parts) {
    if (part.type !== 'literal') map[part.type] = Number(part.value);
  }
  return map;
}

/** Last millisecond of `now`'s calendar day in `timeZone`. */
export function endOfDayInZone(now: Date, timeZone: string): Date {
  const ymd = partsToMap(
    new Intl.DateTimeFormat('en-US', {
      timeZone,
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }).formatToParts(now),
  );

  const naiveNextMidnight = Date.UTC(ymd.year, ymd.month - 1, ymd.day + 1);

  const local = partsToMap(
    new Intl.DateTimeFormat('en-US', {
      timeZone,
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hourCycle: 'h23',
    }).formatToParts(new Date(naiveNextMidnight)),
  );
  const offset =
    Date.UTC(
      local.year,
      local.month - 1,
      local.day,
      local.hour,
      local.minute,
      local.second,
    ) - naiveNextMidnight;

  return new Date(naiveNextMidnight - offset - 1);
}
