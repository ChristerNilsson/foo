'use strict'

// const titles = [
//   'harry_potter_chamber_secrets',
//   'alchemist', 
//   'paula',
//   'orlando',
//   'divine-comedy',
//   'the-odyssey',
// ];

let books = [
  {
    title :"Harry Potter Chamber of Secrets",
    language:"english",
    author:"Joanne K. Rowling",
  },
  {
    title:"Alchemist",
    language:"english",
    author:"paulo-co",
  },
  { 
    title:"Paula", 
    language:"english",
    author:"isabel allende",
  },
  {
      title:"Orlando",
      language:"english",
      author:"virginia-wolf",
  },
  {
    title:"Divine Comedy",
    language:"English",
    author:"dante",
  },
  {
    title:"The Odyssey",
    language: "english",
    author:"Homeros",
  },
]

function createAndAppend(parent,typ,attributes={}) {
	const elem = document.createElement(typ)
	parent.appendChild(elem)
	for (const key in attributes)
    	elem[key] = attributes[key]	
  return elem
}

const ul = createAndAppend(document.getElementById('root'), 'ul', {})

for (const book of books) {
	console.log(book)
	createAndAppend(ul, 'li', {value : 'Book', innerHTML: book.title})
}


  



// in -> key
// of -> value