import Vec from '../../src/vec/vec.main';

describe('permute()', () => {
  test('should return correct permutation', () => {
    const vec = new Vec(1, 2, 3);
    expect(vec.permute()).toEqual(new Vec(
      Vec.of(1, 2, 3),
      Vec.of(2, 1, 3),
      Vec.of(3, 1, 2),
      Vec.of(1, 3, 2),
      Vec.of(2, 3, 1),
      Vec.of(3, 2, 1),
    ));
    expect(vec).toEqual(new Vec(1, 2, 3));
    expect(new Vec().permute()).toEqual(new Vec());

    const n1 = { n: 1 };
    const n2 = { n: 2 };
    const n3 = { n: 3 };
    const vecn = new Vec(n1, n2, n3);
    expect(vecn.permute()).toEqual(new Vec(
      new Vec(n1, n2, n3),
      new Vec(n2, n1, n3),
      new Vec(n3, n1, n2),
      new Vec(n1, n3, n2),
      new Vec(n2, n3, n1),
      new Vec(n3, n2, n1),
    ));
    expect(vecn).toEqual(new Vec(n1, n2, n3));
  });
});
