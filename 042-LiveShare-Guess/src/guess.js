'use strict'

const _ = require('lodash')
const chai = require('chai')
const assert = chai.assert.deepEqual

class Guess {}

const guess = new Guess()
guess.number = 82
// assert(guess.history, [])
// assert(guess.guess(50),'Low!')
// assert(guess.history, [50])
// assert(guess.guess(75), 'Low!')
// assert(guess.guess(87), 'High!')
// assert(guess.guess(81), 'Low!')
// assert(guess.guess(84), 'High!')
// assert(guess.guess(82), 'Correct!')
// assert(guess.history, [50,75,87,81,84,82])
// assert(guess.toString(), '[50,75,87,81,84,82]')
// guess.reset()
// assert(guess.history, [])

module.exports = Guess