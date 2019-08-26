'use strict'

const assert = chai.assert.deepEqual
const range = _.range

let index = 0

let pages = []

function wrap(parent, typ, attributes = {}) { // createAndAppend
	const elem = document.createElement(typ)
	parent.appendChild(elem)
	for (const key in attributes) { elem.setAttribute(key,attributes[key]) }
	return elem
}

const links = wrap(document.body,'div')
const link  = wrap(document.body,'div')

const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://api.texttv.nu/api/get/106-187')
xhr.onload = evt => addPages(JSON.parse(evt.currentTarget.response))
xhr.send()

function addPages(xpages) {
	pages = xpages
	console.log(pages)
	pages.sort((a,b) => b.date_updated_unix - a.date_updated_unix) // 1970-01-01
	pages = pages.filter(page => page.title)
	pages.forEach(page => {
		const div = wrap(links,'div')
		const a = wrap(div,'a', {href:'#'})
		const cleaner = document.createElement('div')
		cleaner.innerHTML = page.content
		console.log(cleaner.innerText)
		const date = new Date(page.date_updated_unix * 1000).toLocaleString('sv')
		a.textContent = `${date} ${page.num} - ${page.title}`
		a.onclick = () => link.innerHTML = '<br>' + page.content
		speaker.text = page.content // fix(strip(pages[index].content))
		speechSynthesis.speak(speaker)	
  })
}

//////

const speaker = new SpeechSynthesisUtterance()
const voices = speechSynthesis.getVoices()
speaker.voice = voices[3]	
speaker.voiceURI = "native"
speaker.volume = 1
speaker.rate = 1.0
speaker.pitch = 0.8
speaker.text = ''
speaker.lang = 'sv-SE'

function fix(text) {
	text = text.split("\n")
	text = text.slice(4,22)
	text = text.join(' ')
	return text
}

function strip(html) {
	const div = document.createElement("div")
	div.innerHTML = html
	return div.textContent || div.innerText || ""
}

document.body.addEventListener("keyup", (evt) => {
	if (evt.keyCode == 32) { // space key ASCII UTF-8
		speechSynthesis.cancel()
		const s = fix(strip(pages[index].content))
		console.log(s)
		speaker.text = s
		document.body.innerText = speaker.text
		speechSynthesis.speak(speaker)	
		return
	}
	if (evt.keyCode == 38 && index > 0) index--
	if (evt.keyCode == 40 && index < pages.length - 1) index++
	console.log(pages[index])
	const page = pages[index]
	speechSynthesis.cancel()
	document.body.innerText = relativeTime(page.date_updated_unix) + ' ' + page.title
	speaker.text = document.body.innerText
	speechSynthesis.speak(speaker)
});

const relativeTime = (unix) => {
	const now = Date.now()
	const date = new Date(unix*1000)
	let value = (now - date)/1000 // seconds
	for (const [factor,unit] of [[60,'sekunder'],[60,'minuter'],[24,'timmar'],[7,'dagar'],[9999,'veckor']]) {
		if (value < factor) return `${Math.round(value)} ${unit} sedan.`
		value /= factor
	}
}

