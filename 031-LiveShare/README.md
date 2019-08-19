// function range() {
// 	n = arguments.length
// 	a = 0
// 	c = 1
// 	if (n==1) b = arguments[0] 
// 	if (n==2) [a,b] = arguments 
// 	if (n==3) [a,b,c] = arguments

// 	console.log(n,a,b,c)
// 	result = []
// 	for (let i = a; i < b; i=i+c) {
// 		result.push(i)
// 	}
// 	return result 
// }

assert(range(3), [0,1,2])
assert(range(10, 13), [10, 11, 12])
assert(range(10, 15, 2), [10,12,14])

// function xobject(keys, values) {
// 	result = {}
// 	n = keys.length 
// 	for (const i of range(n)) {
// 		const key = keys[i]
// 		const value = values[i]
// 		result[key] = value
// 	}
// 	return result 
// }



