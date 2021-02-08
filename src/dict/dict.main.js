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
import isEmpty from './dict.isEmpty';
import toArray from './dict.toArray';
import toVec from './dict.toVec';
import toSet from './dict.toSet';
import change from './dict.change';
import of from './dict.of';
import toUniq from './dict.toUniq';

Dict.of = of;
Dict.empty = empty;

Dict.prototype.exists = exists;
Dict.prototype.filter = filter;
Dict.prototype.findKey = findKey;
Dict.prototype.fold = fold;
Dict.prototype.foldRight = foldRight;
Dict.prototype.every = every;
Dict.prototype.map = map;
Dict.prototype.partition = partition;
Dict.prototype.isEmpty = isEmpty;
Dict.prototype.toArray = toArray;
Dict.prototype.toVec = toVec;
Dict.prototype.toSet = toSet;
Dict.prototype.toUniq = toUniq;
Dict.prototype.change = change;

export default Dict;
