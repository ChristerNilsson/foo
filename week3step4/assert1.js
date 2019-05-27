assert = require('assert').deepStrictEqual
print = console.log
print('##### begin #####') 

let sA = "hello,this,is,a,difficult,to,read,sentence"
assert(howMany(sA),42)
assert(replace(sA,","," "), "hello this is a difficult to read sentence")

let lstA = ["blowfish", "capricorn", "giraffe"]
let lstB = addOne(lstA,"turtle")
assert(lstB, ["blowfish", "capricorn", "giraffe", "turtle"])
let lstC = addOneAt(lstB,"meerkat",1)
assert(lstC, ["blowfish", "meerkat", "capricorn", "giraffe", "turtle"])

assert(howMany(lstC),5)
assert(removeAt(lstC,3),["blowfish", "meerkat", "capricorn", "turtle"])

assert(position(lstC,"meerkat"),1)
assert(removeAt(lstC, 1),["blowfish", "capricorn", "turtle"])

print('#####  end  #####') 
