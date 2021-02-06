import { throwIfNullOrUndefined } from '../throwHelper';

function toArray() {
  throwIfNullOrUndefined(this, 'this');

  return [...this];
}

export default toArray;
