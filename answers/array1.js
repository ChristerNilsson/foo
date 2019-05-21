assert = require('assert').deepStrictEqual
print = console.log
print('###################') 
print('')

// ANSWERS 

assert(1,1)
// assert('1',1)   

c = [] 
d = []
assert(c,d)

e = [34,45]
f = [34,45]
g = {'0':34, '1':45}

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

a = [3,4] //
assert(a.length, 2)
assert(a[0], 3)
assert(a[1], 4)

a.push(5,6) //
assert([3,4,5,6],a)

a.unshift(1,2) //
assert([1,2,3,4,5,6],a)

a.splice(3,0,'x') //
assert([1,2,3,'x',4,5,6],a)

index = a.indexOf('x') //
assert(3,index) // what index does 'x' have in a ?

index = a.indexOf('y') //
assert(-1,index)  // what index does 'y' have ?

a.push(5,6)
index = a.lastIndexOf(6) //
assert(8,index) // what index does the last 6 have ?

result = a.includes(2)  //
assert(true, result) // is 2 in a ?

courses = [{id:1, name:'html'},{id:2, name:'js'}] 
course = courses.find((course) => course.name == 'js') //
assert(courses[1], course) // Which course has the name 'js' ?

assert([1,2,3,'x',4,5,6,5,6], a)
a.pop() //
a.pop() //
assert([1,2,3,'x',4,5,6], a)
a.splice(3,1) //
assert([1,2,3,4,5,6], a)
a.shift() //
a.shift() //
assert([3,4,5,6], a)
a.pop() //
a.pop() //
assert([3,4], a)

// clear, three methods
a = [] //
a.splice(0) //
a.length = 0 //
assert([],a) 

// call an array method
a = [1,2,3]
b = [4,5,6]
c = a.concat(b) //
assert([1,2,3,4,5,6], c)

// use spread operator ...
a = [1,2,3]
b = [4,5,6]
c = [...a, ...b] //
assert([1,2,3,4,5,6], c)

a = [1,2,3]
b = a.join(':') //
assert('1:2:3',b)

words = 'This is my first sentence'
result = words.split(' ').join('-') //
assert('This-is-my-first-sentence',result)

a = [5,4,1,2,1,9,4,3,7,4]
a.sort() //
assert([1,1,2,3,4,4,4,5,7,9],a)

a='delta alfa bravo charlie'.split(' ')
a.sort() //
assert(['alfa','bravo','charlie','delta'],a)
a.sort((a,b) => a.length - b.length) //
assert(['alfa','bravo','delta','charlie'],a)

a = [4,7,1,2]
a.reverse() //
assert([2,1,7,4],a)

a = [1,-1,2,3] 
discriminator = (x) => x >= 0
result = a.every(discriminator) //
assert(false,result)

result = a.filter(discriminator) //
assert([1,2,3],result)

result = a.map((x) => x*x) //
assert([1,1,4,9],result)

a = [1,10,20,15]
result = a.reduce(((acc,x) => acc+x), 0) //
assert(46, result)
result = a.reduce(((acc,x) => acc*x), 1) //
assert(3000, result)

arrayFromRange = (a,b,c=1) => { //
	let res = [];
	for (let i=a; i<b; i+=c) {
		res.push(i)
	}
	return res
}

assert([1,2,3,4,5], arrayFromRange(1,6))
assert([2,3,4], arrayFromRange(2,5))
assert([-10,-9,-8,-7,-6,-5,-4], arrayFromRange(-10,-3))
assert([2,4,6,8,10], arrayFromRange(2,12,2))

includes = (array,x) => { //
	for (let item of array) {
		if (item===x) return true
	}
	return false
}
assert(true, includes([1,2,3],1))
assert(false, includes([1,2,3],0))

except = (a,b) => { //
	result = []
	for (item of a) {
		if (!b.includes(item)) {
			result.push(item)
		}
	}
	return result
} 
assert([1,2], except([1,2,3,4,],[3,4]))
assert([3,4], except([1,1,2,3,4,1],[1,2]))

count = (arr,x) => { //
	result=0
	for (let item of arr)
		if (item===x) result++
	return result
}
assert(1, count([1,2,3,4], 1))
assert(0, count([1,2,3,4], 5))
assert(2, count([1,2,3,4,1], 1))

getMax = (arr) => { //
	result = arr[0]
	for (let item of arr)
		if (item > result) result = item
	return result
}
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
result = movies //
	.filter((movie) => movie.year == 2018)
	.filter((movie) => movie.rating >= 4)
	.sort((a,b) => a.rating - b.rating)
	.map((movie) => movie.title)
assert(["alfa","bravo"],result)

print('') 
print('###################')
