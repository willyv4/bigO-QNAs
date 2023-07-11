# BigO Notation

## BigO Notation Purpose:

The purpose of Big O notation is to provide a standardized way to communicate the efficiency or complexity of algorithms and functions.

With BigO notation there are expressions to simplify communication when comparing tradeoffs between different algorithms and functions.
We can simplify these expressions to make them easier to read and compare.

| Expressions                           | Simplified Expressions |
| :------------------------------------ | :--------------------: |
| O(100 \* n)                           |          O(n)          |
| O(25)                                 |          O(1)          |
| O(n^2 + n^3)                          |         O(n^3)         |
| O(n + n + n + n)                      |          O(n)          |
| O(1000 \_ log(n) + n)                 |          O(n)          |
| O(1000 _ n _ log(n) + n)              |     O(n \* log(n))     |
| O(2^n + n^2)                          |         O(2^n)         |
| O(5 + 3 + 1)                          |          O(1)          |
| O(n + n^(1/2) + n^2 + n \_ log(n)^10) |         O(n^2)         |

###Examples:

####`logUpTo(n)`
In the `logUpTo(n)` function, the loop iterates from 1 to n (the number passed in the function), and for each iteration, it logs the value of i. Since the loop runs exactly n times, the time it takes to execute the function grows linearly with the input size. So `logUpTo(n)` would O(n) linear time complexity.

```js
function logUpTo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}
```

####`logAtLeast10(n)`
`logAtLeast10(n)` contains a loop that iterates from 1 to the maximum value between `n` and 10. The loop executes a constant-time operation, which is the `console.log(i)` statement. Thus, the time complexity of the function is O(n + 10) because the loop will iterate `Math.max(n, 10)` times. But, in big O notation, constant terms and lower-order terms are dropped, which results in a time complexity of O(n).

```js
function logAtLeast10(n) {
  for (let i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}
```

####`logAtMost10(n)`
The function `logAtMost10(n)` contains a loop that iterates from 1 to the minimum value between `n` and 10. The loop executes a constant-time operation, which is the `console.log(i)` statement. The time complexity of the function is O(min(n, 10)) because the loop will run either `n` times if `n` is less than or equal to 10, or 10 times if `n` is greater than 10. This time complexity can be simplified to O(1) because the loop will run a constant number of times regardless of the value of `n`.

```js
function logAtMost10(n) {
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
```

####`onlyElementsAtEvenIndex(array)`

`onlyElementsAtEvenIndex(array)` function initializes an empty array (newArray). Then, it iterates over the input array. The loop runs array.length times, where array.length represents the size of the input array. Within each iteration of the loop, the function checks if the index i is even and pushes all even nums into newArray. The time taken to execute the loop is directly proportional to the size of the input array. So, the time complexity of the loop is linear in relation to the size of the array, resulting in O(n) complexity.

```js
function onlyElementsAtEvenIndex(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
```

####`vowelCount(str)`
The given code snippet initializes an empty `vowelCount` object and a string `vowels` with all the vowels. It then loops over each character in the input string, checking if it is a vowel and updating the `vowelCount` object accordingly. The loop runs for the length of the input string, resulting in a linear time complexity of O(n), where n is the size of the input string. The execution time increases linearly with the input string's size because each character is processed once.

```js
function vowelCount(str) {
  let vowelCount = {};
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      if (char in vowelCount) {
        vowelCount[char] += 1;
      } else {
        vowelCount[char] = 1;
      }
    }
  }

  return vowelCount;
}
```

### JS Method's time complexity:

`indexOf()` method in JavaScript has a linear time complexity. It performs iterations over the array to find the index of the specified input. The time taken to execute the indexOf method is directly proportional to the length of the array.

`includes()` method checks whether an array includes a specific element and returns true or false accordingly. It performs a linear search, iterating over each element in the array until a match is found or the end of the array is reached.

`forEach()` method iterates over each element of an array, applying a provided function to each element in sequential order. Since it visits each element exactly once, its time complexity is directly proportional to the length of the array, resulting in linear growth of execution time with the array's size.

`sort()` method in JavaScript typically has time complexity O(n log n) on average, where n is the length of the array. This means that as the size of the array grows, the time taken to execute the sort method increases in a near-linear fashion (O(n log n)), but not strictly linear.

`unshift()` method adds one or more elements to the beginning of an array and shifts the existing elements to higher indices. This operation requires shifting all existing elements in the array to make room for the new elements. Therefore, the time taken to execute the unshift method is directly proportional to the length of the array O(n).

`push()` method only performs a single operation to add elements to the end of the array, the time taken to execute the method does not depend on the size of the array. Regardless of the array's length, the push method executes in constant time O(1).

`splice()` method depends on the number of elements being added or removed. In the worst-case scenario, where you remove or insert elements at the beginning of the array, all subsequent elements need to be shifted. This results in a linear time complexity of O(n).

`pop()` method only performs a single operation to remove the last element, the time taken to execute the method does not depend on the size of the array. Regardless of the array's length, the pop method executes in constant time O(1).

`Object.keys()` is directly proportional to the number of enumerable properties in the object. If an object has n enumerable properties, the function will iterate over each property exactly once, resulting in a time complexity of O(n).

True or false: n^2 + n is O(n^2). True
True or false: n^2 \* n is O(n^3). True
True or false: n^2 + n is O(n). False
