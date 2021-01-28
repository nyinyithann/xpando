import {
  throwIfGeneratorFunction,
  throwIfNotAFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';
import Vec from './vec.core';

function some2(predicate, source1, source2) {
  throwIfNotAFunction(predicate, 'predicate');
  throwIfGeneratorFunction(predicate, 'predicate');
  throwIfNullOrUndefined(source1, 'source1');
  throwIfNullOrUndefined(source2, 'source2');

  if (!Array.isArray(source1) || !Vec.isVec(source1)) {
    throw TypeError('source1 should be Array or Vec.');
  }

  if (!Array.isArray(source2) || !Vec.isVec(source2)) {
    throw TypeError('source2 should be Array or Vec.');
  }

  if (source1.length !== source2.length) {
    throw TypeError('source1 and source2 have different lengths.');
  }

  let thisArg;

  if (arguments.length > 2) {
    thisArg = arguments[2];
  }

  return (function loop(i) {
    return (
      i < source1.length
      && (predicate.call(thisArg, source1[i], source2[i]) || loop(i + 1))
    );
  }(0));
}

export default some2;
