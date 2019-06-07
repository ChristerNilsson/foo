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
	lst.push(0.0)
	const n = lst.length/2
	let w = n
	for (let i of range(0,lst.length,2)) w -= lst[i+1]
	lst[lst.length-1] = w
	const widths = []
	for (let i of range(0,lst.length,2)) {
		const element = lst[i]
		const position = lst[i+1]/n
		widths.push(100*position)
		element.style.width = `${100*position-2*margin}%`
		element.style.margin = `${margin}%`
	}
	return widths
}

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

const dummy = {style:{}}
assert(row(dummy),[100])
assert(row(dummy,1,dummy),[50,50])
assert(row(dummy,1,dummy,1,dummy),[33.33333333333333,33.33333333333333,33.33333333333333])

if (innerWidth <= 500) {
	row(from)
	row(to)
	row(add)
	row(mul)
	row(div)
	row(bnew)
	row(counter)
	row(bundo)
} else {
	row(from,1,to)
	row(add,1,mul,1,div)
	row(bnew,1,counter,1,bundo)
}