## Homework

Say you would like to write a program that doubles the odd numbers in an array and throws away the even numbers.

Your solution could be something like this:

```js
function doubleOddNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

assert(doubleOddNumbers([1,2,3,4]),[2,6], 'Message')
assert(doubleOddNumbers([4,7,1,2]),[14,22])	
```

Rewrite the above `doubleOddNumbers` function using `map` and `filter`; don't forget to use `=>`.

#### Run the tests

You can test your homework by typing this command in the terminal window:

```
node homework/test.js
```

You will see an assertion error if there is a problem.
If all is well (no errors), no output will be made.
