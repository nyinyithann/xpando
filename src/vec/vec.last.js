import { throwIfNullOrUndefined } from '../throwHelper';

function last() {
  throwIfNullOrUndefined(this, 'this');

  return this[this.length - 1];
}

export default last;
