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
	let total = 0
	for (let i of range(0,lst.length,2)) total += lst[i+1]
	const widths = []
	for (let i of range(0,lst.length,2)) {
		const element = lst[i]
		const position = 100 * lst[i+1]/total
		widths.push(position)
		element.style.width = `${position-2*margin}%`
		element.style.margin = `${margin}%`
	}
	return widths
}
const dummy = {style:{}}
assert(row(dummy,1),[100])
assert(row(dummy,1,dummy,1),[50,50])
assert(row(dummy,0.5,dummy,1.5),[25,75])
assert(row(dummy,1.5,dummy,0.5),[75,25])

const root = document.getElementById('root')
const number = createPara(0)
number.style.fontSize = '250%'
const incr = createButton('incr', () => update('incr'))

if (innerWidth <= 500) {
	row(number,1)
	row(incr,1)
} else {
	row(number,1,incr,1)
}
