"use strict"

class View { 

	constructor (url) { 
		this.repos = null
		this.container = null
		this.initialize(url)
	}
	
	async initialize(url) { 
		const root = document.body
		const header = Util.createAndAppend("header", root, { class : "header" })
		Util.createAndAppend("p", header, { html : "HYF Repositories"})
		const select = Util.createAndAppend("select", header, { class : "repo-selector", "aria-label" : "HYF Repositories" })
		select.onchange = () => this.fetchAndRender(select.value)
		this.container = Util.createAndAppend("div", root, {id : 'container'})
		try { 
			const repos = await Util.fetchJSON(url) // ftech all repos
			this.repos = repos.sort( (a,b) => a.name.localeCompare(b.name,'sv') )  // sort on repo.name
									      .map( repo => new Repository(repo) ) // convert to the class Repository
			this.repos.forEach( (repo,key) => { // key is an index. Fill the DropDownList
				Util.createAndAppend("option", select, { html : repo.data.name, value : key } ) 
			} )
			this.fetchAndRender(select.value) // Fetch Contributors for the current Repo
		} catch(err) {
			this.renderError(err)
		}
	}
	
	async fetchAndRender(key) { 
		const repo = this.repos[key]
		try { 
			const contributors = await repo.fetchContributors()
			this.container.innerHTML = ""
			const divL = Util.createAndAppend("div", this.container, { class : "left-div whiteframe" })
			const divR = Util.createAndAppend("div", this.container, { class : "right-div whiteframe" })
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
		this.container.innerHTML = ""
		Util.createAndAppend("div", this.container, { html : err.message, class : "alert alert-error" })
	}
}

const HYF_REPOS_URL = "https://api.github.com/orgs/HackYourFuture/repos?per_page=100"
window.onload = () => new View(HYF_REPOS_URL)
