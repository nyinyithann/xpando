import { throwIfContainerEmpty, throwIfNullOrUndefined } from '../throwHelper';

/** @module */

/**
 * <h3> head() ⇒ element </h3>
 * Returns the first element of the array.
 * @returns The first element of the array.
 * @exception Throws TypeError if the vector is empty.
 * @example
 * const oneToFour = Vec.init(5, x => x + 1);
 * const head = oneToFour.head();
 * console.log(head);
 * // => 1
 */
function head() {
  throwIfNullOrUndefined(this, 'this');
  throwIfContainerEmpty(this);

  return this[0];
}

export default head;
