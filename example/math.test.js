const { subtract, sum } = require('./math');

describe('Math tests', () => {
  test('sum two numbers', () => {
    expect(sum(2, 2)).toBe(4);
  });

  test('subtract two numbers', () => {
    expect(subtract(2, 2)).toBe(0);
  });
});
