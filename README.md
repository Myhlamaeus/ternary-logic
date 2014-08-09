# ternary-logic [![Build Status](https://secure.travis-ci.org/ileri/ternary-logic.png?branch=master)](http://travis-ci.org/ileri/ternary-logic)

> The best module ever.


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

_(Coming soon)_


## Examples

_(Coming soon)_


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com).


## License

Copyright (c) 2014 Malte-Maurice Dreyer  
Licensed under the MIT license.
