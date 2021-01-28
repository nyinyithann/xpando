import Vec from './vec.core';
import { getHasher } from '../util';
import {
  throwIfGeneratorFunction,
  throwIfNotAFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

function countBy(projection, structuralEquality) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(structuralEquality, 'structuralEquality');
  throwIfNotAFunction(projection, 'projection');
  throwIfGeneratorFunction(projection, 'projection');

  let thisArg;

  if (arguments.length > 2) {
    thisArg = arguments[2];
  }

  const map = new Map();
  const getHashKey = getHasher();
  for (const item of this) {
    const key = projection.call(thisArg, item);
    if (structuralEquality === true) {
      const hashKey = getHashKey(key);
      const hk = map.get(hashKey);
      const count = hk ? hk.count + 1 : 1;
      map.set(hashKey, { key, count });
    } else {
      map.set(key, (map.get(key) || 0) + 1);
    }
  }

  const vec = new Vec();

  for (const [k, v] of map.entries()) {
    if (structuralEquality === true) {
      vec.push(new Vec(v.key, v.count));
    } else {
      vec.push(new Vec(k, v));
    }
  }
  return vec;
}

export default countBy;
