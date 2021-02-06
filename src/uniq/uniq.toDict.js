import { throwIfNullOrUndefined } from '../throwHelper';
import Dict from '../dict/dict.core';

function toDict() {
  throwIfNullOrUndefined(this, 'this');
  return new Dict(this.entries());
}

export default toDict;
