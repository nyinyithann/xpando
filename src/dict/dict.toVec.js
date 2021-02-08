import { throwIfNullOrUndefined } from '../throwHelper';
import Vec from '../vec/vec.core';

function toVec() {
  throwIfNullOrUndefined(this, 'this');

  return Vec.from(this);
}

export default toVec;