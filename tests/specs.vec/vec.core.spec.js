import Vec from '../../src/vec/vec.core';

describe('vec.core', () => {
  test('Vec extends Array and all array methods should work fine.', () => {
    const vec = new Vec(1, 2, 3, 4, 5);
    const reducer = (x, y) => x + y;
    const sum = vec.reduce(reducer);
    expect(sum).toBe([1, 2, 3, 4, 5].reduce(reducer));
    expect(vec.toString()).toEqual([1, 2, 3, 4, 5].toString());
    expect(vec.toLocaleString()).toEqual([1, 2, 3, 4, 5].toLocaleString());
  });

  test('toString tag should be [object Vec]', () => {
    expect(Object.prototype.toString.call(new Vec())).toEqual('[object Vec]');
  });

  test('instanceof Vec is Vec', () => {
    expect(new Vec() instanceof Vec).toBe(true);
  });
});
