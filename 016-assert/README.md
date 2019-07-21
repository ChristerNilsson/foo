# Assert

## Install
```
// Terminal
npm install
npm install chai
```

## Enable all
```
// assert.js
const assert = require('chai').assert.deepEqual
```

## Disable all
```
// assert.js
const assert = function() {}
```

## Require
```
// *.js
const assert = require('./assert').assert
```

## Use
```
// *.js
assert(1+2,3)
```

## test.js
```
// test.js
require('./map-filter')
require('./maartjes-work')
```

## Execute test
```
// Terminal
node homework/test.js
```

## Motivation

Much, much faster than jest.
Milliseconds instead of seconds.

## Please note!

* Target application area for assert, is education, not production
* Disabling all asserts does not stop functions from evaluating
* It is still possible to keep all tests in a separate directory structure. But, then you lose the advantage of seeing function + asserts together.