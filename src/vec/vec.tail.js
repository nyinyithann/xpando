import { throwIfContainerEmpty, throwIfNullOrUndefined } from '../throwHelper';

function tail() {
  throwIfNullOrUndefined(this, 'this');
  throwIfContainerEmpty(this);

  return this.slice(1);
}

export default tail;
