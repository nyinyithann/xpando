import { throwIfNullOrUndefined } from '../throwHelper';

/** @module */

/**
 * <h3> Dict.toArray() ⇒ Array </h3>
 * Returns an array of all key-value pairs in the mapping. The array will be ordered by the keys of the dict.
 * @returns The result array.
 * @example
 * const dict_10 = new Dict(
 *    [[1, "one"], [2, "two"], [3, "three"], [4, "four"]]
 * );
 * const array = dict_10.toArray();
 * console.log(array);
 * // => [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ], [ 4, 'four' ] ]
 */
function toArray() {
  throwIfNullOrUndefined(this, 'this');

  return [...this];
}

export default toArray;
