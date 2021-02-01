import Dict from './dict.core';
import empty from './dict.empty';
import exists from './dict.exists';

Dict.empty = empty;

Dict.prototype.exists = exists;

export default Dict;
