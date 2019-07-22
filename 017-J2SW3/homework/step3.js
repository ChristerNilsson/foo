'use strict'
const assert = require('./assert').assert

const createBase = base => offset => base + offset 

assert(createBase(6)(10), 16)
assert(createBase(6)(21), 27)
