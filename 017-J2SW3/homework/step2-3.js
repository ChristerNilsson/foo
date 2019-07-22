'use strict'
const assert = require('./assert').assert

function repeatFor(str, num) {
	let result = ''
	for (let i=0; i<num; i++) result += str
  return result
}

function repeatWhile(str, num) {
	let result = ''
	while (num-- > 0) result += str
  return result
}

function repeatDo(str, num) {
	let result = ''
	if (num <= 0) return result
	do 
		result += str 
	while (--num > 0)
  return result
}

assert(repeatFor('abc', 3),'abcabcabc')
assert(repeatFor('abc', 1),'abc')
assert(repeatFor('abc', -2),'')
assert(repeatFor('abc', 0),'')

assert(repeatWhile('abc', 3),'abcabcabc')
assert(repeatWhile('abc', 1),'abc')
assert(repeatWhile('abc', 0),'')
assert(repeatWhile('abc', -2),'')

assert(repeatDo('abc', 3),'abcabcabc')
assert(repeatDo('abc', 1),'abc')
assert(repeatDo('abc', 0),'')
assert(repeatDo('abc', -2),'')
