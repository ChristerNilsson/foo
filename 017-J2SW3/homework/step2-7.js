'use strict'
const assert = require('./assert').assert

function f1 (val) {++val}
let x = 9
f1(x)
assert(x, 9)

function f2 (val) {val.x++}
let y = {x:9}
f2(y)
assert(y.x, 10)
