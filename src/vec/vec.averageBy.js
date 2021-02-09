import { isNumber } from '../util';
import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

/** @module */

/**
 * <h3> averageBy(projection) ⇒ number|undefined </h3>
 * Returns the average of the elements generated by applying the function to each element of the vector.
 * @param projection The function to transform the vector elements before averaging.
 * @returns {number|undefined} The computed average or undefined if the source vector is empty.
 * @exception Throws TypeError if projection is a generator function or not a function.
 * @example
 * const vecOfObjs = new Vec({ n: 1 }, { n: 1 }, { n: 1 }, { n: 1 }, { n: -1 }, { n: 1 });
 * const avgBy = vecOfObjs.averageBy(({ n }) => n);
 * console.log(avgBy);
 * // => 0.6666666666666666
 */
function averageBy(projection) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotFunction(projection, 'projection');
  throwIfGeneratorFunction(projection, 'projection');

  let thisArg;

  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  if (this.length === 0) {
    return undefined;
  }

  let sum = 0;

  for (let i = 0; i < this.length; i += 1) {
    const projected = projection.call(thisArg, this[i]);
    if (isNumber(projected)) {
      sum += projected;
    }
  }

  return sum / this.length;
}

export default averageBy;
