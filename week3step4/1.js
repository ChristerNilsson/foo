assert = require('assert').deepStrictEqual
print = console.log
print('###################') 

// Consider the following string:

let myString = "hello,this,is,a,difficult,to,read,sentence";
// 1.1 Add the string to your file and log it.
print(myString)
// 1.2 Log the length of myString.
assert(42,myString.length)
// 1.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.
assert("hello this is a difficult to read sentence", myString.split(',').join(' '))
// 1.4 Log myString to see if you succeeded.
print('###################') 
