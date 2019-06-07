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
	button.style.fontSize = '250%'
  return button
}

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
	if (history.length==0) return
	from.innerText = history.pop()
	counter.innerText = history.length
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
assert(row(dummy,1,dummy,1,dummy,1),[33.333333333333336,33.333333333333336,33.333333333333336])

const rnd = (min, max) => Math.floor(Math.random() * (max - min) ) + min

const newGame = () => {
	from.innerText = rnd(1,20)
	to.innerText = rnd(1,20)
	history.length = 0
	counter.innerText = history.length
}

const root = document.getElementById('root')

const history = []

const from = createPara(0)
const to = createPara(0)

const add = createButton('+2', () => update('+2'))
const mul = createButton('*2', () => update('*2'))
const div = createButton('/2', () => update('/2'))

const bnew = createButton('new', () => newGame())
const counter = createPara(0)
counter.style.fontSize='250%'
const bundo = createButton('undo', () => undo())

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