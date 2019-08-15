const assert = chai.assert.deepEqual

function fetch(url, callback)	{
	console.log('fetch',url)
	const req = new XMLHttpRequest
	req.open("GET",url)
	req.responseType = "json"
	req.onload = () => callback(req.response)
	req.send()
}

fetch('https://api.github.com/orgs/HackYourFuture/repos?per_page=100',e)
fetch('repos.json', f)
fetch('AngularJS/contributors.json', g)
fetch('tdd-game/contributors.json', h)

function e (repos) {
	console.log('e',repos.length)
}

function f (repos) {
	console.log('f',repos.length)
	assert(repos.length, 2)

	assert(repos[0].name, 'AngularJS')
	assert(repos[0].description, 'Class material from angularJS module')
	assert(repos[0].forks, 2)
	assert(repos[0].updated_at, "2018-04-06T17:18:06Z")
	assert(repos[0].html_url, "https://github.com/HackYourFuture/AngularJS")
	assert(repos[0].contributors_url, "https://api.github.com/repos/HackYourFuture/AngularJS/contributors")

	assert(repos[1].name, 'tdd-game')
}

function g (contributors) {
	console.log('g',contributors.length)
	assert(contributors[0].login, 'isalga')
	assert(contributors[0].html_url, "https://github.com/isalga")
	assert(contributors[0].avatar_url, "https://avatars3.githubusercontent.com/u/3985124?v=4")
	assert(contributors[0].contributions, 24)
}

function h (contributors) {
	console.log('h',contributors.length)
	assert(contributors[0].login, 'M3kH')
}
