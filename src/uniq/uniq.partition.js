import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';
import Uniq from './uniq.core';

function partition(predicate) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotFunction(predicate, 'predicate');
  throwIfGeneratorFunction(predicate, 'predicate');

  let thisArg;

  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  const left = new Uniq();
  const right = new Uniq();

  for (const v of this) {
    if (predicate.call(thisArg, v)) {
      left.add(v);
    } else {
      right.add(v);
    }
  }

  return [left, right];
}

export default partition;
