import Vec from './vec.core';
import { throwIfNegativeNumber, throwIfNullOrUndefined } from '../throwHelper';

function splitAt(index) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNegativeNumber(index, 'index');

  const idx = Math.floor(index);

  if (this.length < idx) {
    throw new TypeError('The vec has an insufficient number of elements.');
  }

  if (idx === 0) {
    return new Vec([], this.slice(0));
  }

  if (idx === this.length) {
    return new Vec(this.slice(0), []);
  }

  return new Vec(this.slice(0, idx), this.slice(idx));
}

export default splitAt;
