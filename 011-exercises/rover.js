assert = require('assert').deepStrictEqual
range = require('lodash').range
print = console.log

print('##### begin #####')

// function f(age,citizen) {
// 	let result
// 	if (age>=18 && citizen) {
// 		result = true
// 	} else if (age < 18) {
// 		if (!citizen) {
// 			result = false
// 		}
// 	} else {
// 		result = false
// 	}
// 	return result
// }

f = (age,citizen) => age >= 18 && citizen

assert(f(10,false),false)
assert(f(10,true), false)
assert(f(20,false),false)
assert(f(20,true), true)

print('#####  end  #####')
