import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';
import Dict from './dict.core';

function map(mapping) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotFunction(mapping, 'mapping');
  throwIfGeneratorFunction(mapping, 'mapping');

  let thisArg;

  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  const dict = new Dict();

  for (const [k, v] of this) {
    dict.set(k, mapping.call(thisArg, k, v));
  }

  return dict;
}

export default map;
