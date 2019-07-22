const assert = require('./assert').assert

start = new Date()
require('./step2-1')
require('./step2-2')
require('./step2-3')
require('./step2-4')
require('./step2-5')
require('./step2-6')
require('./step2-7')
require('./step3-bonus')
require('./step3')
console.log(`${(new Date()) - start}ms`)
