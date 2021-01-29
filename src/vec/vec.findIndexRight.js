import {
  throwIfGeneratorFunction,
  throwIfNotAFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

function findIndexRight(predicate) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotAFunction(predicate, 'predicate');
  throwIfGeneratorFunction(predicate, 'predicate');

  const thisVec = Object(this);

  let thisArg;

  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  return (function loop(index) {
    if (index < 0) {
      return -1;
    } if (predicate.call(thisArg, thisVec[index])) {
      return index;
    }
    return loop(index - 1);
  }(this.length - 1));
}

export default findIndexRight;
