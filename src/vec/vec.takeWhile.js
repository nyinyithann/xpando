import Vec from './vec.core';
import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

function takeWhile(predicate) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotFunction(predicate, 'predicate');
  throwIfGeneratorFunction(predicate, 'predicate');

  let thisArg;

  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  const result = new Vec();

  for (const item of this) {
    if (predicate.call(thisArg, item)) {
      result.push(item);
    } else {
      break;
    }
  }

  return result;
}

export default takeWhile;
