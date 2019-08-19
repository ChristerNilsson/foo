'use script'

assert = chai.assert.deepEqual
function print () {
	console.log(arguments[0])
	return arguments[0]
}

// assert((2 in [1,2,3]), false )

function range () {
	const result = []

	n = arguments.length
	if (n < 1 || n > 3) return []
	
	a = 0
	c = 1

	if (n == 1) b = arguments[0]
	if (n == 2)	[a,b] = arguments
	if (n == 3) [a,b,c] = arguments

	if (c == 0) {
		return [];
	}

	if (a > b) {
		for (let i=a; i>b; i-=c) result.push(i)
	} else {
		for (let i=a; i<b; i+=c) result.push(i)
	}
	
	return result
} 

assert(range(3), [0,1,2])
assert(range(10,13), [10, 11, 12])
assert(range(14,7), [14,13,12,11,10,9,8])
assert(range(10,15,2), [10, 12, 14]) 
assert(range(-4), [0, -1, -2, -3])
assert(range(9, 4, 1, -5), [])
assert(range(), [])
assert(range('5'), [0,1,2,3,4])
assert(range(0,0,0),[])
assert(range(0,10,0),[])
