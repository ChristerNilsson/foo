"use strict"

const assert = chai.assert.deepStrictEqual
const range = _.range
const print = console.log

const makeElem = (type,title) => {
	const elem = document.createElement(type)
	elem.innerText = title
	elem.style.float = 'left'
	elem.style.textAlign = 'center'
	root.appendChild(elem)
	return elem
}

const makeDiv = (title) => {
	const para = makeElem('div',title)
	para.style.fontSize = '250%'
	return para
}

const makeButton = (title,click) => {
	const button = makeElem('button',title)
	button.onclick = click
	button.setAttribute('class', 'my-button')
	button.style.fontSize = '250%'
	return button
}

function row () {
	const margin = 0 //.3 // %
	const lst = Array.from(arguments)
	let total = 0
	for (const i of range(0,lst.length,2)) total += lst[i+1]
	const widths = []
	for (const i of range(0,lst.length,2)) {
		const element = lst[i]
		const width = 100 * lst[i+1]/total
		widths.push(width)
		element.style.width = `${width-2*margin}%`
		element.style.margin = `${margin}%`
	}
	return widths
}
const dummy = {style:{}}
assert(row(dummy,1),[100])
assert(row(dummy,1,dummy,1),[50,50])
assert(row(dummy,1,dummy,1,dummy,1),[100/3,100/3,100/3])

const rnd = (min, max) => Math.floor(Math.random() * (max - min) ) + min

//////////////////////////////////////////////

const update = (op) => {
	let value = parseInt(from.innerText)
	if (op == '/2' && value % 2 == 1) return 
	history.push(value)
	if (op == '+2') value += 2
	if (op == '*2') value *= 2
	if (op == '/2') value /= 2
	from.innerText = value
	counter.innerText = history.length
}

const undo = () => {
	if (history.length == 0) return
	from.innerText = history.pop()
	counter.innerText = history.length
}

const newGame = () => {
	from.innerText = rnd(1,20)
	to.innerText = rnd(1,20)
	history.length = 0
	counter.innerText = history.length
}

const root = document.getElementById('root')

const history = []

const from = makeDiv(0)
const to = makeDiv(0)

const add = makeButton('+2', () => update('+2'))
const mul = makeButton('*2', () => update('*2'))
const div = makeButton('/2', () => update('/2'))

const bnew = makeButton('new', () => newGame())
const counter = makeDiv(0)
const bundo = makeButton('undo', () => undo())

counter.style.fontSize='250%'

if (innerWidth <= 500) {
	row(from,1)
	row(to,1)
	row(add,1)
	row(mul,1)
	row(div,1)
	row(bnew,1)
	row(counter,1)
	row(bundo,1)
} else if (innerWidth <= 1000) {
	row(from,1,to,1)
	row(add,1,mul,1,div,1)
	row(bnew,1,counter,1,bundo,1)
} else {
	row(from,1,to,1,add,1,mul,1,div,1,bnew,1,counter,1,bundo,1)
}