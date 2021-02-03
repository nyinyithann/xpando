import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';
import Dict from './dict.core';

function partition(predicate) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotFunction(predicate, 'predicate');
  throwIfGeneratorFunction(predicate, 'predicate');

  let thisArg;

  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  const left = new Dict();
  const right = new Dict();

  for (const [k, v] of this) {
    if (predicate.call(thisArg, k, v)) {
      left.set(k, v);
    } else {
      right.set(k, v);
    }
  }

  return [left, right];
}

export default partition;
