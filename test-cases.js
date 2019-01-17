
xtest('upper and lower case versions of the same character should not be counted separately', () => {
  expect(isPangram('the quick brown fox jumps over with lazy FX')).toBe(false);
});
