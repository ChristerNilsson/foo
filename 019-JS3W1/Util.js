"use strict"

class Util { 

	static createAndAppend(typ, parent, attributes={}) { 
		const element = document.createElement(typ)
		parent.appendChild(element)
		for (const key in attributes) {
			const value = attributes[key]
			"html" === key ? element.innerHTML=value : element.setAttribute(key,value)
		}
		return element
	} 

	static fetchJSON(url) { 
		return new Promise( (success,failure) => { 
			const req = new XMLHttpRequest 
			req.open("GET",url)
			req.responseType = "json"
			req.onload = () => { 
				req.status < 400 ? success(req.response) : failure(new Error(`Network error: ${req.status} - ${req.statusText}`))
			}
			req.onerror = () => failure(new Error("Network request failed"))
			req.send()
		})
	}

}
