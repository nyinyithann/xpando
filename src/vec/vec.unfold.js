import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';
import { isNotNull, isNotUndefined } from '../util';
import Vec from './vec.core';

function unfold(generator, state) {
  throwIfNullOrUndefined(state, 'state');
  throwIfNotFunction(generator, 'generator');
  throwIfGeneratorFunction(generator, 'generator');

  const result = new Vec();

  (function loop(s) {
    const gs = generator(s);
    if (isNotNull(gs) && isNotUndefined(gs)) {
      const [fst, snd] = gs;
      result.push(fst);
      if (isNotNull(snd) && isNotUndefined(snd)) {
        loop(snd);
      }
    }
  }(state));

  return result;
}

export default unfold;
