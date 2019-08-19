print = () ->
	console.log arguments[0]
	arguments[0]

createAndAppend = (type, parent, attributes = {}) =>
	element = document.createElement type
	parent.appendChild element
	for key,value of attributes
		if key == 'text'
			element.textContent = value 
		else
			element.setAttribute key, value
	element

stack = []

crap = (attributes, f, type) =>
	if typeof type == 'object' then stack.push type
	else stack.push createAndAppend type, _.last(stack), attributes
	f()
	stack.pop()

head =  (            f = =>) => crap {}, f, document.head
body =  (            f = =>) => crap {}, f, document.body

a =     (attributes, f = =>) => crap attributes, f, 'a'
div =   (attributes, f = =>) => crap attributes, f, 'div'
h1 =    (attributes, f = =>) => crap attributes, f, 'h1'
h2 =    (attributes, f = =>) => crap attributes, f, 'h2'
h3 =    (attributes, f = =>) => crap attributes, f, 'h3'
header= (attributes, f = =>) => crap attributes, f, 'header'
img =   (attributes, f = =>) => crap attributes, f, 'img'
li =    (attributes, f = =>) => crap attributes, f, 'li'
option= (attributes, f = =>) => crap attributes, f, 'option'
p =     (attributes, f = =>) => crap attributes, f, 'p'
select= (attributes, f = =>) => crap attributes, f, 'select'
table = (attributes, f = =>) => crap attributes, f, 'table'
tbody = (attributes, f = =>) => crap attributes, f, 'tbody'
td =    (attributes, f = =>) => crap attributes, f, 'td'
title = (attributes, f = =>) => crap attributes, f, 'title'
tr =    (attributes, f = =>) => crap attributes, f, 'tr'
ul =    (attributes, f = =>) => crap attributes, f, 'ul'



# createAndAppend = (typ, parent, attributes={}) { 
# 	const element = document.createElement(typ)
# 	parent.appendChild(element)
# 	for (const key in attributes) {
# 		const value = attributes[key]
# 		"html" === key ? element.innerHTML=value : element.setAttribute(key,value)
# 	}
# 	return element
# } 

fetchJSON = (url) =>
	new Promise (success,failure) => 
		req = new XMLHttpRequest()
		req.open "GET",url
		req.responseType = "json"
		#req.onload = () => if req.status < 400 then success(req.response) else failure(new Error(`Network error: ${req.status} - ${req.statusText}`))
		req.onload = () => success req.response
		#req.onerror = () => failure(new Error("Network request failed"))
		req.send()
