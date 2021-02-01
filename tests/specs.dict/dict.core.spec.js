import Dict from '../../src/dict/dict.core';

describe('dict.core', () => {
  test('Dict extends Map, and should work like one', () => {
    const dict = new Dict(
      [[1, 'one'], [2, 'two'], [3, 'three']],
    );
    expect(dict.size).toBe(3);
    expect([...dict.entries()]).toStrictEqual([[1, 'one'], [2, 'two'], [3, 'three']]);
    expect(dict.get(1)).toBe('one');
    expect(dict.has(1)).toBe(true);
    expect([...dict.keys()]).toStrictEqual([1, 2, 3]);
    dict.set(4, 'four');
    expect(dict.get(4)).toBe('four');
  });

  test('toString tag should be [object Dict]', () => {
    expect(Object.prototype.toString.call(new Dict())).toStrictEqual('[object Dict]');
  });

  test('instanceof Dict is Dict', () => {
    expect(new Dict() instanceof Dict).toBe(true);
  });
});
