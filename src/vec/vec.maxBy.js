import { isNumber } from '../util';
import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

function maxBy(projection) {
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

  let maxNum;

  for (let i = 0; i < this.length; i += 1) {
    const projected = projection.call(thisArg, this[i]);
    if (isNumber(projected)) {
      if (maxNum === undefined) {
        maxNum = projected;
      } else if (projected > maxNum) {
        maxNum = projected;
      }
    }
  }

  return maxNum;
}

export default maxBy;
