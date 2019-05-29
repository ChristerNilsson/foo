const assert = chai.assert.deepStrictEqual
const range = _.range
const print = console.log
print('##### begin #####')

assert([1],[1]) 
for (let i in range(5)) print(i)

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

print('#####  end  #####')
