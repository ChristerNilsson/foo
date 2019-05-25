// const assert = require('assert').deepStrictEqual   // node.js
// const range = require('lodash').range              // node.js
const assert = chai.assert.deepEqual               // browser
const range = _.range                              // browser
const print = console.log
print('##### Begin #####')

// assert(1+2,3)
// assert(f(5),25)
// assert(f(6),36)

// assert(ok.x, 100) 
// assert(ok.y, 100)
// assert(ok.r, 50)
// assert(ok.title, 'Ok')
// assert(ok.click, click)

// assert(cancel.x, 200)
// assert(cancel.y, 100)
// assert(cancel.r, 50)
// assert(cancel.title, 'Cancel')
// assert(cancel.click, click)

// assert(ok.click(), 'Ok')
// assert(cancel.click(), 'Cancel')
// assert(ok.inside(0,0), false)
// assert(cancel.inside(200,100), true)

// assert(buttons, [ok,cancel])

// console.assert([]===[])
// chai.assert.equal([],[]) 
// chai.assert.deepEqual([],[]) 

print('#####  End  #####')