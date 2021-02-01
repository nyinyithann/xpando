import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

function exists(predicate) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotFunction(predicate, 'predicate');
  throwIfGeneratorFunction(predicate, 'predicate');

  if (this.size === 0) {
    return false;
  }

  let thisArg;

  if (arguments.length > 2) {
    thisArg = arguments[2];
  }

  for (const [k, v] of this.entries()) {
    if (predicate.call(thisArg, k, v)) {
      return true;
    }
  }

  return false;
}

export default exists;
