# Xpando.js ![Node.js CI](https://github.com/nyinyithann/xpando/workflows/Node.js%20CI/badge.svg?branch=main)
### A library that extends JavaScript Array, Map, and Set.

Xpando is a JavaScript library for nodeJS and browser. Xpando extends JavaScript Array, Map, and Set. The library is heavily inspired by F# Array, Map, and Set module.

[Vec APIs](/api.docs/vec.api.md) | [Dict APIs](/api.docs/dict.api.md) | [Uniq APIs](/api.docs/uniq.api.md)
<hr>

## Installation

```javascript
npm install xpando
```

## Getting started

Xpando has three major types `Vec` (Vector), `Dict` (Dictionary), `Uniq` (Unique) and their methods.
<br/>`Vec` extends `Array`. <br/>`Dict` extends `Map`. <br/>`Uniq` extends `Set`.

## Vec

`Vec` can be instantiated as follows:

```javascript
const vec = new Vec();
vec.push(1, 2, 3, 4, 5);
// => [ 1, 2, 3, 4, 5 ]

const vec1 = new Vec(1, 2, 3, 4, 5); 
// => [ 1, 2, 3, 4, 5 ]

const vec2 = Vec.of(1, 2, 3, 4, 5); 
// => [ 1, 2, 3, 4, 5 ]

const vec3 = Vec.from([1, 2, 3, 4, 5]); 
// => [ 1, 2, 3, 4, 5 ]

const vec4 = Vec.init(5, x => x + 1); 
// => [ 1, 2, 3, 4, 5 ] 

const vec5 = Vec.unfold(x => x <= 5 ? [x, x + 1] : undefined, 1); 
// => [ 1, 2, 3, 4, 5 ]

const vec6 = Vec.create(5, 1); 
// => [ 1, 1, 1, 1, 1 ]

const emptyVec = Vec.empty();
emptyVec.push(1, 2, 3, 4, 5); 
// => [ 1, 2, 3, 4, 5 ]
```

`Vec` extends `Array` and all built-in methods of `Array` can be used with it. The following snippet demonstrates using `Array`'s built-in method `reduce` with `Vec`.

```javascript
const fnVec = Vec.of(x => x * x * x, x => x / 216, Math.sqrt);
const howLongAStormLast = d => fnVec.reduce((s, f) => f(s), d);
console.log(howLongAStormLast(10.5)); // => 2.315032397181517
```
 
`Vec` comes with over fifty methods, and the following snippet demonstrates `unfold` method of `Vec`. 
```javascript
const fibonacci = (n) => Vec.unfold(([x, [a, b]]) => (x < n ? [a + b, [x + 1, [b, a + b]]] : null), [0, [0, 1]]);
const fibOf10 = fibonacci(10);
console.log(fibOf10);
// => [ 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]
```

Please go to [Vec APIs](vec.api.md) to read detail documentation of `Vec` APIs.
