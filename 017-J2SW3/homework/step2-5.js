'use strict'
const assert = require('./assert').assert

const mult = (arr) => arr.reduce((a, v) => Array.isArray(v) ? a * mult(v) : a * v, 1)
assert(mult([[1, 2], [3, 4], [5, 6]]),720)
