import Vec from './vec.core';
import { equalWith, sameValueZeroEqual } from '../util';
import { throwIfNullOrUndefined } from '../throwHelper';

/** @module */


/**
 * <h3> distinct(structuralEquality) ⇒ Vec </h3>
 * Returns a vector that contains no duplicate entries.
 * If an element occurs multiple times in the vector then the later occurrences are discarded.
 * @param structuralEquality If true, deep equality will be used for comparing key, otherwise; same-value-zero equality.
 * @returns {Vec} The result vector.
 *  @exception {TypeError} if struturalEquality parameter is null or undefined.
 * @example
 * const mixedVec = Vec.of(1, 1, 1, 2, 2, 2, 3, 3, 3, { n: 1 }, { n: 1 });
 * const distinctVec_1 = mixedVec.distinct(false);
 * console.log(distinctVec_1);
 * // => [ 1, 2, 3, { n: 1 }, { n: 1 } ]
 * const distinctVec_2 = mixedVec.distinct(true);
 * console.log(distinctVec_2);
 * // => [ 1, 2, 3, { n: 1 } ]
 */
function distinct(structuralEquality) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(structuralEquality, 'structuralEquality');

  const set = new Set();

  for (let i = 0; i < this.length; i += 1) {
    const key = this[i];
    if (structuralEquality === true) {
      if ([...set].every((x) => !equalWith(sameValueZeroEqual, x, key))) {
        set.add(key);
      }
    } else if (!set.has(key)) {
      set.add(key);
    }
  }

  return Vec.from(set);
}

export default distinct;
