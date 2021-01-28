import Vec from './vec.core';
import { getHasher } from '../util';
import { throwIfNullOrUndefined } from '../throwHelper';

function distinct(structuralEquality) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(structuralEquality, 'structuralEquality');

  const vec = new Vec();
  const set = new Set();

  const getHashKey = getHasher();
  for (let i = 0; i < this.length; i += 1) {
    if (structuralEquality === true) {
      const hashKey = getHashKey(this[i]);
      if (!set.has(hashKey)) {
        set.add(hashKey);
        vec.push(this[i]);
      }
    } else {
      const key = this[i];
      if (!set.has(key)) {
        set.add(key);
        vec.push(this[i]);
      }
    }
  }

  return vec;
}

export default distinct;
