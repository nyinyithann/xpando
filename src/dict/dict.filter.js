import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';
import Dict from './dict.core';

function filter(predicate) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotFunction(predicate, 'predicate');
  throwIfGeneratorFunction(predicate, 'predicate');

  let thisArg;

  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  const dict = new Dict();

  for (const [k, v] of this) {
    if (predicate.call(thisArg, k, v)) {
      dict.set(k, v);
    }
  }

  return dict;
}

export default filter;
