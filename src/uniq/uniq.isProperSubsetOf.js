import { throwIfNullOrUndefined } from '../throwHelper';

function isProperSubsetOf(second) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(second, 'second');

  return this.every((a) => second.has(a)) && second.exists((b) => !this.has(b));
}

export default isProperSubsetOf;
