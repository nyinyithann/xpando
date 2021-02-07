import Uniq from '../../src/uniq/uniq.main';

describe('intersect()', () => {
  test('should throw TypeError for invalid arguments', () => {
    const intersect = Uniq.prototype.intersect;
    expect(() => intersect.call(null, new Uniq())).toThrow(TypeError);
    expect(() => intersect.call(new Uniq(), null)).toThrow(TypeError);
  });

  test('should return correct result', () => {
    const s1 = Uniq.of('a', 'b', 'c', 'd');
    const s2 = Uniq.of('b', 'd', 'e');
    expect(s1.intersect(s2)).toStrictEqual(Uniq.of('b', 'd'));
    expect(Uniq.of().intersect(Uniq.of())).toStrictEqual(Uniq.empty());
    expect(Uniq.prototype.intersect.call(s2, s1)).toStrictEqual(Uniq.of('b', 'd'));
  });
});
