import Vec from './vec.core';
import { equalWith, sameValueZeroEqual } from '../util';
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
      let foundKey = false;
      for (const k of map.keys()) {
        if (equalWith(sameValueZeroEqual, k, key)) {
          count = map.get(k) + 1;
          foundKey = true;
          map.set(k, count);
          break;
        }
      }
      if (!foundKey) {
        map.set(key, count);
      }
    } else {
      map.set(key, (map.get(key) || 0) + 1);
    }
  }

  const vec = new Vec();
  map.forEach((v, k) => vec.push(Vec.of(k, v)));
  return vec;
}

export default countBy;
