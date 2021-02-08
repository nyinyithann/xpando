import { throwIfNullOrUndefined } from '../throwHelper';
import Uniq from './uniq.core';

function union(...others) {
  throwIfNullOrUndefined(this, 'this');

  if (others.some((x) => !(x instanceof Set || x instanceof Uniq))) {
    throw new TypeError('arguments must contain instance of type Set or Uniq.');
  }

  if (others.length === 0) {
    return this;
  }

  const uniq = new Uniq(this);
  for (let i = 0; i < others.length; i += 1) {
    for (const v of others[i]) {
      uniq.add(v);
    }
  }

  return uniq;
}

export default union;
