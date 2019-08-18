'use script'

assert = chai.assert.deepEqual
function print () {
	console.log(arguments[0])
	return arguments[0]
}

const expectedBooks = [
  {title: 'The Kite Runner',     author: 'Khaled Hosseini',	language: 'English', cover: '3.jpg', },
  {title: 'Number the Stars',    author: 'Lois Lowry',      language: 'English', cover: '4.jpg', },
  {title: 'Pride and Prejudice', author: 'Jane Austen',     language: 'English', cover: '5.jpg', },
  {title: 'The Outsiders',       author: 'S.E Hinton',      language: 'English', cover: '7.jpg', },
  {title: 'Little Women',        author: 'Louisa May',      language: 'English', cover: '8.jpg', },
]

fmt = (titles, lines) => lines.map((line) => _.object(titles.split('|'),line.split ('|')))
// function fmt(titles, lines) {
// 	const result = []
// 	for (const line of lines) {
// 		result.push(_.object(titles.split('|') , line.split('|')  ))
// 	}
// 	return result
// }

assert('title|author|language|cover'.split('|'), ["title","author","language","cover"])
const actual = _.object(['alfa', 'bravo'], [1, 2])
const expected = {alfa:1, bravo:2}
assert(actual, expected)
//[1,2,3].map( (x) => x*x) // [1,4,9]
f = x => x*x
const a = [1,2,3].map (f)
const e = [1,4,9]
assert (a, e)

const books = fmt('title|author|language|cover', [
  'The Kite Runner|Khaled Hosseini|English|3.jpg',
  'Number the Stars|Lois Lowry|English|4.jpg',
  'Pride and Prejudice|Jane Austen|English|5.jpg',
  'The Outsiders|S.E Hinton|English|7.jpg',
  'Little Women|Louisa May|English|8.jpg',
])

assert (books,expectedBooks)

function createAndAppend (parent, type, attributes ={}) {
  const elem = document.createElement(type)
  parent.appendChild(elem)
  for (const key in attributes) {
		//console.log(key,attributes[key])
		elem[key] = attributes[key]
	}
  return elem
}

const ul = createAndAppend(document.body, 'ul')
for (const book of books) {
	const li = createAndAppend(ul,'li')
  createAndAppend(li, 'h1', { innerHTML: book.title })
  createAndAppend(li, 'h2', { innerHTML: book.author})
	createAndAppend(li, 'h3', { innerHTML: book.language})
	const fileName = './images/'+book.cover
  createAndAppend(li,'img',{ src:fileName, height:100})
}
// console.dir(ul)function 
