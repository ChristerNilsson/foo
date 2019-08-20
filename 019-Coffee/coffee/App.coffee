URL = "https://api.github.com/orgs/HackYourFuture/repos?per_page=100"

repo = null
container = null

initialize = ->
	repos = await fetchJSON URL
	repos.sort (a,b) => a.name.localeCompare b.name
	repo = repos[0]
	body ->
		buildRepos repos
		container = div {id : 'container'}, ->
			fetchContributors()
	ancestors.push container
	console.dir document.body

buildRepos = (repos) ->
	header { class : "header" }, ->
		p { text : "HYF Repositories"}
		select0 = select { class : "repo-selector", "aria-label" : "HYF Repositories" }, ->
			xonchange =>
				repo = repos[select0.value]
				container.innerHTML = ''
				fetchContributors()
			for repo1,key in repos
				option { text : repo1.name, value : key }
		select0.value = 0

fetchContributors = ->
	contributors = await fetchJSON repo.contributors_url
	buildRepo()
	buildContributors contributors

buildRepo = ->
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

buildContributors = (contributors) ->
	div { class : "right-div whiteframe" }, ->
		p { text : "Contributions", class : "contributor-header" }
		ul { class : "contributor-list" }, ->
			for contributor in contributors
				do (contributor) =>
					li {class:"contributor-item", "aria-label":contributor.login, tabindex:0}, ->
						xonclick => window.open contributor.html_url, "_blank"
						xonkeyup (t) -> if t.key == 'Enter' then window.open contributor.html_url, "_blank"
						img { src : contributor.avatar_url, height : 48, class : "contributor-avatar"}
						div { class : "contributor-data"}, ->
							div { text : contributor.login }
							div { text : contributor.contributions, class : "contributor-badge" }

initialize URL
