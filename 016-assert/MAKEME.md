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

If all is well (no errors), no output will be made.

You will see an assertion error if there is a problem.

```
PS C:\github\foo\016-assert> node homework/test.js

C:\github\node_modules\chai\lib\chai\assertion.js:141
      throw new AssertionError(msg, {
      ^
AssertionError: expected [ 14, 2 ] to deeply equal [ 14, 22 ]
    at Object.<anonymous> (C:\github\foo\016-assert\homework\map-filter.js:9:1)
    at Module._compile (module.js:624:30)
    at Object.Module._extensions..js (module.js:635:10)
    at Module.load (module.js:545:32)
    at tryModuleLoad (module.js:508:12)
    at Function.Module._load (module.js:500:3)
    at Module.require (module.js:568:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (C:\github\foo\016-assert\homework\test.js:1:63)
    at Module._compile (module.js:624:30)
PS C:\github\foo\016-assert>
```

