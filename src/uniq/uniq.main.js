import Uniq from './uniq.core';
import isEmpty from './uniq.isEmpty';
import empty from './uniq.empty';
import of from './uniq.of';
import exists from './uniq.exists';
import filter from './uniq.filter';
import map from './uniq.map';
import fold from './uniq.fold';
import foldRight from './uniq.foldRight';
import every from './uniq.every';
import partition from './uniq.partition';
import toArray from './uniq.toArray';
import toVec from './uniq.toVec';
import toMap from './uniq.toMap';
import toDict from './uniq.toDict';
import difference from './uniq.difference';

Uniq.empty = empty;
Uniq.of = of;

Uniq.prototype.isEmpty = isEmpty;
Uniq.prototype.exists = exists;
Uniq.prototype.filter = filter;
Uniq.prototype.map = map;
Uniq.prototype.fold = fold;
Uniq.prototype.foldRight = foldRight;
Uniq.prototype.every = every;
Uniq.prototype.partition = partition;
Uniq.prototype.toArray = toArray;
Uniq.prototype.toVec = toVec;
Uniq.prototype.toMap = toMap;
Uniq.prototype.toDict = toDict;
Uniq.prototype.difference = difference;

export default Uniq;
