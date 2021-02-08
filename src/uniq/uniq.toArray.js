import { throwIfNullOrUndefined } from '../throwHelper';

function toArray() {
  throwIfNullOrUndefined(this, 'this');

  return [...this.values()];
}

export default toArray;
