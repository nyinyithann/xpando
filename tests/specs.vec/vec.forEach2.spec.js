import Vec from '../../src/vec/vec.main';

describe('Vec.forEach2()', () => {
  test('should iterate on both array and invoke on their elements', () => {
    const v1 = Vec.of(1, 2, 3, 4, 5);
    const v2 = Vec.of(1, 2, 3, 4, 5);
    const ret = new Vec();
    Vec.forEach2((x, y, i) => {
      ret.push([x, y, i]);
    }, v1, v2);

    expect(ret).toStrictEqual(new Vec(
      [1, 1, 0],
      [2, 2, 1],
      [3, 3, 2],
      [4, 4, 3],
      [5, 5, 4],
    ));
  });
});
