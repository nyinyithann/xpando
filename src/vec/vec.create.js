import empty from './vec.empty';
import Vec from './vec.core';
import { throwIfNegativeNumber } from '../throwHelper';

function create(count, value) {
  throwIfNegativeNumber(count, 'count');

  const c = Math.floor(count);

  if (c === 0) {
    return empty();
  }

  const vec = new Vec();
  for (let i = 0; i < c; i += 1) {
    vec.push(value);
  }

  return vec;
}

export default create;
