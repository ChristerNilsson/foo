const assert = chai.assert.deepStrictEqual
const range = _.range
const print = console.log
print('##### begin #####')

// 1. Create a function that takes 3 arguments and returns the sum of the these arguments.
f = (a,b,c) => a+b+c
assert(6,f(1,2,3))

// 2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
colorCar = (color) => `a ${color} car`
assert('a red car',colorCar('red'))

// 3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
f = (obj) => JSON.stringify(obj)
assert('{"a":1,"b":1}',f({a:1,b:1}))

// 4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
vehicleType = (color,code) => `a ${color} ${code==1?'car':'motorbike'}`
assert('a blue motorbike', vehicleType("blue", 2))
//'a blue motorbike' for example when called as vehicleType("blue", 2)

// 5. Can you write the following without the if statement, but with just as a single line with console.log(...);?
// if (3 === 3) {
//   console.log("yes");
// } else {
//   console.log("no");
// }
assert('yes',3===3 ? 'yes' : 'no')
assert('no',3===4 ? 'yes' : 'no')

// 6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
// Missing spec

// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
vehicles = ["motorbike", "caravan", "bike"]

// 8. How do you get the third element from that list?
third = vehicles[2]

// 9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
vehicle = (color,type,age) => `a ${color} ${age<5?'new':'old'} ${vehicles[type-1]}`
assert("a green new bike", vehicle("green", 3, 1))

// 10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
// Hint, the output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.
f = (vehicles) => {
	result = "Amazing Joe's Garage, we service "
	for (i of range(vehicles.length)) {
		result += vehicles[i]
		if (i < vehicles.length-2) {
			result += 's, '
		} else if (i==vehicles.length-2) {
			result += 's and '
		} else {
			result += 's.'
		}
	}
	return result
}
assert(f(["car", "motorbike", "caravan", "bike"]),"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.")

// 11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
assert(f(["car", "motorbike", "caravan", "bike", 'boat']),"Amazing Joe's Garage, we service cars, motorbikes, caravans, bikes and boats.")

// 12. Create an empty object.
obj = {}

// 13. Create an object that contains the teachers that you have had so far for the different modules.
obj = {teachers : {html:'Adam', js:'Christer'}}

// 14. Add a property to the object you just created that contains the languages that they have taught you.
obj = {teachers : {html:'Adam', js:'Christer'}, languages:['Javascript']}

// 15.Write some code to test two arrays for equality using == and ===. Test the following:
// What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
// Don't cheat! Seriously - try it first.
let x = [1, 2, 3]
let y = [1, 2, 3]
let z = y
assert(false, x==y)
assert(false, x===y)
assert(true, z==y)
assert(false, z==x)

// Check out this Fiddle. http://jsfiddle.net/jimschubert/85M4z/
// You need to open your browser’s Developer Tools to see the console output. 
// Press the Run button in the upper right corner to run the code.

// More insights from this Stack Overflow question. 
// https://stackoverflow.com/questions/22395357/how-to-compare-two-arrays-are-equal-using-javascript
// MY COMMENT: This has to be a recursive function.

// 16. Take a look at the following code:
let o1 = { foo: "bar" }
let o2 = { foo: "bar" }
let o3 = o2;
// Show that changing o2 changes o3 (or not) 
o2.foo = 'crap'
assert('crap', o3.foo)
// Show that changing o1 changes o3 (or not).
o1.foo = 'quack'
assert('crap', o3.foo)

// Does the order that you assign (o3 = o2 or o2 = o3) matter?

// 17. What does the following code return? (And why?)
let bar = 42;
assert('string', typeof typeof bar)

print('###################') 
