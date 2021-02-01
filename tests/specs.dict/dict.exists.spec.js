import Dict from '../../src/dict/dict.main';

describe('exists()', () => {
  test('should check if a key or value exists in the Dict', () => {
    const dict = new Dict(
      [[1, 'one'], [2, 'other'], [3, 'three'], [4, 'other'], [5, 'other']],
    );

    expect(dict.exists((k, _) => k === 1)).toBe(true);
    expect(dict.exists((_, v) => v === 'one')).toBe(true);
    expect(dict.exists((k, v) => k > 3 && v === 'other')).toBe(true);
  });
});
