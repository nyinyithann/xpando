import Vec from './vec.core';
import { isNull, isUndefined } from '../util';

function transpose(source) {
  if (!Array.isArray(source) || !Vec.isVec(source)) {
    throw TypeError('source should be Array or Vec.');
  }

  if (source.length === 0) {
    throw TypeError('source should have at least one element of type Array or Vec.');
  }

  let innerLen;
  for (let i = 0; i < source.length; i += 1) {
    if (!Array.isArray(source) || !Vec.isVec(source)) {
      throw TypeError('source should contain only Arrays or Vecs.');
    }
    if (isNull(innerLen) || isUndefined(innerLen)) {
      innerLen = source[i].length;
    } else if (innerLen !== source[i].length) {
      throw TypeError('all Array or Vec elements of source should have the same length.');
    }
  }

  const result = new Vec(innerLen);
  const len = source.length;
  for (let x = 0; x < innerLen; x += 1) {
    result[x] = new Vec(len);
    for (let y = 0; y < len; y += 1) {
      result[x][y] = source[y][x];
    }
  }

  return result;
}

export default transpose;
