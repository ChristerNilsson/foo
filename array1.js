
assert = require('assert')
print = console.log
print('###################')

assert.equal(1,1)

a = 3
b = a

assert.deepEqual(a,b)
//assert.deepEqual([3,4],a)

//a.push(5,6)
//assert.deepEqual([3,4,5,6],a)

// a.unshift(1,2)
// assert([1,2,3,4,5,6],a)

// a.splice(3,0,'x')
// assert([1,2,3,'x',4,5,6],a)

// index = a.indexOf('x') // what index does 'x' have in a ?
// assert(3,index)

// index = a.indexOf('y') // what index does 'y' have ?
// assert(-1,index)

// index = a.lastIndexOf(6) // what index does 6 have ?
// assert(6,index)

// result = a.includes(2) // is 2 in a ?
// assert(true,result)

// courses = [{id:1, s:'a'},{id:2, s:'b'}] // Vilken kurser har namnet 'a' ?
// course = courses.find((course) => course.s == 'a')
// assert(courses[0], course)

// // Återställ array a
// a.splice(3,1)
// assert([1,2,3,4,5,6], a)

// a.shift()
// a.shift()
// assert([3,4,5,6], a)

// a.pop()
// a.pop()
// assert([3,4], a)

// // Rensa a, 3 metoder
// a.splice(0)
// a.length = 0
// a = []
// assert([],a)

// // concat
// a = [{id:1},2,3]
// b = [4,5,6]
// c = a.concat(b)
// assert([{id:1},2,3,4,5,6], c)

// d = c.slice()
// c[0].id = 10
// assert([{id:10},2,3,4,5,6], c)
// assert([{id:10},2,3,4,5,6], d)
// c[0] = 12
// assert([12,2,3,4,5,6], c)
// assert([{id:10},2,3,4,5,6], d)

// // spread operator ...
// a = [1,2,3]
// b = [4,5,6]
// c = [...a, ...b] 
// assert([1,2,3,4,5,6], c)

print('ok')
print('###################')
