import Vec from './vec.core';
import { equalWith, sameValueZeroEqual } from '../util';
import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

/** @module */

/**
 * <h3> groupBy(projection, structuralEquality) ⇒ Vec </h3>
 * Applies a key-generating function to each element of a vector and yields a vector of unique keys.
 * Each unique key contains a vector of all elements that match to this key.
 * @param projection A function that transforms an element of the vector into a key.
 * @param structuralEquality If true, deep equality will be used for comparing key, otherwise; same-value-zero equality.
 * @returns {Vec} The result vector.
 * @exception Throws TypeError if
 * - structuralEquality paramater is null or undefined
 * - projection is a generator function
 * - projection is not a function
 * @example
 *
 * const langs = Vec.of(
 *    { name: "Fsharp", family: { name: "ML" } },
 *    { name: "OCaml", family: { name: "ML" } },
 *    { name: "C++", family: { name: "Smalltalk" }},
 *    { name: "C#", family: { name: "Smalltalk" }},
 *    { name: "FcukTheCoup", family: { name: "Generation Z" }},
 * );
 * const groupsByFamily = langs.groupBy(({family}) => family, true);
 * groupsByFamily.forEach(([key, values]) => {
 *    console.log(`key: ${key.name}`);
 *    console.log(`\tvalues: `);
 *    console.log(values);
 * });
 * // =>
 * key: ML
 * values:
 *  [ { name: 'Fsharp', family: { name: 'ML' } },
 *    { name: 'OCaml', family: { name: 'ML' } } ]
 * key: Smalltalk
 * values:
 *  [ { name: 'C++', family: { name: 'Smalltalk' } },
 *    { name: 'C#', family: { name: 'Smalltalk' } } ]
 * key: Generation Z
 * values:
 *  [ { name: 'FcukTheCoup', family: { name: 'Generation Z' } } ]
 */
function groupBy(projection, structuralEquality) {
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
      let foundKey = false;

      for (const k of map.keys()) {
        if (equalWith(sameValueZeroEqual, k, key)) {
          const values = map.get(k);
          values.push(item);
          foundKey = true;
          break;
        }
      }

      if (!foundKey) {
        map.set(key, Vec.of(item));
      }
    } else {
      const values = map.get(key) || new Vec();
      values.push(item);
      map.set(key, values);
    }
  }

  const vec = new Vec();
  map.forEach((v, k) => vec.push(Vec.of(k, v)));
  return vec;
}

export default groupBy;
