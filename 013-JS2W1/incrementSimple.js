"use strict"


function update () {
	let value = parseInt(number.innerText)
	value++
	number.innerText = value
}

const root = document.getElementById('root')

const makeDiv = (title) => {
	const number = document.createElement('div')
	number.style.width = '50%'
	number.innerText = title
	number.style.float = 'left'
	number.style.textAlign = 'center'
	number.style.fontSize = '250%'
	root.appendChild(number)	
	return number
}

function makeButton(title,click) {
	const button = document.createElement('button')
	button.onclick = click
	button.setAttribute('class', 'my-button')
	button.style.width = '50%'
	button.innerText = title
	button.style.float = 'left'
	button.style.textAlign = 'center'
	button.style.fontSize = '250%'
	root.appendChild(button)
	return button
}

const number = makeDiv('10')
const incr = makeButton('incr',update)
