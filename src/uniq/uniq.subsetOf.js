import { throwIfNullOrUndefined } from '../throwHelper';

function isSubsetOf(second) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(second, 'second');

  return this.every((a) => second.has(a));
}

export default isSubsetOf;
