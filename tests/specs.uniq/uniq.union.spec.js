import Uniq from '../../src/uniq/uniq.main';

describe('union', () => {
  test('should throw TypeError for invalid arguments', () => {
    const union = Uniq.prototype.union;
    expect(() => union.call(null, new Uniq())).toThrow(TypeError);
    expect(() => union.call(new Uniq(), null)).toThrow(TypeError);
  });

  test('should return correct result', () => {
    const s1 = Uniq.of(1, 5);
    const s2 = Uniq.of(1, 3, 5, 4);

    expect(Uniq.of().union(Uniq.of())).toStrictEqual(Uniq.empty());
    expect(s1.union(s2)).toStrictEqual(Uniq.of(1, 5, 3, 4));

    expect(s1.union(s2, s2, Uniq.of(10, 10, 11))).toStrictEqual(Uniq.of(1, 5, 3, 4, 10, 11));
  });
});
