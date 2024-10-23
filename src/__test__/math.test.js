const { add, subtract, multiply } = require('../math.js');

describe('Math Functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('multiplies 4 * 2 to equal 8', () => {
    expect(multiply(4, 2)).toBe(8);
  });

  test('adds negative numbers -1 + -2 to equal -3', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  test('subtracts 0 - 5 to equal -5', () => {
    expect(subtract(0, 5)).toBe(-5);
  });

  test('multiplies with 0: 0 * 10 to equal 0', () => {
    expect(multiply(0, 10)).toBe(0);
  });
});
