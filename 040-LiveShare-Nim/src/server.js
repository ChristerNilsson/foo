'use strict'

const http = require('http')
//const Nim = require('./nim')

function createServer(port) {
  return http.createServer((req, res) => {
		console.log(req.url)
		res.writeHead(200,{'Content-Type': 'application/json'})
		res.end('Time to work!')
	})
}

module.exports = createServer