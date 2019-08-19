'use strict'

const assert = chai.assert.deepEqual

function print () {
	console.log(arguments[0])
	return arguments[0]
}

// 9 comp
// const arr = 'Christer Östen Elia Åke Aemy Anna'.split(' ')

// 10 comp
const arr = 'Christer Östen Elia Anna Åke Rolf'.split(' ')
//const arr = 'Anna Christer Elia Åke Östen'.split(' ')

const bubbleSort = (arr) => {
	const n = arr.length
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (arr[j] > arr[j+1]) [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
		}
	}
	return arr
}

assert(bubbleSort([5,4,1,2,1,9]),[1,1,2,4,5,9])
assert(bubbleSort(['Elia','Anna']),['Anna','Elia'])

// 'Anna' => ['A','n','n','a'] => ['a','n','n','A'] => 'annA'
function reverseString(str) {
	return str.split("").reverse().join("");
}

assert(reverseString("Anna"), "annA")
assert(reverseString("Elia"), "ailE")

arr.sort( (a,b) => {
	// const c = reverseString(a) 
	// const d = reverseString(b)
	return a.localeCompare(b,'sv')
})

print(arr)
