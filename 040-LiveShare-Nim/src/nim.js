'use strict'

const _ = require('lodash')
const range = _.range
const chai = require('chai')
const assert = chai.assert.deepEqual

class Nim {}

const nim = new Nim
// assert(nim.state, [1,3,5])
// assert(nim.toString(), '[1,3,5]')
// nim.human(2,3)
// assert(nim.state, [1,3,2])
// nim.computer()
// assert(nim.state, [0,3,2])
// nim.human(1,2)
// assert(nim.state, [0,1,2])
// nim.computer()
// assert(nim.state, [0,1,1])
// nim.human(1,1)
// assert(nim.state, [0,0,1])
// nim.computer()
// assert(nim.state, [0,0,0])	
// nim.reset()
// assert(nim.state, [1,3,5])

module.exports = Nim
