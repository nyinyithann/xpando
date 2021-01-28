import {
  throwIfGeneratorFunction,
  throwIfNotAFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

function findRight(predicate) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotAFunction(predicate, 'predicate');
  throwIfGeneratorFunction(predicate, 'predicate');

  const thisVec = Object(this);

  let thisArg;

  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  const loop = function (index) {
    if (index < 0) {
      return undefined;
    } if (predicate.call(thisArg, thisVec[index])) {
      return thisVec[index];
    }
    return loop(index - 1);
  };

  return loop(this.length - 1);
}

export default findRight;
