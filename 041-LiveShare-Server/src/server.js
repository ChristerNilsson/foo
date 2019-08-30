'use strict'

const http = require('http')
const Guess = require ('./guess')

function createServer(port) {
	const guess = new Guess()
  return http.createServer((req, res) => {
		const arr = req.url.split('/')
		if (arr[1] == 'favicon.ico') return
		if (arr[1] == '') return
		if (arr[1] == 'reset') {
			guess.reset()
			res.end(guess.toString())
		} else {
			console.log(arr)
			try {
				const number = JSON.parse(arr[1])
				res.write(guess.guess(number))
			} catch (err) {
				console.log(err)
				res.write('Syntax error: ' + req.url + '\n' )
			}
			res.end(guess.toString())	
		}
 
	})
}

module.exports = createServer
