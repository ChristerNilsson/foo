const assert = chai.assert.deepStrictEqual
const range = _.range
const print = console.log
print('##### begin #####')

// assert(range(5), [0,1,2,3,4])
assert(3%3,0)
assert(4%3,1)
assert(5%3,2)
assert(6%3,0)

function f(x) {
	return 
}
f = (x) => 2*x

assert(f(5), 10)
assert(f(6), 12)

print('#####  end  #####')
