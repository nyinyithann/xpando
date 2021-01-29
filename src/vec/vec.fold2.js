import {
  throwIfGeneratorFunction,
  throwIfNotAFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';
import Vec from './vec.core';

function fold2(folder, state, source1, source2) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(state, 'state');
  throwIfNotAFunction(folder, 'folder');
  throwIfGeneratorFunction(folder, 'folder');
  throwIfNullOrUndefined(source1, 'source1');
  throwIfNullOrUndefined(source2, 'source2');

  if (!Array.isArray(source1) && !Vec.isVec(source1)) {
    throw TypeError('source1 should be Array or Vec.');
  }

  if (!Array.isArray(source2) && !Vec.isVec(source2)) {
    throw TypeError('source2 should be Array or Vec.');
  }

  if (source1.length !== source2.length) {
    throw TypeError('source1 and source2 have different lengths.');
  }

  let s = state;
  for (let i = 0; i < source1.length; i += 1) {
    s = folder(s, source1[i], source2[i]);
  }

  return s;
}

export default fold2;
