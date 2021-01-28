import empty from './vec.empty';
import Vec from './vec.core';
import {
  throwIfGeneratorFunction,
  throwIfNegativeNumber,
  throwIfNotAFunction,
} from '../throwHelper';

function init(count, initializer) {
  throwIfNegativeNumber(count, 'count');
  throwIfNotAFunction(initializer, 'initializer');
  throwIfGeneratorFunction(initializer, 'initializer');

  const c = Math.floor(count);

  if (c === 0) {
    return empty();
  }

  const vec = new Vec();
  for (let i = 0; i < c; i += 1) {
    vec.push(initializer(i));
  }
  return vec;
}

export default init;
