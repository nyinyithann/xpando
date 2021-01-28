import Vec from '../../src/vec/vec.main';

describe('groupBy()', () => {
  class Person {
    constructor(name, age, title) {
      this.name = name;
      this.age = age;
      this.title = title;
    }

    get father() { return this._father; }

    set father(value) { this._father = value; }
  }

  test('should throw null if the existing vec is null or undefined when invoke via call/apply/bind', () => {
    const groupBy = Vec.prototype.groupBy;
    expect(() => groupBy.call(null))
      .toThrow(TypeError);
    expect(() => groupBy.apply(null))
      .toThrow(TypeError);
    expect(() => groupBy.bind(null)())
      .toThrow(TypeError);

    expect(() => groupBy.bind(new Vec())((x) => x))
      .toThrow(TypeError);
  });

  test('should throw TypeError if projection is a generator function or not a function', () => {
    expect(() => new Vec(1, 2).groupBy(null))
      .toThrow(TypeError);
    expect(() => new Vec(1, 2).groupBy(undefined))
      .toThrow(TypeError);
    // eslint-disable-next-line no-void
    expect(() => new Vec(1, 2).groupBy(void 0))
      .toThrow(TypeError);
  });

  test('projection can be associated with different context', () => {
    const obj = {
      prop: 'name',
    };
    const projection = function (x) {
      return x[this.prop];
    };
    const mrA = new Person('A', 20);
    const mrB = new Person('B', 15);
    const vec = new Vec(mrA, mrA, mrB);
    expect(vec.groupBy(projection, true, obj))
      .toEqual(new Vec(
        new Vec('A', new Vec(mrA, mrA)), new Vec('B', new Vec(mrB)),
      ));

    expect(vec.groupBy(projection, false, obj))
      .toEqual(new Vec(
        new Vec('A', new Vec(mrA, mrA)), new Vec('B', new Vec(mrB)),
      ));
  });

  test('should work with nested type', () => {
    const godFather = new Person('God', 10000, 'The Father');
    const holyGhostFather = new Person('God', 10000, 'The Father');

    const jesus = new Person('Jesus', 10000, 'The Son');
    jesus.father = godFather;
    const peter = new Person('Peter', 10000, 'The Disciple');
    peter.father = godFather;
    const andrew = new Person('Andrew', 10000, 'The Disciple');
    andrew.father = godFather;

    const moses = new Person('Moses', 10000, 'The Son');
    moses.father = holyGhostFather;
    const jude = new Person('Jude', 10000, 'The Traitor');
    jude.father = holyGhostFather;

    const vec = new Vec(jesus, peter, andrew, moses, jude);
    const received1 = vec.groupBy(({ father }) => father, false);
    const actual1 = new Vec(
      new Vec(godFather, new Vec(jesus, peter, andrew)),
      new Vec(holyGhostFather, new Vec(moses, jude)),
    );
    expect(received1).toEqual(actual1);

    const received2 = vec.groupBy(({ father }) => father, true);
    const actual2 = new Vec(
      new Vec(godFather, new Vec(jesus, peter, andrew, moses, jude)),
    );
    expect(received2).toEqual(actual2);

    const groupBy = Vec.prototype.groupBy;
    expect(groupBy.call(vec, ({ father }) => father, false)).toEqual(actual1);
    expect(groupBy.apply(vec, [({ father }) => father, false])).toEqual(actual1);
    expect(groupBy.bind(vec)(({ father }) => father, false)).toEqual(actual1);
  });
});
