import { throwIfNullOrUndefined } from '../throwHelper';

/** @module */

/**
 * <h3> isSubsetOf(second) ⇒ boolean </h3>
 * Evaluates to "true" if all elements of the source set are in the second.
 * @param second The set to test against.
 * @returns True if the source set is a subset of the second.
 * @exception {TypeError} When second is null or undefined.
 * @example
 * const uniq_13 = Uniq.of(1, 2, 3);
 * const uniq_14 = Uniq.of(1, 2, 3, 4);
 * const isSubset = uniq_13.isSubsetOf(uniq_14);
 * console.log(`uniq_13 is a subset of uniq_14: ${isSubset}`);
 * // => uniq_13 is a subset of uniq_14: true
 */
function isSubsetOf(second) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(second, 'second');

  return this.every((a) => second.has(a));
}

export default isSubsetOf;
