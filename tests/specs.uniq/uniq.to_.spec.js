import Uniq from '../../src/uniq/uniq.main';
import Vec from '../../src/vec/vec.core';
import Dict from '../../src/dict/dict.core';

describe('toArray() | toVec() | toMap() | toDict()', () => {
  test('throw exception if this is null or undefined', () => {
    const toArray = Uniq.prototype.toArray;
    const toVec = Uniq.prototype.toVec;
    const toMap = Uniq.prototype.toMap;
    const toDict = Uniq.prototype.toDict;

    expect(() => toArray.call(null)).toThrow(TypeError);
    expect(() => toVec.call(null)).toThrow(TypeError);
    expect(() => toMap.call(null)).toThrow(TypeError);
    expect(() => toDict.call(null)).toThrow(TypeError);
  });

  test('should return correct result', () => {
    const toArray = Uniq.prototype.toArray;
    const toVec = Uniq.prototype.toVec;
    const toMap = Uniq.prototype.toMap;
    const toDict = Uniq.prototype.toDict;

    const uniq = Uniq.of(1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 4, 4, 3, 3, 5);

    expect(toArray.call(uniq)).toStrictEqual([1, 2, 4, 3, 5]);
    expect(toVec.call(uniq)).toStrictEqual(new Vec(1, 2, 4, 3, 5));
    expect(toMap.call(uniq)).toStrictEqual(new Map([[1, 1], [2, 2], [4, 4], [3, 3], [5, 5]]));
    expect(toDict.call(uniq)).toStrictEqual(new Dict([[1, 1], [2, 2], [4, 4], [3, 3], [5, 5]]));
  });
});
