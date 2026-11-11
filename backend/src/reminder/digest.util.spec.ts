import {
  ENCOURAGING_PHRASES,
  buildDigest,
  endOfDayInZone,
  pickPhrase,
} from './digest.util';

const ET = 'America/New_York';

describe('endOfDayInZone', () => {
  it('returns end of day for 7 AM EST', () => {
    expect(endOfDayInZone(new Date('2026-11-11T12:00:00Z'), ET)).toEqual(
      new Date('2026-11-12T04:59:59.999Z'),
    );
  });

  it('returns end of day for 7 AM EDT', () => {
    expect(endOfDayInZone(new Date('2026-07-01T11:00:00Z'), ET)).toEqual(
      new Date('2026-07-02T03:59:59.999Z'),
    );
  });

  it('handles the DST end day', () => {
    expect(endOfDayInZone(new Date('2026-11-01T12:00:00Z'), ET)).toEqual(
      new Date('2026-11-02T04:59:59.999Z'),
    );
  });

  it('uses the zone calendar day, not the UTC day', () => {
    expect(endOfDayInZone(new Date('2026-11-12T04:30:00Z'), ET)).toEqual(
      new Date('2026-11-12T04:59:59.999Z'),
    );
  });
});

describe('buildDigest', () => {
  it('pluralizes tasks', () => {
    expect(buildDigest('The Green House', 3, 'Small wins!')).toEqual({
      title: 'For The Green House',
      body: 'You have 3 tasks to take care of today. Small wins!',
    });
  });

  it('uses singular for one task', () => {
    expect(buildDigest('The Green House', 1, 'Small wins!')).toEqual({
      title: 'For The Green House',
      body: 'You have 1 task to take care of today. Small wins!',
    });
  });
});

describe('pickPhrase', () => {
  it('picks by the random source', () => {
    expect(pickPhrase(() => 0)).toBe(ENCOURAGING_PHRASES[0]);
    expect(pickPhrase(() => 0.9999)).toBe(
      ENCOURAGING_PHRASES[ENCOURAGING_PHRASES.length - 1],
    );
  });

  it('has only non-empty phrases', () => {
    expect(ENCOURAGING_PHRASES.length).toBeGreaterThan(0);
    for (const phrase of ENCOURAGING_PHRASES) {
      expect(phrase.trim().length).toBeGreaterThan(0);
    }
  });
});
