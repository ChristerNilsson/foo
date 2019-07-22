'use strict'
const assert = require('./assert').assert

function threeFive(startIndex, stopIndex, call3, call5) {
	for (let i=startIndex; i<=stopIndex; i++) {
		if (i%3 == 0) call3(i)
		if (i%5 == 0) call5(i,i)
	}
}

function createMock() {
	let calls = []
	return { mock: (...args) => calls.push(args), args : () => calls}
}
const m3 = createMock()
const m5 = createMock()

threeFive(10, 15, m3.mock, m5.mock)

assert(m3.args(), [[12],[15]])
assert(m5.args(), [[10,10],[15,15]])
