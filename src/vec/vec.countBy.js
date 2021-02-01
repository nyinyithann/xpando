import Vec from './vec.core';
import { compareWith, sameValueZeroEqual } from '../util';
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
  for (const item of this) {
    const key = projection.call(thisArg, item);
    if (structuralEquality === true) {
      let count = 1;
      let existingKey;
      for (const k of map.keys()) {
        if (compareWith(sameValueZeroEqual, k, key)) {
          count = map.get(k) + 1;
          existingKey = k;
          map.set(k, count);
          break;
        }
      }
      if (!existingKey) {
        map.set(key, count);
      }
    } else {
      map.set(key, (map.get(key) || 0) + 1);
    }
  }

  const vec = new Vec();

  for (const [k, v] of map.entries()) {
    vec.push(new Vec(k, v));
  }
  return vec;
}

export default countBy;
