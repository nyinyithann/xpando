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

  const thisArray = [...this];
  for (let i = thisArray.length - 1; i >= 0; i -= 1) {
    s = folder.call(thisArg, thisArray[i], s);
  }
  return s;
}

export default foldRight;
