import { throwIfNullOrUndefined } from '../throwHelper';

function isEmpty() {
  throwIfNullOrUndefined(this, 'this');

  return this.size === 0;
}

export default isEmpty;
