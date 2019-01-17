
xtest('missing letters replaced by numbers', () => {
  expect(isPangram('7h3 qu1ck brown fox jumps ov3r 7h3 lazy dog')).toBe(false);
});

xtest('pangram with mixed case and punctuation', () => {
  expect(isPangram('"Five quacking Zephyrs jolt my wax bed."')).toBe(true);
});

xtest('upper and lower case versions of the same character should not be counted separately', () => {
  expect(isPangram('the quick brown fox jumps over with lazy FX')).toBe(false);
});
