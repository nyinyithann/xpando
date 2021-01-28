import Vec from './vec.core';
import { throwIfNullOrUndefined } from '../throwHelper';

function allPairs(other) {
  throwIfNullOrUndefined(this, 'this');

  if (!Array.isArray(other) || !Vec.isVec(other)) {
    throw TypeError('other should be Array or Vec.');
  }

  const thisLen = this.length;
  const otherLen = other.length;

  const result = new Vec(thisLen * otherLen);
  for (let i = 0; i < thisLen; i += 1) {
    for (let j = 0; j < otherLen; j += 1) {
      result[i * otherLen + j] = new Vec(this[i], other[j]);
    }
  }

  return result;
}

export default allPairs;
