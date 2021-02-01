import { throwIfNullOrUndefined } from '../throwHelper';
import { equalWith, sameValueZeroEqual } from '../util';

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

  for (const item of itemsToExclude) {
    if (structuralEquality === true) {
      if ([...set].every((x) => !equalWith(sameValueZeroEqual, x, item))) {
        set.add(item);
      }
    } else {
      set.add(item);
    }
  }

  return this.filter((item) => {
    if (structuralEquality === true) {
      return [...set].every((x) => !equalWith(sameValueZeroEqual, x, item));
    }
    return !set.has(item);
  });
}

export default except;
