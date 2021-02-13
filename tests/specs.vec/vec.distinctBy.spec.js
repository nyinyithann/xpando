import Vec from '../../src/vec/vec.main';

describe('distinctBy()', () => {
  test('should throw error if the existing vec is null or undefined', () => {
    const distinctBy = Vec.prototype.distinctBy;
    expect(() => distinctBy.call(null)).toThrow(TypeError);
    expect(() => distinctBy.call(undefined)).toThrow(TypeError);
  });

  test('should throw error if projection is a generator function or not a function', () => {
    const vec = new Vec(1, 2, 3);
    expect(() => vec.distinctBy(null)).toThrow(TypeError);
    expect(() => vec.distinctBy(undefined)).toThrow(TypeError);
  });

  test('should return a vec containing unique elements projected by projection', () => {
    const n1 = { n: 10 };
    const vec = new Vec(n1, n1, { n: 2 }, { n: 2 }, { n: -2 }, { n: 10 }, 1, 1, true, true);
    const expected = vec.distinctBy((x) => x, false);
    const actual = new Vec(n1, { n: 2 }, { n: 2 }, { n: -2 }, { n: 10 }, 1, true);
    expect(actual).toEqual(expected);

    const expected1 = vec.distinctBy((x) => x, true);
    const actual1 = new Vec(n1, { n: 2 }, { n: -2 }, 1, true);
    expect(actual1).toEqual(expected1);

    const expected3 = vec.distinctBy(({ n }) => n, true);
    const actual3 = new Vec({ n: 10 }, { n: 2 }, { n: -2 }, 1);
    expect(actual3).toEqual(expected3);

    const expected4 = vec.distinctBy(({ n }) => n, false);
    const actual4 = new Vec({ n: 10 }, { n: 2 }, { n: -2 }, 1);
    expect(actual4).toEqual(expected4);

    expect(Vec.from([,,,,,, 1, 1, 1, 1]).distinctBy((x) => x, false)).toEqual(Vec.from(
      [, 1],
    ));
    expect(Vec.from([,,,,,, 1, 1, 1, 1]).distinctBy((x) => x, true)).toEqual(Vec.from(
      [, 1],
    ));
  });

  test('projection might be associate with a context', () => {
    const context = {
      propName: 'n',
    };
    const projection = function (x) { return x[this.propName]; };
    const vec = new Vec({ n: 1 }, { n: 1 }, { n: 2 }, { n: 2 }, { n: -2 }, { n: 1 });
    const actual = new Vec({ n: 1 }, { n: 2 }, { n: -2 });
    const distinctBy = Vec.prototype.distinctBy;
    expect(distinctBy.call(vec, projection, false, context)).toEqual(actual);
  });

  test('invocation via call/apply/bind should be fine', () => {
    const context = {
      propName: 'n',
    };
    const projection = function (x) { return x[this.propName]; };
    const vec = new Vec({ n: 1 }, { n: 1 }, { n: 2 }, { n: 2 }, { n: -2 }, { n: 1 });
    const actual = new Vec({ n: 1 }, { n: 2 }, { n: -2 });
    const distinctBy = Vec.prototype.distinctBy;
    expect(distinctBy.call(vec, projection, false, context)).toEqual(actual);
    expect(distinctBy.apply(vec, [projection, false, context])).toEqual(actual);
    expect(distinctBy.bind(vec)(projection, false, context)).toEqual(actual);
  });
});
