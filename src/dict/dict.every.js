import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

function every(predicate) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotFunction(predicate, 'predicate');
  throwIfGeneratorFunction(predicate, 'predicate');

  let thisArg;

  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  for (const [k, v] of this) {
    if (!predicate.call(thisArg, k, v)) {
      return false;
    }
  }

  return true;
}

export default every;
