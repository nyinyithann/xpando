import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';
import Vec from './vec.core';

function map3(mapping, source1, source2, source3) {
  throwIfNotFunction(mapping, 'mapping');
  throwIfGeneratorFunction(mapping, 'mapping');
  throwIfNullOrUndefined(source1, 'source1');
  throwIfNullOrUndefined(source2, 'source2');
  throwIfNullOrUndefined(source3, 'source2');

  if (!Array.isArray(source1) && !Vec.isVec(source1)) {
    throw TypeError('source1 should be an Array or a Vec.');
  }

  if (!Array.isArray(source2) && !Vec.isVec(source2)) {
    throw TypeError('source2 should be an Array or a Vec.');
  }

  if (!Array.isArray(source3) && !Vec.isVec(source3)) {
    throw TypeError('source3 should be an Array or a Vec.');
  }

  if (source1.length !== source2.length || source1.length !== source3.length) {
    throw TypeError('source1, source2, and source3 have different lengths.');
  }

  const result = new Vec(source1.length);

  for (let i = 0; i < source1.length; i += 1) {
    result[i] = mapping(source1[i], source2[i], source3[i], i);
  }

  return result;
}

export default map3;
