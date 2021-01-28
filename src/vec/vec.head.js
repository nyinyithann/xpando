import { throwIfContainerEmpty, throwIfNullOrUndefined } from '../throwHelper';

function head() {
  throwIfNullOrUndefined(this, 'this');
  throwIfContainerEmpty(this);

  return this[0];
}

export default head;
