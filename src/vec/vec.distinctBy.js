import Vec from './vec.core';
import { equalWith, sameValueZeroEqual } from '../util';
import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

/** @module */

/**
 * <h3> distinctBy(projection, structuralEquality) ⇒ Vec </h3>
 * Returns a vector that contains no duplicate entries according to the equality comparisons on the keys returned by the given key-generating function.
 * If an element occurs multiple times in the array then the later occurrences are discarded.
 * @param projection A function transforming the vector items into comparable keys.
 * @param structuralEquality If true, deep equality will be used for comparing key, otherwise; same-value-zero equality.
 * @returns {Vec} The result vector.
 * @exception Throws TypeError if struturalEquality parameter is null or undefined; or projection parameter is a generator function
 * @example
 * const mixedVec = Vec.of(
 *    { name: "Fsharp", family: { name: "ML" } },
 *    { name: "OCaml", family: { name: "ML" } },
 *    { name: "C++", family: { name: "Smalltalk" } }
 * );
 * const distinctedByVec_1 = mixedVec.distinctBy(x => x.family, false);
 * console.log(distinctedByVec_1);
 * // =>
 *  [ { name: 'Fsharp', family: { name: 'ML' } },
 *    { name: 'OCaml', family: { name: 'ML' } },
 *    { name: 'C++', family: { name: 'Smalltalk' } } ]
 *
 * const distinctedByVec_2 = mixedVec.distinctBy(x => x.family, true);
 * console.log(distinctedByVec_2);
 * // =>
 *  [ { name: 'Fsharp', family: { name: 'ML' } },
 *    { name: 'C++', family: { name: 'Smalltalk' } } ]
 */
function distinctBy(projection, structuralEquality) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(structuralEquality, 'structuralEquality');
  throwIfNotFunction(projection, 'projection');
  throwIfGeneratorFunction(projection, 'projection');

  let thisArg;

  if (arguments.length > 2) {
    thisArg = arguments[2];
  }

  const set = new Set();
  const vec = new Vec();

  for (let i = 0; i < this.length; i += 1) {
    const value = this[i];
    const key = projection.call(thisArg, value);
    if (structuralEquality === true) {
      let hasKey = false;
      for (const k of set) {
        if (equalWith(sameValueZeroEqual, k, key)) {
          hasKey = true;
          break;
        }
      }
      if (!hasKey) {
        set.add(key);
        vec.push(value);
      }
    } else if (!set.has(key)) {
      set.add(key);
      vec.push(value);
    }
  }

  return vec;
}

export default distinctBy;
