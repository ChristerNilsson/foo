"use strict"

const assert = chai.assert.deepStrictEqual
const range = _.range
const print = console.log

class Util { 

	static createAndAppend(typ, parent, attributes={}) { 
		const element = document.createElement(typ)
		parent.appendChild(element)
		for (const key in attributes) {
			const value = attributes[key]
			"html" === key ? element.innerHTML=value : element.setAttribute(key,value)
		}
		return element
	} 

	static fetchJSON(url) { 
		return new Promise( (success,failure) => { 
			const req = new XMLHttpRequest 
			req.open("GET",url)
			req.responseType = "json"
			req.onload = () => { 
				req.status < 400 ? success(req.response) : failure(new Error(`Network error: ${req.status} - ${req.statusText}`))
			}
			req.onerror = () => failure(new Error("Network request failed"))
			req.send()
		})
	}

}

const parent = document.createElement('div')
const img = Util.createAndAppend('img', parent, {innerText:'Adam',   html:'<br>', width:150})
const div = Util.createAndAppend('div', parent, {innerText:'Bertil', html:'<br>', width:200})

assert(parent.children.length, 2)

assert(img.tagName, 'IMG')
assert(img.innerText, '')
assert(img.innerHTML, '') // blocked
assert(img.width, 150)

assert(div.tagName, 'DIV')
assert(div.innerText, '')
assert(div.innerHTML, '<br>')
assert(div.width, undefined) // blocked

img.innerText = 'A' 
assert(img.innerText, 'A') 
img.innerHTML = '<div></div>' 
assert(img.innerHTML, '') // blocked

div.innerText = 'B' 
assert(div.innerText, 'B') 
div.width = 250 
assert(div.width, 250) // not blocked
