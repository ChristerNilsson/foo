"use strict"
const assert = chai.assert.deepStrictEqual
const range = _.range
const print = console.log

const createElem = (type,title) => {
	const elem = document.createElement(type)
	elem.innerText = title
	elem.style.float = 'left'
	elem.style.textAlign = 'center'
	root.appendChild(elem)
	return elem
}

const createPara = (title) => {
	const para = createElem('p',title)
	para.style.fontSize = '500%'
	return para
}

const createButton = (title,click) => {
	const button = createElem('button',title)
  button.addEventListener('click',click)
  button.setAttribute('class', 'my-button')
	button.style.fontSize = '200%'
  return button
}

const update = (op) => {
	let value = parseInt(number.innerText)
  if (op == 'incr') value++
	number.innerText = value
}

function row () {
	const margin = 0.3 // %
	const lst = Array.from(arguments)
	lst.push(0.0)
	let n = lst.length/2
	let w = n
	for (let i of range(0,lst.length,2)) w -= lst[i+1]
	lst[lst.length-1] = w
	const widths = []
	for (let i of range(0,lst.length,2)) {
		let element = lst[i]
		let position = lst[i+1]/n
		element.style.width = `${100*position-2*margin}%`
		widths.push(100*position)
		element.style.margin = `${margin}%`
	}
	return widths
}

const root = document.getElementById('root')
const number = createPara(0)
number.style.fontSize = '250%'
const incr = createButton('incr', () => update('incr'))

const dummy = {style:{}}
assert(row(dummy),[100])
assert(row(dummy,1,dummy),[50,50])
assert(row(dummy,0.5,dummy),[25,75])
assert(row(dummy,1.5,dummy),[75,25])

if (innerWidth <= 500) {
	row(number)
	row(incr)
} else {
	row(number,1,incr)
}
