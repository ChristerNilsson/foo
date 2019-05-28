// const assert = require('assert').deepStrictEqual   // node.js
// const range = require('lodash').range              // node.js
const assert = chai.assert.deepEqual               // browser
const range = _.range                              // browser
const print = console.log  
print('##### Begin #####')   

function f(x) {return x*x}

function click() {return this.title}

function distance(x,y,button) {
	dx = x - button.x
	dy = y - button.y
	return Math.sqrt(dx*dx+dy*dy)
}

function inside(x,y) {
	return distance(x,y,this) < this.r
}

ok = {
	x:100,
	y:100,
	r:50,
	title:'Ok',
	click,
	inside
}

cancel = {
	x:200,
	y:100,
	r:50,
	title:'Cancel',
	click,
	inside
}

buttons = [ok,cancel]

assert(1+2,3) 
assert(f(5),25)
assert(f(6),36)

assert(ok.x, 100) 
assert(ok.y, 100)
assert(ok.r, 50)
assert(ok.title, 'Ok')
assert(ok.click, click)

assert(cancel.x, 200)
assert(cancel.y, 100)
assert(cancel.r, 50)
assert(cancel.title, 'Cancel')
assert(cancel.click, click)

assert(ok.click(), 'Ok')
assert(cancel.click(), 'Cancel')
assert(ok.inside(0,0), false)
assert(cancel.inside(200,100), true)

assert(buttons, [ok,cancel])

console.assert([]!==[])
//chai.assert.equal([],[]) 
chai.assert.deepEqual([],[]) 

print('#####  End  #####')