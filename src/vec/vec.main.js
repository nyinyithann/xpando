import Vec from './vec.core';
import empty from './vec.empty';
import init from './vec.init';
import isEmpty from './vec.isEmpty';
import copy from './vec.copy';
import countBy from './vec.countBy';
import create from './vec.create';
import isVec from './vec.isVec';
import findRight from './vec.findRight';
import findIndexRight from './vec.findIndexRight';
import head from './vec.head';
import tail from './vec.tail';
import get from './vec.get';
import set from './vec.set';
import last from './vec.last';
import take from './vec.take';
import takeWhile from './vec.takeWhile';
import skipWhile from './vec.skipWhile';
import min from './vec.min';
import max from './vec.max';
import minBy from './vec.minBy';
import maxBy from './vec.maxBy';
import sum from './vec.sum';
import sumBy from './vec.sumBy';
import average from './vec.average';
import averageBy from './vec.averageBy';
import splitAt from './vec.splitAt';
import partition from './vec.partition';
import scan from './vec.scan';
import scanRight from './vec.scanRight';
import windowed from './vec.windowed';
import zip from './vec.zip';
import unzip from './vec.unzip';
import distinct from './vec.distinct';
import distinctBy from './vec.distinctBy';
import pairwise from './vec.pairwise';
import except from './vec.except';
import groupBy from './vec.groupBy';
import mapFold from './vec.mapFold';
import mapFoldRight from './vec.mapFoldRight';
import chunkBySize from './vec.chunkBySize';
import binarySearch from './vec.binarySearch';
import permute from './vec.permute';
import transpose from './vec.transpose';
import allPairs from './vec.allPairs';
import some2 from './vec.some2';
import every2 from './vec.every2';
import fold2 from './vec.fold2';
import foldRight2 from './vec.foldRight2';
import forEach2 from './vec.forEach2';
import map2 from './vec.map2';
import map3 from './vec.map3';
import zip3 from './vec.zip3';
import unfold from './vec.unfold';

Vec.empty = empty;
Vec.init = init;
Vec.create = create;
Vec.isVec = isVec;
Vec.transpose = transpose;
Vec.some2 = some2;
Vec.every2 = every2;
Vec.fold2 = fold2;
Vec.foldRight2 = foldRight2;
Vec.forEach2 = forEach2;
Vec.map2 = map2;
Vec.map3 = map3;
Vec.zip3 = zip3;
Vec.unfold = unfold;

Vec.prototype.isEmpty = isEmpty;
Vec.prototype.copy = copy;
Vec.prototype.countBy = countBy;
Vec.prototype.findRight = findRight;
Vec.prototype.findIndexRight = findIndexRight;
Vec.prototype.head = head;
Vec.prototype.tail = tail;
Vec.prototype.get = get;
Vec.prototype.set = set;
Vec.prototype.last = last;
Vec.prototype.take = take;
Vec.prototype.takeWhile = takeWhile;
Vec.prototype.skipWhile = skipWhile;
Vec.prototype.min = min;
Vec.prototype.max = max;
Vec.prototype.minBy = minBy;
Vec.prototype.maxBy = maxBy;
Vec.prototype.sum = sum;
Vec.prototype.sumBy = sumBy;
Vec.prototype.average = average;
Vec.prototype.averageBy = averageBy;
Vec.prototype.splitAt = splitAt;
Vec.prototype.partition = partition;
Vec.prototype.scan = scan;
Vec.prototype.scanRight = scanRight;
Vec.prototype.windowed = windowed;
Vec.prototype.zip = zip;
Vec.prototype.unzip = unzip;
Vec.prototype.distinct = distinct;
Vec.prototype.distinctBy = distinctBy;
Vec.prototype.pairwise = pairwise;
Vec.prototype.except = except;
Vec.prototype.groupBy = groupBy;
Vec.prototype.mapFold = mapFold;
Vec.prototype.mapFoldRight = mapFoldRight;
Vec.prototype.chunkBySize = chunkBySize;
Vec.prototype.binarySearch = binarySearch;
Vec.prototype.permute = permute;
Vec.prototype.allPairs = allPairs;

export default Vec;