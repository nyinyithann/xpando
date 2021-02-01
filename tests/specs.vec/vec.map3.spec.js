import Vec from '../../src/vec/vec.main';

describe('Vec.map3()', () => {
  test('should perform mapping operation on 3 vectors', () => {
    const v1 = Vec.of(1, 2, 3, 4, 5);
    const v2 = Vec.of(1, 2, 3, 4, 5);
    const v3 = Vec.of(1, 2, 3, 4, 5);
    const mapping = (x, y, z, i) => x + y + z + i;
    expect(Vec.map3(mapping, v1, v2, v3)).toStrictEqual(new Vec(
      3, 7, 11, 15, 19,
    ));
  });
});
