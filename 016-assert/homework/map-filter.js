const assert = require('./assert').assert

function doubleOddNumbers(numbers) {
	return numbers.filter(number => number % 2 === 1)
                .map(number => 2*number)
} 

assert(doubleOddNumbers([1,2,3,4]),[2,6], 'Message')
assert(doubleOddNumbers([4,7,1,2]),[14,2])	
