assert = (flag) => {if (!flag) {throw 'assert error!';}}
print = console.log 

f = (a,b) => a+b 
a = 11/0 
print(a) 
assert(f(1,2) == 3) 
assert(f(11,22) == 33)
