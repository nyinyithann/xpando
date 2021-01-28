import { throwIfNullOrUndefined } from '../throwHelper';
import { isNull, isUndefined } from '../util';

function binarySearch(item, comparer) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(item, 'item');

  const cmp = !isNull(comparer) && !isUndefined(comparer)
    ? comparer
    : (x, y) => {
      if (x > y) return 1;
      if (x < y) return -1;
      if (x === y) return 0;
      return -1;
    };

  if (this.length === 0) {
    return -1;
  }

  let thisArg;
  if (arguments.length > 2) {
    thisArg = arguments[2];
  }

  let low = 0;
  let high = this.length - 1;
  while (low <= high) {
    const middleIndex = Math.floor((low + high) / 2);

    const c = cmp.call(thisArg, this[middleIndex], item);

    if (c === 0) {
      return middleIndex;
    }
    if (c < 0) {
      low = middleIndex + 1;
    } else {
      high = middleIndex - 1;
    }
  }

  return -1;
}

export default binarySearch;
