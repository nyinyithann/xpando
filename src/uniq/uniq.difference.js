import { throwIfNullOrUndefined } from '../throwHelper';
import Uniq from './uniq.core';

function difference(other) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(other, 'other');

  const uniq = new Uniq();
  for (const a of this) {
    if (!other.has(a)) {
      uniq.add(a);
    }
  }
  return uniq;
}

export default difference;
