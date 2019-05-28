assert = require('assert').deepStrictEqual
print = console.log
print('##### begin #####') 

// ANSWERS   

//// How does assert work?   
//assert(1+2, 12)   
assert('1'+'2', '12')   
assert(1+2, 3) 

//// Grow the list 
a = [3,4] //
//// INSERT CODE HERE
assert(a.length, 2)
assert(a[0], 3)
assert(a[1], 4)
a.push(5,6) //
//// INSERT CODE HERE
assert([3,4,5,6],a)
a.unshift(1,2) //
//// INSERT CODE HERE
assert([1,2,3,4,5,6],a)
a.splice(3,0,'x') //
//// INSERT CODE HERE
assert([1,2,3,'x',4,5,6],a)

//// At what position is a 'x'?
index = a.indexOf('x') //
//// INSERT CODE HERE
assert(3,index) 

//// At what position is a 'y'?
index = a.indexOf('y') //
//// INSERT CODE HERE
assert(-1,index)  

a.push(5,6)
index = a.lastIndexOf(6) //
//// INSERT CODE HERE
assert(8,index) 

//// Is a specific element in the list ?
result = a.includes(2)  //
//// INSERT CODE HERE
assert(true, result) 

//// Shrink the list
assert([1,2,3,'x',4,5,6,5,6], a)
a.pop() //
a.pop() //
//// INSERT CODE HERE
assert([1,2,3,'x',4,5,6], a)
a.splice(3,1) //
//// INSERT CODE HERE
assert([1,2,3,4,5,6], a)
a.shift() //
a.shift() //
//// INSERT CODE HERE
assert([3,4,5,6], a)
a.pop() //
a.pop() //
//// INSERT CODE HERE
assert([3,4], a)

 //// What id has the course wthe the name 'js' ?
courses = []
courses.push({id:1, name:'html'})
courses.push({id:2, name:'js'})
course = courses.find((course) => course.name == 'js') //
//// INSERT CODE HERE
assert(2, course.id)

//// clear the list with three different methods
a = [] //
a.splice(0) //
a.length = 0 //
//// INSERT CODE HERE
//// INSERT CODE HERE
//// INSERT CODE HERE
assert([],a) 

//// Merge two smaller lists to a bigger list with two different methods
a = [1,2,3]
b = [4,5,6]
c = a.concat(b) //
//// INSERT CODE HERE  (with an Array method)
//// INSERT CODE HERE  (with the spread operator ...)
assert([1,2,3,4,5,6], c) 

//// Use the join method
a = [1,2,3]
b = a.join(':') //
//// INSERT CODE HERE
assert('1:2:3',b) 

//// Use split and join
words = 'This is my first sentence'
result = words.split(' ').join('-') //
//// INSERT CODE HERE
assert('This-is-my-first-sentence',result)

//// Sort alphabetically
a = [5,4,12,1,9,4,3,7,4] 
a.sort() //
assert([1,12,3,4,4,4,5,7,9],a) 

//// Sort numerically
a = [5,4,12,1,9,4,3,7,4] 
a.sort((a,b) => a-b) //
assert([1,3,4,4,4,5,7,9,12],a) 

//// Sort alphabetically
a = 'delta alfa bravo charlie'.split(' ')
a.sort() //
//// INSERT CODE HERE
assert(['alfa','bravo','charlie','delta'],a)

//// Sort in number of characters
a.sort((a,b) => a.length - b.length) //
//// INSERT CODE HERE
assert(['alfa','bravo','delta','charlie'],a)

//// Which array method ?
a = [4,7,1,2]
a.reverse() //
//// INSERT CODE HERE
assert([2,1,7,4],a)

//// Complete the function using a loop
arrayFromRange = (a,b,c=1) => { 
	let res = []; //
	for (let i=a; i<b; i+=c) {
		res.push(i)
	}
	return res
}
//// INSERT CODE HERE
assert([1,2,3,4,5], arrayFromRange(1,6))
assert([2,3,4], arrayFromRange(2,5))
assert([-10,-9,-8,-7,-6,-5,-4], arrayFromRange(-10,-3))
assert([2,4,6,8,10], arrayFromRange(2,12,2))

//// Complete the function using a loop
includes = (array,x) => { 
	for (let item of array) { //
		if (item===x) return true
	}
	return false
}
//// INSERT CODE HERE
assert(true, includes([1,2,3],1))
assert(false, includes([1,2,3],0))

//// Complete the function using a loop
except = (a,b) => { 
	result = [] //
	for (item of a) {
		if (!b.includes(item)) {
			result.push(item)
		}
	}
	return result 
} 
//// INSERT CODE HERE
assert([1,2], except([1,2,3,4,],[3,4]))
assert([3,4], except([1,1,2,3,4,1],[1,2]))

//// Complete the function using a loop
count = (arr,x) => { 
	result=0 //
	for (let item of arr)
		if (item===x) result++
	return result
}
//// INSERT CODE HERE
assert(1, count([1,2,3,4], 1))
assert(0, count([1,2,3,4], 5))
assert(2, count([1,2,3,4,1], 1))

//// Complete the function using a loop
getMax = (arr) => { 
	result = arr[0] //
	for (let item of arr)
		if (item > result) result = item
	return result
}
//// INSERT CODE HERE
assert(7, getMax([1,2,3,7,0]))
assert(11,getMax([11,2,3,7,0]))

//// Make a function using an array method
f = (a,discriminator) => a.every(discriminator) //
//// INSERT CODE HERE
assert(false,f([1,-1,2,3], (x) => x >= 0))
assert(true,f([1,0,2,7,3], (x) => x >= 0))

//// Make a function using an array method
f = (a,discriminator) => a.filter(discriminator) //
//// INSERT CODE HERE
assert([0,1,2,3],f([-2,-1,0,1,2,3], (x) => x >= 0))
assert([1,2,3],f([1,2,3], (x) => x >= 0))
assert([],f([-1,-2,-3], (x) => x >= 0))

//// Make two functions f and g
f = (a,g) => a.map(g) //
//// INSERT CODE HERE
g = (x) => x*x //
//// INSERT CODE HERE
assert([1,1,4,9],f([1,1,2,3], g))
assert([1,1,4,49],f([-1,-1,2,-7], g))

//// add the numbers using reduce
f = (a) => a.reduce(((acc,x) => acc+x), 0) //
//// INSERT CODE HERE
assert(46, f([1,10,20,15]))

//// multiply the numbers using reduce
f = (a) => a.reduce(((acc,x) => acc*x), 1) //
//// INSERT CODE HERE
assert(3000, f([1,10,20,15]))

//// Use filter, sort and map
// movies from 2018 with rating >= 4  
// sorted in descending rating
// returning the titles
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
//// INSERT CODE HERE
assert(["alfa","bravo"],result)

//// Compare Array and Objects
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

//// Look at this tree in the debugger
//print([1,null,true,[],'abc',{a:4, b:7}])

print('#####  end  #####')
