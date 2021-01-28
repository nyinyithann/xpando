import Vec from './vec.core';
import { throwIfNullOrUndefined } from '../throwHelper';

function zip(other) {
  throwIfNullOrUndefined(this, 'this');

  const thisLen = this.length;
  if (thisLen !== other.length) {
    throw new TypeError('other has different array length.');
  }

  const vec = new Vec(thisLen);
  for (let i = 0; i < thisLen; i += 1) {
    vec[i] = new Vec(this[i], other[i]);
  }

  return vec;
}

export default zip;
