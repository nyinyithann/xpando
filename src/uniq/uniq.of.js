import Uniq from './uniq.core';

function of() {
  const uniq = new Uniq();

  for (let i = 0; i < arguments.length; i += 1) {
    uniq.add(arguments[i]);
  }

  return uniq;
}

export default of;
