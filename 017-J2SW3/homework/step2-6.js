'use strict'
const assert = require('./assert').assert

const flatten = (arr) => arr.reduce((a, v) => Array.isArray(v) ? a.concat(flatten(v)) : a.concat(v), [])

assert(flatten([[1, 2], [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6])
assert(flatten([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]), [1, 2, 3, 4, 5, 6, 7, 8])
