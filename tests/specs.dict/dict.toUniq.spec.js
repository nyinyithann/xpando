import Dict from '../../src/dict/dict.main';
import Uniq from '../../src/uniq/uniq.core';

describe('toUniq()', () => {
  test('should throw TypeError if existing dict is null or undefined', () => {
    const toUniq = Dict.prototype.toUniq;
    expect(() => toUniq.call(null)).toThrow(TypeError);
  });

  test('should return a uniq', () => {
    const one = ['one', 1];
    const dict = new Dict(
      [one, one, one, ['two', 2], ['three', 3], ['four', 4], ['five', 5]]
    );

    const toUniq = Dict.prototype.toUniq;
    const expected = new Uniq([['one', 1], ['two', 2], ['three', 3], ['four', 4], ['five', 5]]);
    expect(dict.toUniq()).toStrictEqual(expected);
    expect(toUniq.call(dict)).toStrictEqual(expected);
    expect(toUniq.apply(dict)).toStrictEqual(expected);
    expect(toUniq.bind(dict)()).toStrictEqual(expected);
  });
});
