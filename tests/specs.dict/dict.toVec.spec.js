import Dict from '../../src/dict/dict.main';
import Vec from '../../src/vec/vec.core';

describe('toVec()', () => {
  test('should throw TypeError if existing dict is null or undefined', () => {
    const toVec = Dict.prototype.toVec;
    expect(() => toVec.call(null)).toThrow(TypeError);
  });

  test('should return an array', () => {
    const dict = new Dict(
      [['one', 1], ['two', 2], ['three', 3], ['four', 4], ['five', 5]],
    );

    const toVec = Dict.prototype.toVec;
    const expected = new Vec(['one', 1], ['two', 2], ['three', 3], ['four', 4], ['five', 5]);
    expect(dict.toVec()).toStrictEqual(expected);
    expect(toVec.call(dict)).toStrictEqual(expected);
    expect(toVec.apply(dict)).toStrictEqual(expected);
    expect(toVec.bind(dict)()).toStrictEqual(expected);
  });
});
