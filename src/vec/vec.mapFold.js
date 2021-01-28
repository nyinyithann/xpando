import empty from './vec.empty';
import Vec from './vec.core';
import {
  throwIfGeneratorFunction,
  throwIfNotAFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

function mapFold(mapping, acc) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotAFunction(mapping, 'mapping');
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
  for (let i = 0; i < this.length; i += 1) {
    const [h, s] = mapping.call(thisArg, accumulator, this[i]);
    vec[i] = h;
    accumulator = s;
  }

  return new Vec(vec, accumulator);
}

export default mapFold;
