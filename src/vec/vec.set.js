import { throwIfNullOrUndefined } from '../throwHelper';

function set(index, value) {
  throwIfNullOrUndefined(this, 'this');

  // eslint-disable-next-line no-return-assign
  return this[index] = value;
}

export default set;
