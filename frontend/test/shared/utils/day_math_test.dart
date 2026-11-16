// These cases matter in a zone with daylight saving time. Run with
// `TZ=America/New_York flutter test` to exercise the 23- and 25-hour days;
// in UTC they pass trivially.
import 'package:flutter_test/flutter_test.dart';
import 'package:frontend/shared/utils/day_math.dart';

void main() {
  group('daysBetween', () {
    test('counts calendar days across spring forward (23-hour day)', () {
      expect(daysBetween(DateTime(2027, 3, 14), DateTime(2027, 3, 15)), 1);
      expect(daysBetween(DateTime(2027, 3, 13), DateTime(2027, 3, 15)), 2);
    });

    test('counts calendar days across fall back (25-hour day)', () {
      expect(daysBetween(DateTime(2026, 11, 1), DateTime(2026, 11, 2)), 1);
    });

    test('ignores time of day and is negative for earlier dates', () {
      expect(
        daysBetween(
          DateTime(2026, 11, 15, 23, 59),
          DateTime(2026, 11, 16, 0, 1),
        ),
        1,
      );
      expect(daysBetween(DateTime(2026, 11, 16), DateTime(2026, 11, 15)), -1);
      expect(
        daysBetween(DateTime(2026, 11, 16, 8), DateTime(2026, 11, 16, 20)),
        0,
      );
    });
  });

  group('addDays', () {
    test('lands on the next calendar day across fall back', () {
      expect(addDays(DateTime(2026, 11, 1), 1), DateTime(2026, 11, 2));
    });

    test('lands on the next calendar day across spring forward', () {
      expect(addDays(DateTime(2027, 3, 14), 1), DateTime(2027, 3, 15));
    });

    test('drops the time of day and handles month ends and negatives', () {
      expect(addDays(DateTime(2026, 11, 30, 18, 30), 1), DateTime(2026, 12, 1));
      expect(addDays(DateTime(2026, 3, 1), -1), DateTime(2026, 2, 28));
    });
  });
}
