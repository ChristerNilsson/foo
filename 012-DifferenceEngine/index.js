const assert = chai.assert.deepStrictEqual
const range = _.range
const print = console.log
print('##### begin #####')

crank = (numbers) => {
	for (i of range(numbers.length-1)) numbers[i] += numbers[i+1]
	return numbers
}

// crank = (numbers) => {
// 	numbers[0] += numbers[1]
// 	numbers[1] += numbers[2]
// 	numbers[2] += numbers[3]
// 	numbers[3] += numbers[4]
// 	numbers[4] += numbers[5]
// 	numbers[5] += numbers[6]
// 	numbers[6] += numbers[7]
// 	return numbers
// }

engine = (cranks, numbers) => {
	printer = [] 
	for (j of range(cranks)) {
		printer.push(numbers[0])
		crank(numbers)
	}
	return printer
}

//f(x)=x 
assert(crank([0,1,0,0,0,0,0,0]), [1,1,0,0,0,0,0,0])
assert(crank([1,1,0,0,0,0,0,0]), [2,1,0,0,0,0,0,0])

//f(x)=x*x
assert(crank([0,1,2,0,0,0,0,0]), [1,3,2,0,0,0,0,0])
assert(crank([1,3,2,0,0,0,0,0]), [4,5,2,0,0,0,0,0])
assert(crank([4,5,2,0,0,0,0,0]), [9,7,2,0,0,0,0,0])
assert(crank([9,7,2,0,0,0,0,0]), [16,9,2,0,0,0,0,0])
assert(crank([8,7,6,5,4,3,2,1]), [15,13,11,9,7,5,3,1])

assert(engine(0,[9,0,0,0,0,0,0,0]), [])
assert(engine(1,[9,0,0,0,0,0,0,0]), [9])
assert(engine(2,[9,0,0,0,0,0,0,0]), [9,9])

assert(engine(4,[10,1,0,0,0,0,0,0]), [10,11,12,13])
assert(engine(5,[7,2,0,0,0,0,0,0]), [7,9,11,13,15])
assert(engine(6,[7,5,0,0,0,0,0,0]), [7,12,17,22,27,32])

assert(engine(5,[1,3,2,0,0,0,0,0]), [1,4,9,16,25])
assert(engine(5,[2,6,4,0,0,0,0,0]), [2,8,18,32,50])

assert(engine(5,[1,7,12,6,0,0,0,0]), [1,8,27,64,125])


print('#####  end  #####')
