import Dict from '../../src/dict/dict.main';
import empty from '../../src/dict/dict.empty';

describe('Dict.of()', () => {
  test('should return a new dict', () => {
    expect(Dict.of([1, 'a'], [2, 'b'])).toStrictEqual(new Dict([[1, 'a'], [2, 'b']]));
    expect(Dict.of()).toStrictEqual(empty());
  });
});
