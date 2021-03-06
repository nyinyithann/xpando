/*
Extracted from MDN articles : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
double equals (==) will perform a type conversion when comparing two things,
and will handle NaN, -0, and +0 specially to conform to IEEE 754 (so NaN != NaN, and -0 == +0)
*/
export function abstractEqual(lhs, rhs) {
  // eslint-disable-next-line eqeqeq
  return lhs == rhs;
}

/*
Extracted from MDN articles : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
triple equals (===) will do the same comparison as double equals (including the special handling for NaN, -0, and +0)
but without type conversion; if the types differ, false is returned.
mostly used in Array.prototype.indexOf, Array.prototype.lastIndexOf, and case-matching
*/
export function strictEqual(lhs, rhs) {
  return lhs === rhs;
}

/*
Extracted from MDN articles : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
Object.is does no type conversion and no special handling for NaN, -0, and +0 (giving it the same behavior as === except on those special numeric values)
*/
export function sameValueEqual(lhs, rhs) {
  return Object.is(lhs, rhs);
}

/*
Extracted from MDN articles : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
used by TypedArray and ArrayBuffer constructors,as well as Map and Set operations,
and also String.prototype.includes and Array.prototype.includes
*/
export function sameValueZeroEqual(lhs, rhs) {
  return lhs === rhs || (Number.isNaN(lhs) && Number.isNaN(rhs));
}

export function abstractExceptNaNEqual(lhs, rhs) {
  // eslint-disable-next-line eqeqeq
  return lhs == rhs || (Number.isNaN(lhs) && Number.isNaN(rhs));
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

export function isFunction(value) {
  return typeof value === 'function';
}

export function isNotFunction(value) {
  return !isFunction(value);
}

export function isGeneratorFunction(value) {
  return isNotNull(value) && value[Symbol.toStringTag] === 'GeneratorFunction';
}

function isObject(value) {
  return value != null && typeof value === 'object';
}

export function isPrimitive(value) {
  return isNull(value)
    || isUndefined(value) || isNumber(value)
    || isBigInt(value) || isSymbol(value)
    || isString(value) || isBoolean(value);
}

/* eslint-disable camelcase */
const isArray = Array.isArray;

const arrayEqual = (cmp, value1, value2) => {
  const [x, ...xs] = value1;
  const [y, ...ys] = value2;

  if (x === undefined && y === undefined && xs.length === 0 && ys.length === 0) {
    return true;
  }

  if (isArray(x) && isArray(y)) {
    return arrayEqual(cmp,
      x.filter((xx) => xx !== x && xx !== y && xx !== value1),
      y.filter((yy) => yy !== y && yy !== x && yy !== value2)) && arrayEqual(cmp, xs, ys);
  }

  if (isObject(x) && isObject(y)) {
    const wrappedValue_x = x.valueOf();
    const wrappedValue_y = y.valueOf();
    if (isPrimitive(wrappedValue_x) || isPrimitive(wrappedValue_y)) {
      return cmp(wrappedValue_x, wrappedValue_y) && arrayEqual(cmp, xs, ys);
    }

    const rmvCRef = (obj, other) => {
      const ret = {};
      const flag = Object.keys(obj).some((k) => obj[k] === obj || obj[k] === other || obj[k] === value1 || obj[k] === value2);
      if (flag) {
        for (const k of Object.keys(obj)) {
          if (obj[k] !== obj && obj[k] !== other && obj[k] !== value1 && obj[k] !== value2) {
            ret[k] = obj[k];
          }
        }
        return ret;
      }
      return obj;
    };

    return arrayEqual(cmp,
      Object.entries(rmvCRef(x, y)).sort(),
      Object.entries(rmvCRef(y, x)).sort())
      && arrayEqual(cmp, xs, ys);
  }

  return Boolean(cmp(x, y)) && arrayEqual(cmp, xs, ys);
};

// eslint-disable-next-line no-unused-vars
export function equalWith(cmp, value1, value2) {
  if (isGeneratorFunction(cmp) || isNotFunction(cmp)) {
    throw new TypeError(`${cmp} should be a function that takes two arguments and return a boolean result.`);
  }

  if (isPrimitive(value1) || isPrimitive(value2)) {
    return cmp(isNotNull(value1) && isNotUndefined(value1) ? value1.valueOf() : value1,
      isNotNull(value2) && isNotUndefined(value2) ? value2.valueOf() : value2);
  }

  if (isArray(value1) && isArray(value2)) {
    return value1.length !== value2.length
      ? false
      : cmp(value1, value2) || arrayEqual(cmp, value1, value2);
  }

  if (isObject(value1) && isObject(value2)) {
    // check for referential equality
    if (cmp(value1, value2)) { return true; }

    // check for values like Object(1), Object(true), Object("abc"), Object(Symbol.iterator), Object(1n), Object(true)
    const wrappedValue_1 = typeof value1.valueOf === 'function' ? value1.valueOf() : value1;
    const wrappedValue_2 = typeof value2.valueOf === 'function' ? value2.valueOf() : value2;
    if (isPrimitive(wrappedValue_1) || isPrimitive(wrappedValue_2)) {
      return cmp(wrappedValue_1, wrappedValue_2);
    }

    return arrayEqual(cmp, Object.entries(value1).sort(), Object.entries(value2).sort());
  }

  return arrayEqual(cmp, [value1], [value2]);
}

export function equal(value1, value2) {
  return equalWith(sameValueZeroEqual, value1, value2);
}
