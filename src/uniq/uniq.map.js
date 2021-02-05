import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';
import Uniq from './uniq.core';

function map(mapping) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotFunction(mapping, 'mapping');
  throwIfGeneratorFunction(mapping, 'mapping');

  let thisArg;

  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  const uniq = new Uniq();
  for (const v of this) {
    uniq.add(mapping.call(thisArg, v));
  }

  return uniq;
}

export default map;
