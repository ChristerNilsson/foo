assert = require('assert').deepStrictEqual
print = console.log
print('###################') 

// 1. Write a console.log statement saying "Hello World!" for each language that you know.
// For example:
// Halo, dunia! // Indonesian
// Ciao, mondo! // Italian
// Hola, mundo! // Spanish
print('Hej, värld!')
print('Hallo, world!')
print('Hallo, Welt!')

// 2. Consider the following code:
// console.log('I'm awesome');
// Copy the code in your .js file and run it. You will see that you will get a SyntaxError. 
// Find a solution for this error. 
// Hint: read the error message carefully, it also gives an indication of where the problem is.
console.log("I'm awesome")

// 3. Declare a variable x and initialize it with an integer, using these exact steps:
// 3.1 First, declare your variable x (do not initialize it yet).
let x
// 3.2 Add a console.log statement that explains in words what you think the value of x is, like in this example:
// // TODO -> here you initialize your variable
assert(undefined,x)
// 3.3 Add a console.log statement that logs the value of x.
// 3.4 Now initialize your variable x with an integer.
x=1
// 3.5 Next, add a console.log statement that explains what you think the value of x is.
assert(1,x)
// 3.6 Add a console.log statement that logs the value of x.
// Steps to be taken:
// // TODO -> here you declare your variable
// console.log("the value of x will be: whateverYouThinkItWillLog");
// // TODO -> log the actual value of x
// // TODO -> here you initialize your variable
// console.log("the value of x will be: whateverYouThinkItWillLog");
// // TODO -> log value of x again

// 4. Declare a variable y and assign a string to it.
let y = 'adam'
// 4.1 Write a console.log statement in which you explain in words what you think the value of the string is.
assert('adam',y)
// 4.3 Now assign a new string to the variable y.
y = 'bertil'
// 4.4 Just like what you did before write a console.log statement that explains in words what you think will be logged to the console.
assert('bertil',y)
// 4.5 Now console.log y again.
// // TODO -> here you declare AND assign your string
// console.log("the value of my string will be: whateverYouThinkItWillLog");
// // TODO -> log the actual value of the string to the console
// // TODO -> assign a new value to your variable x
// console.log("the value of my string will be: whateverYouThinkItWillLog");
// // TODO -> log the actual value of the string to the console

// 5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?
assert(7,Math.round(7.25))
// 5.1 Declare a variable z and assign the number 7.25 to it.
z = 7.25
// 5.2 console.log z.
// 5.3 Declare another variable a that has the value of z but rounded to the nearest integer.
a = Math.round(z)
// 5.4 console.log a.
// 5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
// 5.6 console.log the highest value.
assert(7.25,Math.max(a,z))

// 6. Arrays
// 6.1 Declare an empty array. 
buttons = []
// Make sure that the name you choose indicates 'plurality', 
// because an array is capable of containing more than one element. (See Naming conventions).
// 6.2 Write a console.log statement that explains in words what you think the value of the array is.
// EMPTY
// 6.3 console.log your array.
assert([], buttons)
// 6.4 Create an array that has your favorite animals inside 
animals = ['cat','dog']
// (see if you can find a good name that exactly describes what this variable will hold).
// 6.5 Log your array.
// 6.6 Add a statement that adds Daan's favorite animal ('baby pig') to the existing array.
animals.push('baby pig')
// 6.7 Log your new array!
assert(['cat','dog','baby pig'], animals)

// 7. More strings
// Let's consider the following string: 
let myString = "this is a test"
// 7.1 Add the string to your file and console.log it.
// 7.2 Find a way to get the length of myString.
// 7.3 console.log the length of myString.
assert(14,myString.length)

// 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
f = (a,b) => typeof a == typeof b ? 'SAME TYPE' : 'DIFFERENT'
// 8.1 First declare at least four variables and assign them different data types.
a = 1
b = 'b'
c = {}
d = []
assert('DIFFERENT',f(a,b))
assert('DIFFERENT',f(b,c))
assert('SAME TYPE',f(c,d))
assert('DIFFERENT',f(d,a))
// 8.2 For each variable write a console.log statement that logs the value
let foo = 3;
assert("The value of my variable foo is: 3", "The value of my variable foo is: " + foo)
// (Curious to know what a foo is? Check this article on Wikipedia.)
// 8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
// 8.4 Now use typeof to log the actual type of your variables.
// 8.5 Now compare the types of your different variables with one another.
// 8.6 Make sure to also show a message when the variables you are comparing are not the same type.
// For example:
// let x = 9;
// let y = 'Hello';
// if (...) {
//     console.log('SAME TYPE');
// }
// // TODO -> add a way of giving feedback if your variables don't have the same type

// 9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
x = 7
x = x % 3
assert(1,x)
// 9.1 Add at least 3 console.log statements in which you show that you understand what % does.
assert(1,7%2)
assert(0,8%2)
assert(1,9%2)

// 10. Write a program to answer the following questions:
// 10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
a = [1,'a']
// 10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
assert(true, 6/0 === 10/0)
// 10.3 Add console.log statements to the above program in which you show that you understand the concepts (just like you've done in the above assignments).
assert(Infinity, 6/0)
assert(Infinity, 10/0)

print('###################') 
