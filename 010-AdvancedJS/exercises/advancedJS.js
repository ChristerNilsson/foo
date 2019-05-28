const fetch = require('node-fetch') // https://www.npmjs.com/package/node-fetch
assert = require('assert').deepStrictEqual
range = require('lodash').range 
print = console.log
print('##########') 
 
//// Default parameters 
f = (x,y=10) => [x,y]
assert([1,10], f(1)) 
 
//// Template Literals
let first = 'Christer' 
let last = 'Nilsson'
assert('Your name is Christer Nilsson', `Your name is ${first} ${last}`)

//// Multi-line strings
const s = `alfa
bravo`
assert('alfa\nbravo',s)

//// Destructuring Object
const person = {firstName:'Christer', lastName:'Nilsson'}
let {firstName, lastName} = person // firstName and lastName must be undefined
assert('Christer',first)
assert('Nilsson',last)

//// Destructuring Array
let [latitude, longitude] = [59,18] // latitude and longitude must be undefined
assert(59,latitude)
assert(18,longitude)

//// Arrow Functions
add = (a,b) => a+b
assert(5,add(2,3))

assert([], range(0))
assert([0], range(1))
assert([0,1,2,3,4], range(5))
assert([5,6,7,8,9], range(5,10))
assert([0,2,4,6,8], range(0,10,2))
assert([10,9,8,7,6], range(10,5))
assert([-1,-2,-3,-4], range(-1,-5))
assert([-2,-1,0,1,2], range(-2,3))

// old for loop
result = 0
for (let i=0; i<10; i++) result += i
assert(45,result)

items = [5,4,1,2,1,9,4,3,7,4]
result = 0
for (let i=0; i<10; i++) result += items[i]
assert(40,result)

//// range

result = 0
for (let i in range(10)) result += i // AVOID!
assert('00123456789',result)

obj = {a:10, b:20, c:30}
result = ''
for (let key in obj) result += key
assert('abc',result)

obj = {a:10, b:20, c:30}
result = 0
for (let key in obj) result += obj[key]
assert(60,result) 

result = 0
for (let item of range(10)) result += item
assert(45,result)

result = 0
for (let item of [10,20,30]) result += item
assert(60,result)

result = 0
range(10).forEach((item) => result += item)
assert(45,result)

//// spread operator ...
a = [10,20,30]
b = [40,50,60]
assert([10,20,30,40,50,60], [...a, ...b])

//// Set
const set1 = new Set([1, 2, 3, 4, 5])
assert(true, set1.has(5))
assert(false, set1.has(6))
assert(5,set1.size)
set1.add(10)
assert(6, set1.size)
set1.delete(3)
assert(new Set([1,2,4,5,10]), set1)
set1.clear()
assert(0, set1.size)

//// fetch
fetch('https://raw.githubusercontent.com/ChristerNilsson/vscode-foo/master/.vs/VSWorkspaceState.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    //print(JSON.stringify(myJson));
    //print(myJson);
  });

//// Promises 
// var wait1000 =  new Promise( (resolve, reject) => {
//   setTimeout(resolve, 10) // ms
// }).then( () => {
//   print('Yay!')
// })

// var wait1000 = () => new Promise((resolve, reject)=> {setTimeout(resolve, 1000)})
 
// wait1000()
//   .then( () => {
//     print('Yay!')
//     return wait1000()
//   }) 
//   .then( () => {
//     print('Wheeyee!')
//   })


print('##########')
