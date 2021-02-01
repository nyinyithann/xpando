import Vec from './vec.core';
import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

function partition(predicate) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotFunction(predicate, 'predicate');
  throwIfGeneratorFunction(predicate, 'predicate');

  let thisArg;

  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  const left = new Vec();
  const right = new Vec();

  for (const item of this) {
    if (predicate.call(thisArg, item)) {
      left.push(item);
    } else {
      right.push(item);
    }
  }

  return new Vec(left, right);
}

export default partition;
