import { parseServiceAccount } from './fcm.provider';

describe('parseServiceAccount', () => {
  const account = {
    type: 'service_account',
    project_id: 'p1',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nABC\n-----END PRIVATE KEY-----\n',
  };

  it('parses single-line JSON with escaped newlines', () => {
    expect(parseServiceAccount(JSON.stringify(account))).toEqual(account);
  });

  it('parses JSON whose escaped newlines were expanded by an env loader', () => {
    const expanded = JSON.stringify(account).replace(/\\n/g, '\n');

    expect(parseServiceAccount(expanded)).toEqual(account);
  });

  it('ignores a trailing newline from a copy-paste', () => {
    expect(parseServiceAccount(`${JSON.stringify(account)}\n`)).toEqual(
      account,
    );
  });

  it('throws on malformed JSON', () => {
    expect(() => parseServiceAccount('{not json')).toThrow(SyntaxError);
  });
});
