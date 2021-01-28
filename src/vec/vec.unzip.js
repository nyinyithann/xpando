import { throwIfNullOrUndefined } from '../throwHelper';
import Vec from './vec.core';

function unzip() {
  throwIfNullOrUndefined(this, 'this');

  const vec1 = new Vec(this.length);
  const vec2 = new Vec(this.length);

  for (let i = 0; i < this.length; i += 1) {
    const [f, s] = this[i];

    throwIfNullOrUndefined(f, 'f');
    throwIfNullOrUndefined(s, 's');

    vec1[i] = f;
    vec2[i] = s;
  }

  return new Vec(vec1, vec2);
}

export default unzip;
