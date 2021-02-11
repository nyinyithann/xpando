import { throwIfNullOrUndefined } from '../throwHelper';
import Uniq from '../uniq/uniq.core';

/** @module */

/**
 * <h3> Dict.toUniq() ⇒ Uniq </h3>
 * Returns a uniq of all key-value pairs in the mapping. The uniq will be ordered by the keys of the map.
 * @returns The result set.
 * @example
 * const dict = new Dict(
 *    [[1, "one"], [2, "two"], [3, "three"], [4, "four"]]
 * );
 * const uniq = dict.toUniq();
 * console.log(uniq);
 * // => [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ], [ 4, 'four' ] ]
 */
function toUniq() {
  throwIfNullOrUndefined(this, 'this');

  return new Uniq(this.entries());
}

export default toUniq;
