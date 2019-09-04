'use strict'

const Guess = require('./guess')

const guess = new Guess(7) 

guess.read()

if (process.argv.length == 2) {
	guess.reset(7)
	console.log(guess.limits())
} else {
	const cmd = process.argv[2]
	console.log(guess.guess(cmd))
}

guess.write()
