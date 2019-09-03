'use strict'

const http = require('http')
const Nim = require('./nim')

function createServer(port) {
	const nim = new Nim()
  return http.createServer((req, res) => {
		const arr = req.url.split('/')
		console.log(arr)
		if (arr.length == 3) {
			const heap = arr[1]
			const sticks = arr[2]
			res.writeHead(200,{'Content-Type': 'application/json'})
			nim.human('abc'.indexOf(heap),sticks)
			res.write(`Human: ${nim}\n`)
			nim.computer()
			res.end(`Computer: ${nim}`)
		} else if (arr.length == 2) {
			if (arr[1] == 'reset') nim.reset()
			res.writeHead(200,{'Content-Type': 'application/json'})
			res.end(`${nim}`)
		}
	})
}

module.exports = createServer

// localhost:3000
// state = 10
// localhost:3000/add
// state = 11
// localhost:3000/add
// state = 12
// localhost:3000/sub
// state = 11
// localhost:3000/reset
// state = 10

