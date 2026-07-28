/// Heuristic password strength on a 0-3 scale: one point each for length,
/// for containing a digit or symbol, and for mixed case.
int passwordStrength(String password) {
  if (password.isEmpty) return 0;

  var score = 0;
  if (password.length >= 8) score++;

  final hasDigitOrSymbol =
      RegExp(r'[0-9]').hasMatch(password) || RegExp(r'[^A-Za-z0-9]').hasMatch(password);
  if (hasDigitOrSymbol) score++;

  final hasMixedCase =
      RegExp(r'[a-z]').hasMatch(password) && RegExp(r'[A-Z]').hasMatch(password);
  if (hasMixedCase) score++;

  return score;
}
