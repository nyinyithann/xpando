import hash from 'object-hash';

export function isFunction(value) {
  return typeof value === 'function';
}

export function checkSameValueZeroEqual(lhs, rhs) {
  return lhs === rhs || (Number.isNaN(lhs) && Number.isNaN(rhs));
}

export function getTag(value) {
  return (typeof value === 'object' && value != null) ? Object.prototype.toString.call(value) : '';
}

export function isNull(value) {
  return value == null;
}

export function isUndefined(value) {
  return typeof value === 'undefined';
}

export function isNumber(value) {
  return typeof value === 'number' || getTag(value) === '[object Number]';
}

export function isBigInt(value) {
  return typeof value === 'bigint' || getTag(value) === '[object BigInt]';
}

export function isSymbol(value) {
  return typeof value === 'symbol' || getTag(value) === '[object Symbol]';
}

export function isString(value) {
  return typeof value === 'string' || getTag(value) === '[object String]';
}

export function isBoolean(value) {
  return typeof value === 'boolean' || getTag(value) === '[object Boolean]';
}

export function isNotNull(value) {
  return !isNull(value);
}

export function isNotUndefined(value) {
  return !isUndefined(value);
}

export function isIterable(source) {
  return isNotNull(source) && isNotUndefined(source[Symbol.iterator]);
}

export function isGeneratorFunction(value) {
  return isNotNull(value) && value[Symbol.toStringTag] === 'GeneratorFunction';
}

export function isPrimitive(value) {
  return isNull(value)
    || isUndefined(value) || isNumber(value)
    || isBigInt(value) || isSymbol(value)
    || isString(value) || isBoolean(value);
}

export function getHasher() {
  const cache = new WeakMap();

  return function (value) {
    if (isPrimitive(value)) {
      return value;
    }
    let hashKey = cache.get(value);
    if (!hashKey) {
      hashKey = hash(value, { ignoreUnknown: true });
      cache.set(value, hashKey);
    }
    return hashKey;
  };
}
