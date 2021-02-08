import { throwIfNullOrUndefined } from '../throwHelper';
import Uniq from './uniq.core';

function intersect(...others) {
  throwIfNullOrUndefined(this, 'this');

  if (others.some((x) => !(x instanceof Set || x instanceof Uniq))) {
    throw new TypeError('arguments must contain instance of type Set or Uniq.');
  }

  const uniq = new Uniq();

  if (others.length === 0) {
    return uniq;
  }

  for (const a of this) {
    if (others.every((x) => x.has(a))) {
      uniq.add(a);
    }
  }

  return uniq;
}

export default intersect;
