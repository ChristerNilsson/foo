assert = (flag) -> if not flag then throw 'assert error!'
print = console.log 

print 'ohja!'  
f = (a,b) -> a+b  
assert 3 == f 1,2 
assert 33 == f 11,22
