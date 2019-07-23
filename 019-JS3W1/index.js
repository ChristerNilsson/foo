// const assert = chai.assert.deepStrictEqual
// const range = _.range
// const print = console.log

// // demo: http://hyf-github.netlify.com

// // repos 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100'
// // contributors_url https://api.github.com/repos/HackYourFuture/AngularJS/contributors
// // contributor: html_url https://github.com/isalga

// const repos = []

// let selectRepos = document.createElement('select')
// document.body.appendChild(selectRepos)

// let divRepo = document.createElement('div')
// document.body.appendChild(divRepo)

// let ulContributors = document.createElement('ul')
// document.body.appendChild(ulContributors)

// selectRepos.onchange = () => fillRepo(repos[selectRepos.value])

// function clear(myNode) { while (myNode.firstChild) myNode.removeChild(myNode.firstChild) }	

// function compareName (repo1,repo2) { return compareString(repo1.name,repo2.name) }

// function compareString(a,b) {
// 	a = a.toLowerCase()
// 	b = b.toLowerCase()
// 	if (a < b) return -1
// 	if (a > b) return 1
// 	return 0
// }

// function fetchContributors(repo) {
// 	fetch(repo.contributors_url)
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }

//       // Examine the text in the response
//       response.json().then(function(data) {
// 				fillContributors(data)
//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   })

// }

// function fillContributors(data) {
// 	clear(ulContributors)
// 	for (contributor of data) {
// 		li = document.createElement('li')
// 		li.appendChild(makeLink(contributor.login, contributor.html_url))
// 		li.appendChild(makeDiv('contribs',contributor.contributions))
// 		li.appendChild(makeImage(contributor.login, contributor.avatar_url))
// 		ulContributors.appendChild(li)
// 	}
// }

// function fillRepo(repo) {
// 	clear(divRepo)
// 	divRepo.appendChild(makeLink(repo.name, repo.html_url)) 
// 	divRepo.appendChild(makeDiv('Description',repo.description)) 
// 	divRepo.appendChild(makeDiv('Forks',repo.forks)) 
// 	divRepo.appendChild(makeDiv('Updated',repo.updated_at)) 
// 	fetchContributors(repo)
// }

// function fillRepos(data) {
// 	data.sort(compareName)
// 	for (repo of data) {
// 		repos[repo.name] = repo
// 		option = document.createElement('option')
// 		option.innerText = repo.name
// 		option.value = repo.name
// 		selectRepos.appendChild(option)
// 	}
// }

// function makeDiv(prompt,txt) {
// 	let div = document.createElement('div')
// 	div.innerText = prompt + ': ' + txt
// 	return div
// }

// function makeImage(alt,src) {
// 	let img = document.createElement('img')
// 	img.alt = alt
// 	img.src = src
// 	img.height = 42
// 	img.width = 42
// 	return img
// }

// function makeLink(innerText,href) {
// 	let a = document.createElement('a')
// 	a.innerText = innerText
// 	a.href = href
// 	a.target = '_blank'
// 	return a
// }

// fetch('https://api.github.com/orgs/HackYourFuture/repos?per_page=100')
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }

//       response.json().then(function(data) {
// 				fillRepos(data)
//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   })
