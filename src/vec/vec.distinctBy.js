import Vec from './vec.core';
import { getHasher } from '../util';
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

  const vec = new Vec();
  const set = new Set();

  const getHashKey = getHasher();
  for (let i = 0; i < this.length; i += 1) {
    if (structuralEquality === true) {
      const hashKey = getHashKey(projection.call(thisArg, this[i]));
      if (!set.has(hashKey)) {
        set.add(hashKey);
        vec.push(this[i]);
      }
    } else {
      const key = projection.call(thisArg, this[i]);
      if (!set.has(key)) {
        set.add(key);
        vec.push(this[i]);
      }
    }
  }

  return vec;
}

export default distinctBy;
