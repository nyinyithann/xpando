import { isNumber } from '../util';
import { throwIfNullOrUndefined } from '../throwHelper';

function max() {
  throwIfNullOrUndefined(this, 'this');

  if (this.length === 0) {
    return undefined;
  }

  let maxNum;

  for (let i = 0; i < this.length; i += 1) {
    if (isNumber(this[i])) {
      if (maxNum === undefined) {
        maxNum = this[i];
      } else if (this[i] > maxNum) {
        maxNum = this[i];
      }
    }
  }

  return maxNum;
}

export default max;
