import hash from 'object-hash';
import { throwIfContainerEmpty, throwIfNullOrUndefined } from '../throwHelper';

function except(...itemsToExclude) {
  throwIfNullOrUndefined(this, 'this');
  throwIfContainerEmpty(itemsToExclude, 'itemsToExclude');

  if (this.length === 0) {
    return this;
  }

  const set = new Set();
  for (const item of itemsToExclude) {
    const hashKey = hash(item, { ignoreUnknown: true });
    set.add(hashKey);
  }

  return this.filter((x) => {
    const hashKey = hash(x, { ignoreUnknown: true });
    return !set.has(hashKey);
  });
}

export default except;
