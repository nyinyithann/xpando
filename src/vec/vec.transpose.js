import Vec from './vec.core';
import { isNull, isUndefined } from '../util';
import empty from './vec.empty';
import { throwIfNullOrUndefined } from '../throwHelper';

function transpose() {
  throwIfNullOrUndefined(this, 'this');

  if (this.length === 0) {
    return empty();
  }

  let innerLen;
  for (let i = 0; i < this.length; i += 1) {
    if (isNull(innerLen) || isUndefined(innerLen)) {
      innerLen = this[i].length;
    } else if (innerLen !== this[i].length) {
      throw TypeError('all Array or Vec elements of source should have the same length.');
    }
  }

  const result = new Vec(innerLen);
  const len = this.length;
  for (let x = 0; x < innerLen; x += 1) {
    result[x] = new Vec(len);
    for (let y = 0; y < len; y += 1) {
      result[x][y] = this[y][x];
    }
  }

  return result;
}

export default transpose;
