import { throwIfNullOrUndefined } from '../throwHelper';
import Dict from '../dict/dict.core';

/** @module */

/**
 * <h3> toDict() ⇒ Dict </h3>
 * Returns a Dict containing all the elements of the set.
 * @returns The result Dict.
 * @example
 * const uniq_20 = Uniq.of(1, 2, 3, 4, 5);
 * const dict = uniq_20.toDict();
 * console.log(dict);
 * // [Dict] { 1 => 1, 2 => 2, 3 => 3, 4 => 4, 5 => 5 }
 */
function toDict() {
  throwIfNullOrUndefined(this, 'this');
  return new Dict(this.entries());
}

export default toDict;
