import { throwIfNullOrUndefined } from '../throwHelper';
import Vec from '../vec/vec.core';

/** @module */

/**
 * <h3> toVec() ⇒ Vec </h3>
 * Returns a Vec containing all the elements of the set.
 * @returns The result Vec.
 * @example
 * const uniq = Uniq.of(1, 2, 3);
 * const vec = uniq.toVec();
 * console.log(vec);
 * // => [ 1, 2, 3 ]
 */
function toVec() {
  throwIfNullOrUndefined(this, 'this');

  return Vec.from(this.values());
}

export default toVec;
