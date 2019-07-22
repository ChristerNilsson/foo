'use strict'
const assert = require('./assert').assert

function Dog () {
	return {name:'Karo', color:'black', numLegs:4}
}

const hound = new Dog()
assert(typeof hound, 'object')
assert(typeof hound.name, 'string')
assert(typeof hound.color, 'string')
assert(typeof hound.numLegs, 'number')
