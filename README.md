# ternary-logic [![Build Status](https://secure.travis-ci.org/ileri/ternary-logic.png?branch=master)](http://travis-ci.org/ileri/ternary-logic)

> Ternary logic in ES6


## Getting Started

Install the module with: `npm install ternary-logic`

```js
import {T, F, U, cast} from "ternary-logic/ternary-logic";

T.and(F).eq(F) // T
cast(null).and(T) // U

T.and(U) === U // true

T.valueOf() // true
F.valueOf() // false
U.valueOf() // null
```




## Documentation

ternary-logic.js exports 5 objects:
- `T`, `F` and `U` are truth values: true, false and unknown, respectively
- `cast` casts values to `T`, `F` and `U`
- `Ternary` is a class of which `T`, `F` and `U` are instances

### Truth values
The 3 truth values are `T` (`true`), `F` (`false`) and `U` (unknown).
`T.valueOf()` and `F.valueOf()` return their respective Boolean counterparts.
`U.valueOf()` returns `null`.
Note that all 3 truth values will be coerced to `true` since they are objects.
`T.toString()`, `F.toString()` and `U.toString()` return "T", "F" and "U", respectively.

### `cast`
`cast` casts values to `T`, `F` and `U`.

More specifically, `cast(a)` returns:
- `a`, if `a instanceof Ternary`
- `U`, if `a` is `undefined` or `null`
- `T`, if `a` is coerced to `true`
- `F` otherwise


## Examples

_(Coming soon)_


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com).

Note that, currently, jsHint has a lot of problems with ES6 Modules,
because of which many unnecessary errors are thrown.


## License

Copyright (c) 2014 Malte-Maurice Dreyer  
Licensed under the MIT license.
