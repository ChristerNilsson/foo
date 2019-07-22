'use strict'
const assert = require('./assert').assert

function createMock() {
	let calls = []
	return { mock: (...args) => calls.push(args), args : () => calls}
}
const m = createMock()

const foo = func => func()
foo(m.mock)
assert(m.args(), [[]])

foo(m.mock)
assert(m.args(), [[],[]])
