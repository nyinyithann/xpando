import Dict from '../../src/dict/dict.main';

describe('toSet()', () => {
  test('should throw TypeError if existing dict is null or undefined', () => {
    const toSet = Dict.prototype.toSet;
    expect(() => toSet.call(null)).toThrow(TypeError);
  });

  test('should return an array', () => {
    const dict = new Dict(
      [['one', 1], ['two', 2], ['three', 3], ['four', 4], ['five', 5]],
    );

    const toSet = Dict.prototype.toSet;
    const expected = new Set([['one', 1], ['two', 2], ['three', 3], ['four', 4], ['five', 5]]);
    expect(dict.toSet()).toStrictEqual(expected);
    expect(toSet.call(dict)).toStrictEqual(expected);
    expect(toSet.apply(dict)).toStrictEqual(expected);
    expect(toSet.bind(dict)()).toStrictEqual(expected);
  });
});
