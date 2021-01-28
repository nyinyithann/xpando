import { throwIfNullOrUndefined } from '../throwHelper';

function get(index) {
  throwIfNullOrUndefined(this, 'this');

  return this[index];
}

export default get;
