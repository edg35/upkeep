import 'package:flutter_test/flutter_test.dart';
import 'package:frontend/features/auth/password_strength.dart';

void main() {
  test('empty password scores 0', () {
    expect(passwordStrength(''), 0);
  });

  test('short lowercase-only password scores 0', () {
    expect(passwordStrength('abc'), 0);
  });

  test('8+ chars, lowercase only scores 1', () {
    expect(passwordStrength('abcdefgh'), 1);
  });

  test('8+ chars with a digit scores 2', () {
    expect(passwordStrength('abcdefg1'), 2);
  });

  test('8+ chars, mixed case and a digit scores 3', () {
    expect(passwordStrength('Abcdefg1'), 3);
  });

  test('8+ chars, mixed case and a symbol scores 3', () {
    expect(passwordStrength('Abcdefg!'), 3);
  });
}
