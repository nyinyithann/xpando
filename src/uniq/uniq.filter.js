import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';
import Uniq from './uniq.core';

function filter(predicate) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotFunction(predicate, 'predicate');
  throwIfGeneratorFunction(predicate, 'predicate');

  let thisArg;

  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  const uniq = new Uniq();
  for (const v of this) {
    if (predicate.call(thisArg, v)) {
      uniq.add(v);
    }
  }

  return uniq;
}

export default filter;
