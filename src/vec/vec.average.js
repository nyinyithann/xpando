import { isNumber } from '../util';
import { throwIfNullOrUndefined } from '../throwHelper';

function average() {
  throwIfNullOrUndefined(this, 'this');

  if (this.length === 0) {
    return undefined;
  }

  let sum = 0;

  for (let i = 0; i < this.length; i += 1) {
    if (isNumber(this[i])) {
      sum += this[i];
    }
  }

  return sum / this.length;
}

export default average;
