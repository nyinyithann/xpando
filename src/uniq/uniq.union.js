import { throwIfNullOrUndefined } from '../throwHelper';
import Uniq from './uniq.core';

function union(...args) {
  throwIfNullOrUndefined(this, 'this');

  if (args.some((x) => !(x instanceof Set || x instanceof Uniq))) {
    throw new TypeError('arguments must contain instance of type Set or Uniq.');
  }

  if (args.length === 0) {
    return this;
  }

  const uniq = new Uniq(this);
  for (let i = 0; i < args.length; i += 1) {
    for (const v of args[i]) {
      uniq.add(v);
    }
  }

  return uniq;
}

export default union;
