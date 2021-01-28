import { isNumber } from '../util';
import { throwIfNullOrUndefined } from '../throwHelper';

function sum() {
  throwIfNullOrUndefined(this, 'this');

  if (this.length === 0) {
    return undefined;
  }

  let sumNum = 0;

  for (let i = 0; i < this.length; i += 1) {
    if (isNumber(this[i])) {
      sumNum += this[i];
    }
  }

  return sumNum;
}

export default sum;
