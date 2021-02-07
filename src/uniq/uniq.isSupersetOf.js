import { throwIfNullOrUndefined } from '../throwHelper';

function isSupersetOf(second) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(second, 'second');

  return second.every((a) => this.has(a));
}

export default isSupersetOf;
