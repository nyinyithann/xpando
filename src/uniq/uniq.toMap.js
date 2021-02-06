import { throwIfNullOrUndefined } from '../throwHelper';

function toMap() {
  throwIfNullOrUndefined(this, 'this');
  return new Map(this.entries());
}

export default toMap;
