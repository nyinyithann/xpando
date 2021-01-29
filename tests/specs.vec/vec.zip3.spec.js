import Vec from '../../src/vec/vec.main';

describe('Vec.zip3', () => {
  test('should zip 3 vectors', () => {
    const v1 = Vec.of(1, 2, 3, 4, 5);
    const v2 = Vec.of(1, 2, 3, 4, 5);
    const v3 = Vec.of(1, 2, 3, 4, 5);
    expect(Vec.zip3(v1, v2, v3))
      .toEqual(new Vec(
        new Vec(1, 1, 1),
        new Vec(2, 2, 2),
        new Vec(3, 3, 3),
        new Vec(4, 4, 4),
        new Vec(5, 5, 5),
      ));
  });
});
