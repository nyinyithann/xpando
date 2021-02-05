import { throwIfNullOrUndefined } from '../throwHelper';

function toSet() {
  throwIfNullOrUndefined(this, 'this');
  return new Set(this.entries());
}

export default toSet;
