// ex 1
arrayFromRange = (a,b,c=1) => null
//assert([-10,-9,-8,-7,-6,-5,-4], arrayFromRange(-10,-4))
//assert([1,2,3,4,5], arrayFromRange(1,5))
//assert([2,3,4], arrayFromRange(2,4))
//assert([2,4,6,8,10], arrayFromRange(2,10,2))

// ex 2
includes = (array,x) => null
//assert(true, includes([1,2,3],1))
//assert(false, includes([1,2,3],0))

// ex 3
except = (a,b) => null
//assert([3,4], except([1,1,2,3,4,1],[1,2]))

// ex 5
//count = (arr,x) => null
//assert(1, count([1,2,3,4], 1))
//assert(0, count([1,2,3,4], 5))
//assert(2, count([1,2,3,4,1], 1))

// ex 6
getMax = (arr) => null
//assert(7, getMax([1,2,3,7,0]))
//assert(11,getMax([11,2,3,7,0]))

// ex 7
// movies from 2018 with rg>=4 
// sorted in desc rg
// titles only
movies = []
movies.push({t:'a', yr:2018, rg:4.5})
movies.push({t:'b', yr:2018, rg:4.7})
movies.push({t:'c', yr:2018, rg:3})
movies.push({t:'d', yr:2019, rg:4.5})
