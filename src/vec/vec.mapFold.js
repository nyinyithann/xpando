import empty from './vec.empty';
import Vec from './vec.core';
import {
  throwIfGeneratorFunction,
  throwIfNotAFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

function mapFold(mapping, accumulator) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(accumulator, 'accumulator');
  throwIfNotAFunction(mapping, 'mapping');
  throwIfGeneratorFunction(mapping, 'mapping');

  let acc = accumulator;
  let thisArg;

  if (arguments.length > 2) {
    thisArg = arguments[2];
  }

  if (this.length === 0) {
    return new Vec(empty(), acc);
  }

  const vec = new Vec(this.length);
  for (let i = 0; i < this.length; i += 1) {
    const [h, s] = mapping.call(thisArg, acc, this[i]);
    vec[i] = h;
    acc = s;
  }

  return new Vec(vec, acc);
}

export default mapFold;
