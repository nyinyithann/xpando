import Dict from './dict.core';
import empty from './dict.empty';
import exists from './dict.exists';
import filter from './dict.filter';
import findKey from './dict.findKey';
import fold from './dict.fold';
import foldRight from './dict.foldRight';
import every from './dict.every';
import map from './dict.map';
import partition from './dict.partition';

Dict.empty = empty;

Dict.prototype.exists = exists;
Dict.prototype.filter = filter;
Dict.prototype.findKey = findKey;
Dict.prototype.fold = fold;
Dict.prototype.foldRight = foldRight;
Dict.prototype.every = every;
Dict.prototype.map = map;
Dict.prototype.partition = partition;

export default Dict;
