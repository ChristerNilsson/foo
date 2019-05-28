// const assert = require('assert').deepStrictEqual   // node.js
// const range = require('lodash').range              // node.js
const assert = chai.assert.deepStrictEqual         // browser
const range = _.range                              // browser
const print = console.log
print('##### Begin #####')

assert(1+2,3)

function StopWatch() {
		let ticking = false
		let duration = 0
		let startTime = 0

		this.start = function () {
			if (ticking) throw new Error('Already started') 
			ticking = true
			startTime = new Date()
		}

		this.stop = function () {
			if (!ticking) throw new Error('Already stopped') 
			ticking = false
			duration += new Date() - startTime
		}

		this.reset = function () {
			duration = 0
			ticking = false
		}

		Object.defineProperty(this,'duration', {
			get: function() {return duration}
		})

}


print('#####  End  #####')
