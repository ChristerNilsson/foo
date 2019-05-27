assert = require('assert').deepStrictEqual
print = console.log
print('##### begin #####') 

// 1.Create a function that takes 3 arguments and returns the sum of the these arguments.
assert(sum3(23,4,5),32)

// 2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
assert(colorCar('red'), 'a red car')

// 3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
assert(showProps({a:1, b:1}), 'a:1, b:1')

// 4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
assert(vehicleType('blue',2), 'a blue motorbike')

// 5. Can you write the following without the if statement, but with just as a single line with console.log(...);?
assert(f(3===3),'yes')
assert(f(3===5),'no')

// 6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
assert(vehicle('blue',1,0), 'a blue new car')
assert(vehicle('blue',1,5), 'a blue used car')

// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
lst = ["car"," motorbike", "caravan", "bike"]

// 8. How do you get the third element from that list?
assert(getItem(lst,3), 'bike')

// 9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".
assert(vehicle('green',3,1), 'a green new bike')

// 10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
// Hint, the output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.
assert(advertise(lst),"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.")

// 11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
assert(advertise(lst),"Amazing Joe's Garage, we service cars, motorbikes, caravans, bikes and skateboards.")

// 12. Create an empty object.
obj = {}

// 13. Create an object that contains the teachers that you have had so far for the different modules.
obj.teachers = ['Christer','Ina','Max','Gabe']

// 14. Add a property to the object you just created that contains the languages that they have taught you.
obj.languages = ['Javascript']

// 15. Write some code to test two arrays for equality using == and ===. Test the following:
// What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
// Don't cheat! Seriously - try it first.
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
assert(x==y,?)
assert(x===y,?)
assert(z==y,?)
assert(z==x,?)

// Check out this Fiddle. You need to open your browser’s Developer Tools to see the console output. 
// Press the Run button in the upper right corner to run the code.
// More insights from this Stack Overflow question.

function same(a,b){
    var same = a.length === b.length,
        result,
        len;
    if(!same) { result = false }
    else {
        // so far, they're the same
        result = true;
        len = a.length;
        for(var i=0;result !== false && i < len; i++) {
            if(a[i] !== b[i]) {
                result = false;
            }
        }
    }
    
    return result;
}

var array1 = [4,8,9,10];
var array2 = [4,8,9,10];
assert(same(array1, array2),?);

// 16. Take a look at the following code:

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
// Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
o2.foo = 'bar2'
assert(o3, ?)
o1.foo = 'bar3'
assert(o3, ?)

// Does the order that you assign (o3 = o2 or o2 = o3) matter?

// 17. What does the following code return? (And why?)

let bar = 42
assert(typeof bar, ?)
assert(typeof typeof bar, ?)

print('#####  end  #####') 
