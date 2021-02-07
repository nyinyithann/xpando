import { throwIfNullOrUndefined } from '../throwHelper';

function isProperSupersetOf(second) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(second, 'second');

  return second.every((a) => this.has(a)) && this.exists((b) => !second.has(b));
}

export default isProperSupersetOf;
