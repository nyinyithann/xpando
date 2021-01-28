import empty from './vec.empty';
import Vec from './vec.core';
import { throwIfNegativeNumber, throwIfNullOrUndefined } from '../throwHelper';

function chunkBySize(chunkSize) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNegativeNumber(chunkSize, 'chunkSize');

  const ckSize = Math.floor(chunkSize);
  const len = this.length;

  if (len === 0) {
    return empty();
  } if (ckSize > len) {
    return new Vec(this.copy());
  }
  const vec = new Vec();
  const chunkCount = Math.floor(len / ckSize);
  const loopCount = chunkCount * ckSize;

  for (let i = 0; i < loopCount; i += ckSize) {
    vec.push(this.slice(i, i + ckSize));
  }

  if (loopCount === len) {
    return vec;
  }
  vec.push(this.slice(loopCount));
  return vec;
}

export default chunkBySize;
