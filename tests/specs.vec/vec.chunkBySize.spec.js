import Vec from '../../src/vec/vec.main';
import empty from '../../src/vec/vec.empty';

describe('chunkBySize()', () => {
  test('should return correct result', () => {
    const vec = Vec.init(10, (x) => x + 1);

    expect(vec.chunkBySize(vec.length + 1)).toEqual(new Vec(vec));
    expect(new Vec().chunkBySize(1)).toEqual(empty());

    const expected1 = vec.chunkBySize(3);
    const actual1 = new Vec(
      new Vec(1, 2, 3),
      new Vec(4, 5, 6),
      new Vec(7, 8, 9),
      Vec.of(10),
    );
    expect(actual1).toEqual(expected1);

    const expected2 = vec.chunkBySize(2.4);
    const actual2 = new Vec(
      new Vec(1, 2),
      new Vec(3, 4),
      new Vec(5, 6),
      new Vec(7, 8),
      new Vec(9, 10),
    );
    expect(actual2).toEqual(expected2);

    const expected3 = vec.chunkBySize(9);
    const actual3 = new Vec(
      new Vec(1, 2, 3, 4, 5, 6, 7, 8, 9),
      Vec.of(10),
    );
    expect(actual3).toEqual(expected3);

    const expected4 = vec.chunkBySize(10);
    const actual4 = new Vec(
      new Vec(1, 2, 3, 4, 5, 6, 7, 8, 9, 10),
    );
    expect(actual4).toEqual(expected4);
  });
});
