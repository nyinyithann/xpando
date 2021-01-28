import { throwIfNullOrUndefined } from '../throwHelper';

function copy() {
  throwIfNullOrUndefined(this, 'this');
  return this.slice();
}

export default copy;
