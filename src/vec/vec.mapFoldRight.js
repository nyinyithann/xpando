import empty from './vec.empty';
import Vec from './vec.core';
import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

function mapFoldRight(mapping, acc) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotFunction(mapping, 'mapping');
  throwIfGeneratorFunction(mapping, 'mapping');

  let accumulator = acc;
  let thisArg;

  if (arguments.length > 2) {
    thisArg = arguments[2];
  }

  if (this.length === 0) {
    return new Vec(empty(), acc);
  }

  const vec = new Vec(this.length);
  for (let i = this.length - 1; i >= 0; i -= 1) {
    const [h, s] = mapping.call(thisArg, this[i], accumulator);
    vec[i] = h;
    accumulator = s;
  }

  return new Vec(vec, accumulator);
}

export default mapFoldRight;
