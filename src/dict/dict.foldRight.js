import {
  throwIfGeneratorFunction,
  throwIfNotFunction,
  throwIfNullOrUndefined,
} from '../throwHelper';

function foldRight(folder, state) {
  throwIfNullOrUndefined(this, 'this');
  throwIfNullOrUndefined(state, 'state');
  throwIfNotFunction(folder, 'folder');
  throwIfGeneratorFunction(folder, 'folder');

  let thisArg;

  if (arguments.length > 2) {
    thisArg = arguments[2];
  }

  let s = state;

  const entries = [...this.entries()];

  for (let i = entries.length - 1; i >= 0; i -= 1) {
    s = folder.call(thisArg, entries[i][0], entries[i][1], s);
  }

  return s;
}

export default foldRight;
