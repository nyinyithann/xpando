import empty from './vec.empty';
import Vec from './vec.core';
import { throwIfNullOrUndefined } from '../throwHelper';

function take(count) {
  throwIfNullOrUndefined(this, 'this');

  if (count <= 0) {
    return empty();
  }

  const len = this.length;

  if (count >= len) {
    return this;
  }

  const thisVec = Object(this);
  let start = 0;

  const result = new Vec();

  while (start < count) {
    if (start === len) {
      break;
    } else {
      result.push(thisVec[start]);
      start += 1;
    }
  }

  return result;
}

export default take;
