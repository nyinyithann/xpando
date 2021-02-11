import Vec from './vec.core';
import { equalWith, sameValueZeroEqual } from '../util';
import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

/** @module */

/**
 * <h3> countBy(projection, structuralEquality) ⇒ Vec </h3>
 * Applies a key-generating function to each element of a vector and
 * returns a vector yielding unique keys and their number of occurrences in the original array.
 * @param projection A function transforming each item of the input vector into a key to be compared against the others.
 * @param structuralEquality If true, deep equality will be used for comparing key, otherwise; same-value-zero equality.
 * @returns {Vec} The result vector.
 *  @exception {TypeError} if struturalEquality parameter is null or undefined; or projection parameter is a generator function
 * or not a function.
 * @example
 * const countByVec = new Vec(1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5);
 * const counts_1 = countByVec.countBy(x => x, false);
 * console.log(counts_1);
 * // => [ [ 1, 5 ], [ 2, 5 ], [ 3, 3 ], [ 4, 3 ], [ 5, 1 ] ]
 * const counts_2 = countByVec.countBy(x => x % 2 === 0, false);
 * console.log(counts_2);
 * // => [ [ false, 9 ], [ true, 8 ] ]
 */
function countBy(projection, structuralEquality) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(structuralEquality, 'structuralEquality');
  throwIfNotFunction(projection, 'projection');
  throwIfGeneratorFunction(projection, 'projection');

  let thisArg;

  if (arguments.length > 2) {
    thisArg = arguments[2];
  }

  const map = new Map();
  for (const item of this) {
    const key = projection.call(thisArg, item);
    if (structuralEquality === true) {
      let count = 1;
      let foundKey = false;
      for (const k of map.keys()) {
        if (equalWith(sameValueZeroEqual, k, key)) {
          count = map.get(k) + 1;
          foundKey = true;
          map.set(k, count);
          break;
        }
      }
      if (!foundKey) {
        map.set(key, count);
      }
    } else {
      map.set(key, (map.get(key) || 0) + 1);
    }
  }

  const vec = new Vec();
  map.forEach((v, k) => vec.push(Vec.of(k, v)));
  return vec;
}

export default countBy;
