# Xpando.js ![Node.js CI](https://github.com/nyinyithann/xpando/workflows/Node.js%20CI/badge.svg?branch=main)
### A library that extends JavaScript Array, Map, and Set.

Xpando is a JavaScript library for nodeJS and browser. Xpando extends JavaScript Array, Map, and Set. The library is heavily inspired and influenced by F# Array, Map, and Set modules.
<hr>
Please note  **xpando npm package** is deprecated. The following three separated packages are introduced instead.<br/>
[Vec.js] (https://www.npmjs.com/package/@nyinyithann/vec.js)<br/>
[Dict.js] (https://www.npmjs.com/package/@nyinyithann/dict.js)<br/>
[Uniq.js] (https://www.npmjs.com/package/@nyinyithann/uniq.js)
<hr>


## Installation

```javascript
npm install xpando
```

## Getting started

Xpando has three major types `Vec` (Vector), `Dict` (Dictionary), `Uniq` (Unique) and their methods.
`Vec` extends `Array`. `Dict` extends `Map`. `Uniq` extends `Set`.

## Vec

`Vec` extends `Array`. All built-in methods of `Array` can be used with it. The following snippet demonstrates using `Array`'s built-in method `reduce` with `Vec`.

```javascript
const fnVec = Vec.of(x => x * x * x, x => x / 216, Math.sqrt);
const howLongAStormLast = d => fnVec.reduce((s, f) => f(s), d);
console.log(howLongAStormLast(10.5)); // => 2.315032397181517
```

`Vec` comes with additional 50+ methods. The following snippets demonstrate some of them.
```javascript
// unfold
const fibonacci = (n) => Vec.unfold(([x, [a, b]]) => (x < n ? [a + b, [x + 1, [b, a + b]]] : null), [0, [0, 1]]);
const fibOf10 = fibonacci(10);
console.log(fibOf10);
// => [ 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]

// mapFold
const oneToTen = Vec.init(10, x => x + 1);
const mapFoldResult = oneToTen.mapFold((acc, elem) => [acc, acc + elem], 0);
console.log(mapFoldResult);
// => [ [ 0, 1, 3, 6, 10, 15, 21, 28, 36, 45 ], 55 ]

// scan
const scannedResult = oneToTen.scan((acc, elem) => acc + elem, 0);
console.log(scannedResult);
// => [ 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]

// groups
const groups = oneToTen.groupBy( x => x % 2 === 0 ? 'Even' : 'Odd', true);
console.log(groups);
// => [ [ 'Odd', [ 1, 3, 5, 7, 9 ] ], [ 'Even', [ 2, 4, 6, 8, 10 ] ] ]
```

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
Please go to [Vec APIs](/api.docs/vec.api.md) to read more about `Vec` APIs.

## Dict

`Dict` extends `Map`. All built-in methods of `Map` can be used with `Dict`. And Xpando provides additional methods.
```javascript
const diatonicMajorInC = new Dict(
  [
    [1, ['C', 'do']],
    [2, ['D', 're']],
    [3, ['E', 'mi']],
    [4, ['F', 'fa']],
    [5, ['G', 'so']],
    [6, ['A', 'la']],
    [7, ['B', 'ti']]
  ]
);
const twinkelLittleStarNotes = new Vec(1, 1, 5, 5, 6, 6, 5);
const solfeges = diatonicMajorInC.fold((s, k, [_, solfege]) => twinkelLittleStarNotes.includes(k) ? `${s}${solfege} ` : s, '');
console.log(solfeges)
// => do so la
```
Please go to [Dict APIs](/api.docs/dict.api.md) to read more about `Dict` APIs.

## Uniq

`Uniq` extends `Set`. All built-in methods of `Set` can be used with `Uniq`. And Xpando provides additional methods.

```javascript
const somePrimes = new Uniq([2, 3, 5, 7, 11, 13]);
const someEvens = new Uniq([2, 4, 6, 8, 10]);
const evenPrime = somePrimes.intersect(someEvens);
console.log(evenPrime);
// => [Uniq] { 2 }
```
Please go to [Uniq APIs](/api.docs/uniq.api.md) to read more about `Uniq` APIs.

### Author

Nyi Nyi Than - [@nyinyithann](https://www.linkedin.com/in/nyinyithan/)

### Credit

- [F# Collections](https://fsharp.github.io/fsharp-core-docs/reference/fsharp-collections.html)
- [Exploring ES6](https://exploringjs.com/es6.html) By [Dr. Axel Rauschmayer](https://2ality.com/p/about.html)
- [Understanding ECMAScript 6](https://leanpub.com/understandinges6) By [Nicholas C. Zakas](https://humanwhocodes.com/)
- [Collection Pipeline](https://martinfowler.com/articles/collection-pipeline/)
  by [Martin Fowler](https://martinfowler.com/)
- [javascript.info](https://javascript.info/)

### License

MIT
