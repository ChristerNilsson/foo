const assert = chai.assert.deepStrictEqual
const range = _.range

                    //   8421                     123 = 1*10*10 + 2*10 + 3*1
assert((7).toString(2),  '111') // 4+2+1          111 = 1*2*2 + 1*2 + 1 = 7
assert((8).toString(2), '1000') // 8+0+0+0
assert((9).toString(2), '1001') // 8+0+0+1
assert((6).toString(2),  '110') // 4+2+0
assert((14).toString(2),'1110') // 8+4+2+0
assert((11).toString(2),'1011') // 8+0+2+1

assert(0^0,0) // 0+0==0
assert(0^1,1) // 0+1==1
assert(1^0,1) // 1+0==1
assert(1^1,0) // (1+1)%2 == 0

assert(7^8^9,6) // 0=winning else losing
assert(1^8^9,0)
//assert(7^8^1,0)

// 0111 7
// 1000 8
// 1111 15
// 0001 1  8+0+0+1
// 1110 14  8+4

createAndAppend = (parent,type,attributes) => {
	element = document.createElement(type)
	parent.appendChild(element)
	for (key in attributes) 
		if (key==='text') element.innerText = attributes[key]
		else element[key] = attributes[key]
	return element
}
// let button = createAndAppend(document.body, 'button', {})
parent = document.body
type = "button"

let button1 = createAndAppend(parent,type,{text: 7, style: "font-size: 10rem; width:33.3333%"})
let button2 = createAndAppend(parent,type,{text: 8, style: "font-size: 10rem; width:33.3333%"})
let button3 = createAndAppend(parent,type,{text: 9, style: "font-size: 10rem; width:33.3333%"})
let button4 = createAndAppend(parent,type,{text: "Go", style: "font-size: 10rem; width: 100%"})

buttons = [button1,button2,button3]

button4.disabled = true

human = (button) => {
	for (btn of buttons) btn.disabled = true
	button4.disabled = false
	button.innerText-- 
	button.disabled = button.innerText === '0'
}

computer = () => {
	for (btn of buttons) btn.disabled = btn.innerText === '0'
	total = button1.innerText ^ button2.innerText ^ button3.innerText

	if (total == 0) {

	} else {
		for (btn of buttons) {
			count = total ^ btn.innerText
			if (count <= btn.innerText) {
				btn.innerText = count
				return
			}
		}
	}
}

button1.addEventListener("click", () => human(button1))
button2.addEventListener("click", () => human(button2))
button3.addEventListener("click", () => human(button3))

button4.addEventListener("click", () => computer())
