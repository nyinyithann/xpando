import empty from './vec.empty';
import Vec from './vec.core';
import { throwIfNegativeNumber, throwIfNullOrUndefined } from '../throwHelper';

function windowed(windowSize) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNegativeNumber(windowSize, 'windowSize');

  const wsize = Math.floor(windowSize);

  if (wsize > this.length) {
    return empty();
  }

  const size = this.length - wsize + 1;
  const vec = new Vec(size);
  for (let i = 0; i < size; i += 1) {
    vec[i] = this.slice(i, wsize + i);
  }

  return vec;
}

export default windowed;
