import {
  throwIfGeneratorFunction,
  throwIfNotAFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';
import Vec from './vec.core';

function forEach2(action, source1, source2) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotAFunction(action, 'action');
  throwIfGeneratorFunction(action, 'action');
  throwIfNullOrUndefined(source1, 'source1');
  throwIfNullOrUndefined(source2, 'source2');

  if (!Array.isArray(source1) && !Vec.isVec(source1)) {
    throw TypeError('source1 should be an Array or a Vec.');
  }

  if (!Array.isArray(source2) && !Vec.isVec(source2)) {
    throw TypeError('source2 should be an Array or a Vec.');
  }

  if (source1.length !== source2.length) {
    throw TypeError('source1 and source2 have different lengths.');
  }

  for (let i = 0; i < source1.length; i += 1) {
    action(source1[i], source2[i], i);
  }
}

export default forEach2;