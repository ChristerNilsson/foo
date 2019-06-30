"use strict"

const update = () => {
	let value = parseInt(number.innerText)
	value++
	number.innerText = value
}

const root = document.getElementById('root')

const number = document.createElement('div')
number.style.width = '100%'
number.innerText = 0
number.style.textAlign = 'center'
number.style.fontSize = '250%'
root.appendChild(number)

const incr = document.createElement('button')
incr.onclick = update
incr.setAttribute('class', 'my-button')
incr.style.width = '100%'
incr.innerText = 'incr'
incr.style.textAlign = 'center'
incr.style.fontSize = '250%'
root.appendChild(incr)
