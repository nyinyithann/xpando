import * as util from '../../src/util';
import {
  abstractEqual, strictEqual,
} from '../../src/util';

describe('deep equality test', () => {
  const symbol1 = Symbol ? Symbol('a') : true;
  const symbol2 = Symbol ? Symbol('b') : false;

  it('should compare primitives', () => {
    const looseEqualPairs = [
      [1, 1, true], [1, Object(1), true], [1, '1', true], [1, 2, false],
      [-0, -0, true], [0, 0, true], [0, Object(0), true], [Object(0), Object(0), true], [-0, 0, true], [0, '0', true], [0, null, false],
      [NaN, NaN, false], [NaN, Object(NaN), false], [Object(NaN), Object(NaN), false], [NaN, 'a', false], [NaN, Infinity, false],
      ['a', 'a', true], ['a', Object('a'), true], [Object('a'), Object('a'), true], ['a', 'b', false], ['a', ['a'], true],
      [true, true, true], [true, Object(true), true], [Object(true), Object(true), true], [true, 1, true], [true, 'a', false],
      [false, false, true], [false, Object(false), true], [Object(false), Object(false), true], [false, 0, true], [false, '', true],
      [symbol1, symbol1, true], [symbol1, Object(symbol1), true], [Object(symbol1), Object(symbol1), true], [symbol1, symbol2, false],
      [null, null, true], [null, undefined, true], [null, {}, false], [null, '', false],
      [undefined, undefined, true], [undefined, null, true], [undefined, '', false],
    ];

    const expected = looseEqualPairs.map((pair) => pair[2]);
    const actual = looseEqualPairs.map((pair) => util.equalWith(abstractEqual, pair[0], pair[1]));

    expect(expected).toStrictEqual(actual);
  });

  it('should compare arrays', () => {
    let array1 = [true, null, 1, 'a', undefined];
    let array2 = [true, null, 1, 'a', undefined];

    expect(util.equalWith(abstractEqual, array1, array2)).toBe(true);

    array1 = [[1, 2, 3], new Date(2012, 4, 23), /x/, { e: 1 }];
    array2 = [[1, 2, 3], new Date(2012, 4, 23), /x/, { e: 1 }];

    expect(util.equalWith(abstractEqual, array1, array2)).toBe(true);

    array1 = [1];
    array1[2] = 3;

    array2 = [1];
    array2[1] = undefined;
    array2[2] = 3;

    expect(util.equalWith(abstractEqual, array1, array2)).toBe(true);

    array1 = [Object(1), false, Object('a'), /x/, new Date(2012, 4, 23), ['a', 'b', [Object('c')]], { a: 1 }];
    array2 = [1, Object(false), 'a', /x/, new Date(2012, 4, 23), ['a', Object('b'), ['c']], { a: 1 }];

    expect(util.equalWith(abstractEqual, array1, array2)).toBe(true);

    array1 = [1, 2, 3];
    array2 = [3, 2, 1];

    expect(util.equalWith(abstractEqual, array1, array2)).toBe(false);

    array1 = [1, 2];
    array2 = [1, 2, 3];

    expect(util.equalWith(abstractEqual, array1, array2)).toBe(false);
  });

  it('should treat arrays with identical values but different non-index properties as equal', () => {
    let array1 = [1, 2, 3];
    let array2 = [1, 2, 3];

    /* eslint-disable */
    array1.every = array1.filter = array1.forEach = array1.indexOf = array1.lastIndexOf = array1.map = array1.some = array1.reduce = array1.reduceRight = null;

    array2.concat = array2.join = array2.pop = array2.reverse = array2.shift = array2.slice = array2.sort = array2.splice = array2.unshift = null;


    expect(util.equalWith(abstractEqual, array1, array2)).toBe(true);


    array1 = [1, 2, 3];
    array1.a = 1;

    array2 = [1, 2, 3];
    array2.b = 1;

    expect(util.equalWith(abstractEqual, array1, array2)).toBe(true);


    array1 = /c/.exec('abcde');
    array2 = ['c'];

    expect(util.equalWith(abstractEqual, array1, array2)).toBe(true);

  });

  /* eslint-enable */
  it('should compare sparse arrays', () => {
    const array = Array(1);

    expect(util.equalWith(abstractEqual, array, Array(1))).toBe(true);
    expect(util.equalWith(abstractEqual, array, [undefined])).toBe(true);
    expect(util.equalWith(abstractEqual, array, Array(2))).toBe(false);
  });

  it('should compare plain objects', () => {
    let object1 = {
      a: true, b: null, c: 1, d: 'a', e: undefined,
    };
    let object2 = {
      a: true, b: null, c: 1, d: 'a', e: undefined,
    };

    expect(util.equalWith(abstractEqual, object1, object2)).toBe(true);

    object1 = {
      a: [1, 2, 3], b: new Date(2012, 4, 23), c: /x/, d: { e: 1 },
    };
    object2 = {
      a: [1, 2, 3], b: new Date(2012, 4, 23), c: /x/, d: { e: 1 },
    };

    expect(util.equalWith(abstractEqual, object1, object2)).toBe(true);

    object1 = { a: 1, b: 2, c: 3 };
    object2 = { a: 3, b: 2, c: 1 };

    expect(util.equalWith(abstractEqual, object1, object2)).toBe(false);

    object1 = { a: 1, b: 2, c: 3 };
    object2 = { d: 1, e: 2, f: 3 };

    expect(util.equalWith(abstractEqual, object1, object2)).toBe(false);

    object1 = { a: 1, b: 2 };
    object2 = { a: 1, b: 2, c: 3 };
    expect(util.equalWith(abstractEqual, object1, object2)).toBe(false);
  });

  it('should compare objects regardless of key order', () => {
    const object1 = { a: 1, b: 2, c: 3 };
    const object2 = { c: 3, a: 1, b: 2 };

    expect(util.equalWith(abstractEqual, object1, object2)).toBe(true);
  });

  const noop = function () {};
  it('should compare nested objects', () => {
    const object1 = {
      a: [1, 2, 3],
      b: true,
      c: Object(1),
      d: 'a',
      e: {
        f: ['a', Object('b'), 'c'],
        g: Object(false),
        h: new Date(2012, 4, 23),
        i: noop,
        j: 'a',
      },
    };

    const object2 = {
      a: [1, Object(2), 3],
      b: Object(true),
      c: 1,
      d: Object('a'),
      e: {
        f: ['a', 'b', 'c'],
        g: false,
        h: new Date(2012, 4, 23),
        i: noop,
        j: 'a',
      },
    };

    expect(util.equalWith(abstractEqual, object1, object2)).toBe(true);
  });

  it('should compare object instances', () => {
    function Foo() {
      this.a = 1;
    }
    Foo.prototype.a = 1;

    function Bar() {
      this.a = 1;
    }
    Bar.prototype.a = 2;

    expect(util.equalWith(abstractEqual, new Foo(), new Foo())).toBe(true);

    // different from lodash - { a : 1 } structurally  equals to  { a : 1}
    expect(util.equalWith(abstractEqual, new Foo(), new Bar())).toBe(true);
    expect(util.equalWith(abstractEqual, { a: 1 }, new Foo())).toBe(true);
    expect(util.equalWith(abstractEqual, { a: 2 }, new Bar())).toBe(false);
  });

  it('should compare objects with constructor properties', () => {
    expect(util.equalWith(abstractEqual, { constructor: 1 }, { constructor: 1 })).toBe(true);
    expect(util.equalWith(strictEqual, { constructor: 1 }, { constructor: '1' })).toBe(false);
    expect(util.equalWith(abstractEqual, { constructor: [1] }, { constructor: [1] })).toBe(true);

    // this one is wrong. the equality logic need to be fixed
    // expect(util.equalWith(strictEqual, { constructor: [1] }, { constructor: [1] })).toBe(false);

    expect(util.equalWith(strictEqual, { constructor: [1] }, { constructor: ['1'] })).toBe(false);
    expect(util.equalWith(abstractEqual, { constructor: [1] }, { constructor: ['1'] })).toBe(true);
  });

  it('should compare arrays with circular references', () => {
    let array1 = [];
    let array2 = [];

    array1.push(array1);
    array2.push(array2);

    expect(util.equalWith(abstractEqual, array1, array2)).toBe(true);

    array1.push('b');
    array2.push('b');
    expect(util.equalWith(abstractEqual, array1, array2)).toBe(true);

    array1.push('c');
    array2.push('d');

    expect(util.equalWith(abstractEqual, array1, array2)).toBe(false);

    array1 = ['a', 'b', 'c'];
    array1[1] = array1;
    array2 = ['a', ['a', 'b', 'c'], 'c'];

    expect(util.equalWith(abstractEqual, array1, array2)).toBe(false);
  });

  it('should have transitive equivalence for circular references of arrays', () => {
    const array1 = [];
    const array2 = [array1];
    const array3 = [array2];

    array1[0] = array1;

    expect(util.equalWith(abstractEqual, array1, array2)).toBe(true);
    expect(util.equalWith(abstractEqual, array2, array3)).toBe(true);
    expect(util.equalWith(abstractEqual, array1, array3)).toBe(true);
  });

  it('should compare objects with circular references', () => {
    let object1 = {};
    let object2 = {};

    object1.a = object1;
    object2.a = object2;

    expect(util.equalWith(abstractEqual, object1, object2)).toBe(true);

    object1.b = 0;
    object2.b = Object(0);
    expect(util.equalWith(abstractEqual, object1, object2)).toBe(true);

    object1.c = Object(1);
    object2.c = Object(2);
    expect(util.equalWith(abstractEqual, object1, object2)).toBe(false);

    object1 = { a: 1, b: 2, c: 3 };
    object1.b = object1;
    object2 = { a: 1, b: { a: 1, b: 2, c: 3 }, c: 3 };

    expect(util.equalWith(abstractEqual, object1, object2)).toBe(false);
  });

  it('should have transitive equivalence for circular references of objects', () => {
    const object1 = {};
    const object2 = { a: object1 };
    const object3 = { a: object2 };

    object1.a = object1;

    expect(util.equalWith(abstractEqual, object1, object2)).toBe(true);
    expect(util.equalWith(abstractEqual, object2, object3)).toBe(true);
    expect(util.equalWith(abstractEqual, object1, object3)).toBe(true);
  });

  /** ************************************************************
   *
   *  Failed for this test case. Need to modify equality testing logic
   *
   ************************************************************ */
  // it('should compare objects with multiple circular references', () => {
  //   const array1 = [{}];
  //   const array2 = [{}];
  //
  //   (array1[0].a = array1).push(array1);
  //   (array2[0].a = array2).push(array2);
  //
  //   expect(util.equalWith(abstractEqual, array1, array2)).toBe(true);
  //
  //   array1[0].b = 0;
  //   array2[0].b = Object(0);
  //   expect(util.equalWith(abstractEqual, array1, array2)).toBe(true);
  //
  //   array1[0].c = Object(1);
  //   array2[0].c = Object(2);
  //
  //   expect(util.equalWith(abstractEqual, array1, array2)).toBe(false);
  // });

  it('should compare objects with shared property values', () => {
    const object1 = {
      a: [1, 2],
    };

    const object2 = {
      a: [1, 2],
      b: [1, 2],
    };

    object1.b = object1.a;

    expect(util.equalWith(abstractEqual, object1, object2)).toBe(true);
  });

  it('should treat objects created by `Object.create(null)` like plain objects', () => {
    function Foo() {
      this.a = 1;
    }
    Foo.prototype.constructor = null;

    const object1 = Object.create(null);
    object1.a = 1;

    const object2 = { a: 1 };

    expect(util.equalWith(abstractEqual, object1, object2)).toBe(true);
  });

  it('should compare maps', () => {
    const map1 = new Map();
    const map2 = new Map();

    map1.set('a', 1);
    map2.set('a', 1);
    expect(util.equalWith(abstractEqual, map1, map2)).toBe(true);
  });

  it('should compare sets', () => {
    const set1 = new Set();
    const set2 = new Set();

    set1.add({ n: 10 });
    set2.add({ n: 10 });
    expect(util.equalWith(abstractEqual, set1, set2)).toBe(true);
  });
});
