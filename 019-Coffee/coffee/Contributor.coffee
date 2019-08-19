# "use strict"

# class Contributor { 
# 	constructor(t) { 
# 		this.data = t
# 	}
	
# 	render(t) { 
# 		const li = Util.createAndAppend("li", t, { class : "contributor-item", "aria-label" : this.data.login, tabindex : 0})
# 		li.onclick = () => { window.open(this.data.html_url, "_blank") }
# 		li.onkeyup = t => { "Enter" === t.key && (t.preventDefault(),window.open(this.data.html_url,"_blank")) }
# 		Util.createAndAppend("img", li, { src : this.data.avatar_url, height : 48, class : "contributor-avatar"})
# 		const div = Util.createAndAppend("div", li, { class : "contributor-data"})
# 		Util.createAndAppend("div", div, { html : this.data.login })
# 		Util.createAndAppend("div", div, { html : this.data.contributions, class : "contributor-badge" })
# 	}
# }