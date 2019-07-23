"use strict"

class View { 

	constructor (url) { 
		this.initialize(url)
	}
	
	async initialize(url) { 
		const root = document.getElementById("root") 
		const header = Util.createAndAppend("header", root, { class : "header" })
		Util.createAndAppend("p", header, { html : "HYF Repositories"})
		const select = Util.createAndAppend("select", header, { class : "repo-selector", "aria-label" : "HYF Repositories" })
		select.onchange = () => this.fetchAndRender(select.value)
		Util.createAndAppend("div", root, { id : "container" })
		try { 
			const repos = await Util.fetchJSON(url)
			this.repos = repos.sort( (a,b) => a.name.localeCompare(b.name) )
									      .map( repo => new Repository(repo) )
			this.repos.forEach( (repo,key) => { // key is an index
				Util.createAndAppend("option", select, { html : repo.name(), value : key } ) 
			} )
			this.fetchAndRender(select.value) 
		} catch(err) { 
			this.renderError(err)
		}
	}
	
	async fetchAndRender(key) { 
		const repo = this.repos[key]
		const container = document.getElementById("container")
		try { 
			const contributors = await repo.fetchContributors()
			container.innerHTML = ""
			const divL = Util.createAndAppend("div", container, { class : "left-div whiteframe" })
			const divR = Util.createAndAppend("div", container, { class : "right-div whiteframe" })
			Util.createAndAppend("p", divR, { html : "Contributions", class : "contributor-header" })
			const ul = Util.createAndAppend("ul", divR, { class : "contributor-list" })
			repo.render(divL)
			contributors.map(contributor => new Contributor(contributor))
			            .forEach(contributor => contributor.render(ul))
		} catch(err) { 
			this.renderError(err)
		}
	}
	
	renderError(err) { 
		const container = document.getElementById("container")
		container.innerHTML = ""
		Util.createAndAppend("div", container, { html : err.message, class : "alert alert-error" })
	}
}

const HYF_REPOS_URL = "https://api.github.com/orgs/HackYourFuture/repos?per_page=100"
window.onload = () => new View(HYF_REPOS_URL)
