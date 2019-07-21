# Assert

## Installation

Terminal

```
npm install
npm install chai
```

## Disable assert

assert.js

```
function assert (a,b) {}
```

## Enable assert

assert.js

```
const assert = require('chai').assert.deepEqual
```

## Require assert

*.js

```
const assert = require('./assert').assert
```

## Use assert

*.js

```
assert(1+2,3)
```

## test.js

```
require('./map-filter')
require('./maartjes-work')
```

## Execute test

Terminal

```
node homework/test.js
```

## Motivation

Much, much faster than jest.
