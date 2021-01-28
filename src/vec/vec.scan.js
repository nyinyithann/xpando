import create from './vec.create';
import {
  throwIfGeneratorFunction,
  throwIfNotAFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

function scan(folder, initialState) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(initialState, 'initialState');
  throwIfNotAFunction(folder, 'folder');
  throwIfGeneratorFunction(folder, 'folder');

  let thisArg;

  if (arguments.length > 2) {
    thisArg = arguments[2];
  }

  let state = initialState;
  const vec = create(this.length + 1, initialState);
  for (let i = 0; i < this.length; i += 1) {
    state = folder.call(thisArg, state, this[i]);
    vec[i + 1] = state;
  }

  return vec;
}

export default scan;
