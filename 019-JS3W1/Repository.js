"use strict"

class Repository {
	constructor(repository) {
		this.data = repository
	}

	render(parent) {
		const table = Util.createAndAppend("table", parent)
		const tbody = Util.createAndAppend("tbody", table)
		this.addRow(tbody, "Repository", `<a href="${this.data.html_url}" target="_blank">${this.data.name}</a>`)
		this.data.description && this.addRow(tbody,"Description", this.data.description)
		this.addRow(tbody, "Forks", this.data.forks)
		this.addRow(tbody, "Updated", new Date(this.data.updated_at).toLocaleString())
	}

	addRow(table, prompt, value) {
		const tr = Util.createAndAppend("tr", table);
		Util.createAndAppend("td", tr, { html : `${prompt} :`, class : "label"}),
		Util.createAndAppend("td", tr, { html : value })
	}

	fetchContributors() {
		return Util.fetchJSON(this.data.contributors_url)
	}

	name() {
		return this.data.name
	}

}