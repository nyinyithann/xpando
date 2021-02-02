import Vec from '../../src/vec/vec.main';

describe('Vec.transpose()', () => {
  test('should throw error for invalid arguments', () => {
    expect(() => Vec.transpose({ test: 'test' })).toThrow(TypeError);
    expect(() => Vec.transpose(new Vec())).toThrow(TypeError);
    expect(() => Vec.transpose(new Vec(1, 2))).toThrow(TypeError);
    expect(() => Vec.transpose(new Vec([1, 2], [2]))).toThrow(TypeError);
    expect(() => Vec.transpose(new Vec([1], [2]))).not.toThrow(TypeError);
  });

  test('should return transposed vector', () => {
    const vec = new Vec(new Vec(1, 2, 3), new Vec(4, 5, 6));
    const actual = Vec.transpose(vec);
    const expected = new Vec(
      new Vec(1, 4),
      new Vec(2, 5),
      new Vec(3, 6),
    );
    expect(actual).toStrictEqual(expected);

    expect(Vec.transpose(new Vec([1, 2, 3]))).toStrictEqual(new Vec(
      Vec.of(1), Vec.of(2), Vec.of(3),
    ));

    expect(Vec.transpose(new Vec([]))).toStrictEqual(new Vec());
  });
});