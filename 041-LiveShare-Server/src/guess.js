'use strict'

const _ = require('lodash')
const chai = require('chai')
const assert = chai.assert.deepEqual

class Guess {
	constructor () {
		this.reset()
	}
  toString() {
		return "Your guesses are " + JSON.stringify(this.history)
	}
	guess (number){
    this.history.push(number)	
    if (number < this.secret) return 'Low!'
    if (number > this.secret) return 'High!'
    if (number == this.secret) return 'Correct!'
  }
  reset (){
    // this.secret = Math.floor(Math.random()*100) + 1
		this.secret = _.random(1,1000000) 
    this.history = []
  }
}

const guess = new Guess()
guess.secret = 82
assert(guess.secret, 82)
assert(guess.history, [])
assert(guess.guess(50),'Low!')
assert(guess.history, [50])
assert(guess.guess(75), 'Low!')
assert(guess.guess(87), 'High!')
assert(guess.guess(81), 'Low!')
assert(guess.guess(84), 'High!')
assert(guess.guess(82), 'Correct!')
assert(guess.history, [50,75,87,81,84,82])
assert(`${guess}`, 'Your guesses are [50,75,87,81,84,82]')
guess.reset()
assert(guess.history, [])
console.log('Ready!')

module.exports = Guess
