'use strict'

const PATH = 'data.txt'

const fs = require('fs')
const _ = require('lodash')
const chai = require('chai')
const assert = chai.assert.deepEqual

class Guess {
	constructor(level) {
		this.reset(level)
	}

	read() {                             
		Object.assign(this, JSON.parse(fs.readFileSync(PATH,'utf-8')))
	}
	
	write() {
		fs.writeFileSync(PATH,JSON.stringify(this))
	}
	
	reset (level) {
		this.level = level
		this.low = 1
		this.high = 2**level-1
    this.secret = _.random(this.low, this.high)
    this.history = []
	}

	limits() {
		return `${this.low}-${this.high}` 
	}
	
	toString() {  
		return `Your guesses are ${JSON.stringify(this.history)}`
	}

  guess(nr) {
		nr = JSON.parse(nr)
		this.history.push(nr)
    if (nr === this.secret) return 'Correct!'
		if (nr > this.secret) this.high = nr - 1
    if (nr < this.secret) this.low = nr + 1
		return this.limits()
  }
}

const guess = new Guess(7)
guess.secret = 82
assert(guess.secret, 82)
assert(guess.limits(), '1-127')
assert(guess.history, [])
assert(guess.guess(64),'65-127')
assert(guess.history, [64])
assert(guess.guess(96), '65-95')
assert(guess.guess(80), '81-95')
assert(guess.guess(88), '81-87')
assert(guess.guess(84), '81-83')

assert(guess.history, [64,96,80,88,84])
assert(`${guess}`, 'Your guesses are [64,96,80,88,84]')

assert(guess.guess(82), 'Correct!')
assert(guess.history, [64,96,80,88,84,82])
assert(`${guess}`, 'Your guesses are [64,96,80,88,84,82]')
guess.reset()

module.exports = Guess
