import empty from './vec.empty';
import Vec from './vec.core';
import { throwIfNullOrUndefined } from '../throwHelper';

function pairwise() {
  throwIfNullOrUndefined(this, 'this');

  if (this.length < 2) {
    return empty();
  }

  return Vec.init(this.length - 1, (i) => new Vec(this[i], this[i + 1]));
}

export default pairwise;
