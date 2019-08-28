'use strict'

const http = require('http')

function createServer(port) {
  return http.createServer((req, res) => {
		const arr = req.url.split('/')
		console.log(arr)
		res.writeHead(200,{'Content-Type': 'application/json'})
		res.end(`${guess}`)
	})
}

module.exports = createServer
