assert = require('assert').deepStrictEqual
print = console.log
print('###################')
print('')

// QUESTIONS

c = []
d = []
assert(c,d)

e = [34,45]
f = [34,45]
g = {0:34, 1:45}

assert(Object.keys(f), ['0','1'])
assert(Object.keys(g), ['0','1'])
assert(Object.values(f), [34,45])
assert(Object.values(g), [34,45])
// print(e === f)
assert(e,f)
//assert(f,g)
// print(f,g)
// assert(g.length,2)
// debug!

// print([1,null,true,[],'abc',{a:4}])

// create the array a!
// insert code here
assert(a.length, 2)
assert(a[0], 3)
assert(a[1], 4)

// modify a
// insert code here
assert([3,4,5,6],a)

// modify a
// insert code here
assert([1,2,3,4,5,6],a)

// modify a
// insert code here
assert([1,2,3,'x',4,5,6],a)

// what index does 'x' have in a ?
// insert code here
assert(3,index) 

// what index does 'y' have ?
// insert code here
assert(-1,index)  

a.push(5,6)
// what index does the last 6 have ?
// insert code here
assert(8,index) 

// is 2 in a ?
// insert code here
assert(true, result) 

// Which course has the name 'js' ?
courses = []
courses.push({id:1, name:'html'})
courses.push({id:2, name:'js'})
// insert code here
assert(courses[1], course) 

// undo the changes to a
assert([1,2,3,'x',4,5,6,5,6], a)
// insert code here
assert([1,2,3,'x',4,5,6], a)
// insert code here
assert([1,2,3,4,5,6], a)
// insert code here
assert([3,4,5,6], a)
// insert code here
assert([3,4], a)

// clear a using three different methods
assert([],a) 

// call an array method
a = [1,2,3]
b = [4,5,6]
// insert code here
assert([1,2,3,4,5,6], c)

// use spread operator ... instead
a = [1,2,3]
b = [4,5,6]
// insert code here
assert([1,2,3,4,5,6], c)

a = [1,2,3]
// insert code here
assert('1:2:3',b)

words = 'This is my first sentence'
// insert code here
assert('This-is-my-first-sentence',result)

a = [5,4,1,2,1,9,4,3,7,4]
// insert code here
assert([1,1,2,3,4,4,4,5,7,9],a)

a='delta alfa bravo charlie'.split(' ')
// insert code here
assert(['alfa','bravo','charlie','delta'],a)
// insert code here
assert(['alfa','bravo','delta','charlie'],a)

a = [4,7,1,2]
// insert code here
assert([2,1,7,4],a)

a = [1,-1,2,3] 
discriminator = (x) => x >= 0
// insert code here
assert(false,result)

// insert code here
assert([1,2,3],result)

// insert code here
assert([1,1,4,9],result)

a = [1,10,20,15]
// insert code here
assert(46, result)
// insert code here
assert(3000, result)

// insert code here
assert([1,2,3,4,5], arrayFromRange(1,6))
assert([2,3,4], arrayFromRange(2,5))
assert([-10,-9,-8,-7,-6,-5,-4], arrayFromRange(-10,-3))
assert([2,4,6,8,10], arrayFromRange(2,12,2))

// insert code here
assert(true, includes([1,2,3],1))
assert(false, includes([1,2,3],0))

// insert code here 
assert([1,2], except([1,2,3,4,],[3,4]))
assert([3,4], except([1,1,2,3,4,1],[1,2]))

// insert code here
assert(1, count([1,2,3,4], 1))
assert(0, count([1,2,3,4], 5))
assert(2, count([1,2,3,4,1], 1))

// insert code here
assert(7, getMax([1,2,3,7,0]))
assert(11,getMax([11,2,3,7,0]))

// movies from 2018 with rating >= 4  
// sorted in descending rating
// return only the titles
movies = []
movies.push({title:'alfa',    year:2018, rating:4.5})
movies.push({title:'bravo',   year:2018, rating:4.7})
movies.push({title:'charlie', year:2018, rating:3})
movies.push({title:'delta',   year:2019, rating:4.5})
// insert code here
assert(["alfa","bravo"],result)

print('')
print('###################')
