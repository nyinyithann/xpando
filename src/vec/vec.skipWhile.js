import empty from './vec.empty';
import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

function skipWhile(predicate) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotFunction(predicate, 'predicate');
  throwIfGeneratorFunction(predicate, 'predicate');

  let thisArg;

  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  let i = 0;
  while (i < this.length && predicate.call(thisArg, this[i])) {
    i += 1;
  }

  if (i === this.length) {
    return empty();
  }
  return this.slice(i);
}

export default skipWhile;
