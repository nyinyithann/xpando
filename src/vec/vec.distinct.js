import Vec from './vec.core';
import { compareWith, sameValueZeroEqual } from '../util';
import { throwIfNullOrUndefined } from '../throwHelper';

function distinct(structuralEquality) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(structuralEquality, 'structuralEquality');

  const set = new Set();

  for (let i = 0; i < this.length; i += 1) {
    const key = this[i];
    if (structuralEquality === true) {
      if ([...set.values()].every((x) => !compareWith(sameValueZeroEqual, x, key))) {
        set.add(key);
      }
    } else if (!set.has(key)) {
      set.add(key);
    }
  }

  return Vec.from(set);
}

export default distinct;
