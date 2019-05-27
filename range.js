assert = require('assert').deepEqual
range = require('lodash').range
print = console.log
print('##### begin #####')

function * myRange (a,b,c=1) {
  if (arguments.length === 1) b = a  
	if (arguments.length === 1) a = 0
	c = a < b ? Math.abs(c) : -Math.abs(c)
	if (a < b) for (let i=a; i<b; i+=c) yield i
	else       for (let i=a; i>b; i+=c) yield i
}

function expandRange () {
	return Array.from(myRange(...arguments))
}

assert([], expandRange(0))
assert([0], expandRange(1))
assert([0,1,2,3,4], expandRange(5))
assert([0,1,2,3,4], expandRange(0,5))
assert([0,1,2,3,4], expandRange(0,5,-1))
assert([5,4,3,2,1], expandRange(5,0))
assert([5,4,3,2,1], expandRange(5,0,1))
assert([5,4,3,2,1], expandRange(5,0,-1))
assert([5,6,7,8,9], expandRange(5,10))
assert([0,2,4,6,8], expandRange(0,10,2))
assert([10,9,8,7,6], expandRange(10,5))
assert([-1,-2,-3,-4], expandRange(-1,-5))
assert([-2,-1,0,1,2], expandRange(-2,3))

print('#####  end  #####')
