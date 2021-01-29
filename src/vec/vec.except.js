import { throwIfNullOrUndefined } from '../throwHelper';
import { getHasher } from '../util';

function except(structuralEquality, ...itemsToExclude) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(structuralEquality, 'structuralEquality');

  if (this.length === 0) {
    return this;
  }

  if (itemsToExclude.length === 0) {
    return this.copy();
  }

  const set = new Set();
  const getHashKey = getHasher();

  for (const item of itemsToExclude) {
    if (structuralEquality === true) {
      const hashKey = getHashKey(item);
      set.add(hashKey);
    } else {
      set.add(item);
    }
  }

  return this.filter((x) => {
    if (structuralEquality === true) {
      const hashKey = getHashKey(x);
      return !set.has(hashKey);
    }
    return !set.has(x);
  });
}

export default except;
