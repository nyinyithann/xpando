import { throwIfNullOrUndefined } from '../throwHelper';
import Uniq from '../uniq/uniq.core';

function toUniq() {
  throwIfNullOrUndefined(this, 'this');

  return new Uniq(this.entries());
}

export default toUniq;
