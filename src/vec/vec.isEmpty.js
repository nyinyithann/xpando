import { throwIfNullOrUndefined } from '../throwHelper';

function isEmpty() {
  throwIfNullOrUndefined(this, 'this');
  return this.length === 0;
}

export default isEmpty;
