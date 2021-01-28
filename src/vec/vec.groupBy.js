import Vec from './vec.core';
import { getHasher } from '../util';
import {
  throwIfGeneratorFunction,
  throwIfNotAFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

function groupBy(projection, structuralEquality) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(structuralEquality, 'structuralEquality');
  throwIfNotAFunction(projection, 'projection');
  throwIfGeneratorFunction(projection, 'projection');

  let thisArg;

  if (arguments.length > 2) {
    thisArg = arguments[2];
  }

  const getHashKey = getHasher();
  const map = new Map();

  for (const item of this) {
    const key = projection.call(thisArg, item);
    if (structuralEquality === true) {
      const hashKey = getHashKey(key);
      const hk = map.get(hashKey);
      const values = hk ? hk.values : new Vec();
      values.push(item);
      map.set(hashKey, { key, values });
    } else {
      const values = map.get(key) || new Vec();
      values.push(item);
      map.set(key, values);
    }
  }

  const vec = new Vec();

  for (const [k, v] of map.entries()) {
    if (structuralEquality === true) {
      vec.push(new Vec(v.key, v.values));
    } else {
      vec.push(new Vec(k, v));
    }
  }
  return vec;
}

export default groupBy;
