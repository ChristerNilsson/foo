class GitHub extends Page

	init : (url) =>
		@repos = await fetchJSON url
		@repos.sort (a,b) => a.name.localeCompare b.name
		@buildTree 0

	buildTree : (index) =>
		@body =>
			@header { class: "header" }, =>
				@p { text: "HYF Repositories"}
				@select { class: "repo-selector", "aria-label": "HYF Repositories" }, =>
					@addListener 'change', (evt) => 
						repo = @repos[evt.target.value]
						@buildLeft repo, @leftDiv
						@buildRight repo, @rightDiv
					@option { text: repo1.name, value: key } for repo1,key in @repos
			@div {id: 'container'}, =>
				@leftDiv = @div { class: "left-div whiteframe" }
				@rightDiv = @div { class: "right-div whiteframe" }

		repo = @repos[index]
		@buildLeft repo, @leftDiv
		@buildRight repo, @rightDiv

	buildLeft : (repo,parent) =>
		@wrap parent, =>
			@table {}, =>
				@tbody {}, =>
					@tr {}, =>
						@td {text: "Repository"}
						@td {}, => @a {text: repo.name, href: repo.html_url, target: "_blank"}
					@tr {}, =>
						@td {text: 'Description'}
						@td {text: repo.description}
					@tr {}, =>
						@td {text: 'Forks'}
						@td {text: repo.forks}
					@tr {}, =>
						@td {text: 'Updated'}
						@td {text: new Date(repo.updated_at).toLocaleString('sv')}

	buildRight : (repo,parent) =>
		contributors = await fetchJSON repo.contributors_url
		@wrap parent, =>
			@p { text: "Contributions", class: "contributor-header" }
			@ul { class: "contributor-list" }, =>
				for contributor in contributors
					do (contributor) =>
						@li {class: "contributor-item", "aria-label": contributor.login, tabindex: 0}, =>
							@addListener 'click', => window.open contributor.html_url, "_blank"
							@addListener 'keyup', (t) => if t.key == 'Enter' then window.open contributor.html_url, "_blank"
							@img { src: contributor.avatar_url, height: 48, class: "contributor-avatar"}
							@div { class: "contributor-data"}, =>
								@div { text: contributor.login }
								@div { text: contributor.contributions, class: "contributor-badge" }

github = new GitHub
github.init "https://api.github.com/orgs/HackYourFuture/repos?per_page=100"
