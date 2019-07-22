'use strict'
const assert = require('./assert').assert

const makeUnique = arr => [...new Set(arr)]	
assert(makeUnique('abcdaefc'.split('')), 'abcdef'.split(''))
