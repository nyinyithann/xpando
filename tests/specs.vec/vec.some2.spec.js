import Vec from '../../src/vec/vec.main';

describe('Vec.some2()', () => {
  test('should return correct result', () => {
    expect(Vec.some2((x, y) => x === y, Vec.from([1, 2]), Vec.from([1, 2]))).toBe(true);
    expect(Vec.some2((x, y) => x !== y, Vec.from([1, 2]), Vec.from([1, 2]))).toBe(false);
  });
});
