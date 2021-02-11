import { throwIfNullOrUndefined } from '../throwHelper';
import { equalWith, sameValueZeroEqual } from '../util';

/** @module */

/**
 * <h3> except(structuralEquality, ...itemsToExclude) ⇒ Vec </h3>
 * Returns a new list with the distinct elements of the input array which do not appear in the itemsToExclude sequence.
 * @param structuralEquality If true, deep equality will be used for comparison, otherwise; same-value-zero equality.
 * @param itemsToExclude A sequence whose elements that also occur in the source vector will cause those elements to be removed from the result.
 * @returns {Vec} A vector that contains the distinct elements of source vector that do not appear in itemsToExclude.
 * @exception {TypeError} if structuralEquality parameter is null or undefined.
 * @example
 * const nObjVec = Vec.of({ n: 1 }, { n: 1 }, { n: 2 }, { n: 2 }, { n: 2 }, { n: 4 });
 * const except_1 = nObjVec.except(false, { n: 1 }, { n: 4 });
 * console.log(except_1);
 * // no items excluded under same-value-zero equality, no objects are equal to one another unless they are referencing to the same instance
 * // => [ { n: 1 }, { n: 1 }, { n: 2 }, { n: 2 }, { n: 2 }, { n: 4 } ]
 * const except_2 = nObjVec.except(true, { n: 1 }, { n: 2 });
 * console.log(except_2);
 * // => [ { n: 4 } ]
 */
function except(structuralEquality, ...itemsToExclude) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(structuralEquality, 'structuralEquality');

  if (this.length === 0) {
    return this;
  }

  if (itemsToExclude.length === 0) {
    return this.copy();
  }

  const set = new Set();

  for (const item of itemsToExclude) {
    if (structuralEquality === true) {
      if ([...set].every((x) => !equalWith(sameValueZeroEqual, x, item))) {
        set.add(item);
      }
    } else {
      set.add(item);
    }
  }

  return this.filter((item) => {
    if (structuralEquality === true) {
      return [...set].every((x) => !equalWith(sameValueZeroEqual, x, item));
    }
    return !set.has(item);
  });
}

export default except;
