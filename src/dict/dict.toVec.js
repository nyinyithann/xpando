import { throwIfNullOrUndefined } from '../throwHelper';
import Vec from '../vec/vec.core';

/** @module */

/**
 * <h3> toVec() ⇒ Vec </h3>
 * Returns a vec of all key-value pairs in the mapping. The vec will be ordered by the keys of the dict.
 * @returns The result vec.
 * @example
 * const dict = new Dict(
 *    [[1, "one"], [2, "two"], [3, "three"], [4, "four"]]
 * );
 * const vec = dict.toVec();
 * console.log(vec);
 * // => [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ], [ 4, 'four' ] ]
 */
function toVec() {
  throwIfNullOrUndefined(this, 'this');

  return Vec.from(this);
}

export default toVec;
