import Vec from './vec.core';
import { equalWith, sameValueZeroEqual } from '../util';
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

  const map = new Map();

  for (const item of this) {
    const key = projection.call(thisArg, item);
    if (structuralEquality === true) {
      let foundKey = false;

      for (const k of map.keys()) {
        if (equalWith(sameValueZeroEqual, k, key)) {
          const values = map.get(k);
          values.push(item);
          foundKey = true;
          break;
        }
      }

      if (!foundKey) {
        map.set(key, Vec.of(item));
      }
    } else {
      const values = map.get(key) || new Vec();
      values.push(item);
      map.set(key, values);
    }
  }

  const vec = new Vec();
  map.forEach((v, k) => vec.push(Vec.of(k, v)));
  return vec;
}

export default groupBy;
