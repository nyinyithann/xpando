import Vec from './vec.core';
import { equalWith, sameValueZeroEqual } from '../util';
import {
  throwIfGeneratorFunction,
  throwIfNotAFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

function distinctBy(projection, structuralEquality) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(structuralEquality, 'structuralEquality');
  throwIfNotAFunction(projection, 'projection');
  throwIfGeneratorFunction(projection, 'projection');

  let thisArg;

  if (arguments.length > 2) {
    thisArg = arguments[2];
  }

  const set = new Set();
  const vec = new Vec();

  for (let i = 0; i < this.length; i += 1) {
    const value = this[i];
    const key = projection.call(thisArg, value);
    if (structuralEquality === true) {
      let hasKey = false;
      for (const k of set) {
        if (equalWith(sameValueZeroEqual, k, key)) {
          hasKey = true;
          break;
        }
      }
      if (!hasKey) {
        set.add(key);
        vec.push(value);
      }
    } else if (!set.has(key)) {
      set.add(key);
      vec.push(value);
    }
  }

  return vec;
}

export default distinctBy;
