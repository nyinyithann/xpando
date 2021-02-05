import Dict from './dict.core';
import {
  isNotNull, isNotUndefined,
} from '../util';

function of() {
  const dict = new Dict();

  for (let i = 0; i < arguments.length; i += 1) {
    const [k, v] = arguments[i];
    if (isNotNull(k) && isNotUndefined(k) && isNotNull(v) && isNotUndefined(v)) {
      dict.set(k, v);
    }
  }

  return dict;
}

export default of;
