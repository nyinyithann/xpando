import { throwIfNullOrUndefined } from '../throwHelper';
import empty from './uniq.empty';
import Uniq from './uniq.core';

function intersect(other) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(other, 'other');

  if (this.isEmpty() || other.isEmpty()) {
    return empty();
  }

  const uniq = new Uniq();
  for (const a of this) {
    if (other.has(a)) {
      uniq.add(a);
    }
  }

  return uniq;
}

export default intersect;
