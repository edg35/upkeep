import {
  ENCOURAGING_PHRASES,
  buildDigest,
  pickPhrase,
  sweepCutoff,
} from './digest.util';

const ET = 'America/New_York';

describe('sweepCutoff', () => {
  it('returns end of today ET as a UTC calendar date at 7 AM EST', () => {
    expect(sweepCutoff(new Date('2026-11-11T12:00:00Z'), ET)).toEqual(
      new Date('2026-11-11T23:59:59.999Z'),
    );
  });

  it('returns end of today ET as a UTC calendar date at 7 AM EDT', () => {
    expect(sweepCutoff(new Date('2026-07-01T11:00:00Z'), ET)).toEqual(
      new Date('2026-07-01T23:59:59.999Z'),
    );
  });

  it('handles the DST end day', () => {
    expect(sweepCutoff(new Date('2026-11-01T12:00:00Z'), ET)).toEqual(
      new Date('2026-11-01T23:59:59.999Z'),
    );
  });

  it('uses the ET calendar date, not the UTC date', () => {
    expect(sweepCutoff(new Date('2026-11-12T04:30:00Z'), ET)).toEqual(
      new Date('2026-11-11T23:59:59.999Z'),
    );
  });

  it('includes today fixed-date and interval reminders but not tomorrow fixed-date ones', () => {
    const cutoff = sweepCutoff(new Date('2026-03-06T12:00:00Z'), ET);
    const included = (iso: string) => new Date(iso) <= cutoff;
    expect(included('2026-03-07T00:00:00Z')).toBe(false);
    expect(included('2026-03-06T00:00:00Z')).toBe(true);
    expect(included('2026-03-06T20:00:00Z')).toBe(true);
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
