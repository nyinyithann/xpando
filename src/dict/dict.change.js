import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';
import Dict from './dict.core';

function change(keyMapping, valueMpping) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNotFunction(keyMapping, 'keyMapping');
  throwIfNotFunction(keyMapping, 'keyMapping');
  throwIfNotFunction(valueMpping, 'valueMpping');
  throwIfGeneratorFunction(valueMpping, 'valueMpping');

  const dict = new Dict();

  for (const [k, v] of this) {
    if (keyMapping(k)) {
      dict.set(k, valueMpping(v));
    } else {
      dict.set(k, v);
    }
  }

  return dict;
}

export default change;
