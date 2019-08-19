URL = "https://api.github.com/orgs/HackYourFuture/repos?per_page=100"

repos = null
repo = null
contributors = []
container = null

fetch URL
	.then (response) => response.json()
	.then (json) =>
		repos = json
		repos.sort (a,b) => a.name.localeCompare b.name
		repo = repos[0]
		fetch repo.contributors_url
			.then (response) => response.json()
			.then (json) =>
				contributors = json

				body ->
					buildRepos()
					container = div {id : 'container'}, ->
						buildRepo repo
						buildContributors repo

buildRepos = ->
	header { class : "header" }, ->
		p { text : "HYF Repositories"}
		select0 = select { class : "repo-selector", "aria-label" : "HYF Repositories" }, ->
			for repo1,key in repos
				option { text : repo1.name, value : key }
		select0.value = 0
		select0.onchange = =>
			repo = repos[select0.value]
			fetch repo.contributors_url
				.then (response) => response.json()
				.then (json) =>
					contributors = json
					stack.push container
					container.innerHTML = ''
					buildRepo() # repo
					buildContributors() # repo
					stack.pop()
					print stack

buildRepo = () ->
	div { class : "left-div whiteframe" }, ->
		table {}, ->
			tbody {}, ->
				tr {}, ->
					td {text: "Repository"}
					td {}, ->
						a {text: repo.name, href: repo.html_url, target:"_blank"}
				tr {}, ->
					td {text: 'Description'}
					td {text: repo.description}
				tr {}, ->
					td {text: 'Forks'}
					td {text: repo.forks}
				tr {}, ->
					td {text: 'Updated'}
					td {text: new Date(repo.updated_at).toLocaleString('sv')}

buildContributors = () ->
	div { class : "right-div whiteframe" }, ->
		p { text : "Contributions", class : "contributor-header" }
		ul { class : "contributor-list" }, ->
			for contributor in contributors
				do (contributor) =>
					li0 = li { class : "contributor-item", "aria-label" : contributor.login, tabindex : 0}, ->
						img { src : contributor.avatar_url, height : 48, class : "contributor-avatar"}
						div { class : "contributor-data"}, ->
							div { text : contributor.login }
							div { text : contributor.contributions, class : "contributor-badge" }
					li0.onclick = => window.open contributor.html_url, "_blank"
					li0.onkeyup = (t) ->
						if t.key == 'Enter' then window.open contributor.html_url, "_blank"


