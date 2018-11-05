var memoizeOne = require("memoize-one")

// Add function
const add = (a, b) => {
  console.log('add called with params (' + a + ', ' + b + ')');
  return a + b;
}

const memoizedAdd = memoizeOne(add);

// Run for first time with these params
res1 = memoizedAdd(1, 2);
console.log('Result 1: ' + res1);

// Returned from cache (function won’t log)
res2 = memoizedAdd(1, 2);
console.log('Result 2: ' + res2);

// Run with new params (function will log)
res3 = memoizedAdd(2, 4);
console.log('Result 3: ' + res3);

// Returned from cache (function won’t log)
res4 = memoizedAdd(2, 4);
console.log('Result 4: ' + res4);

// Result no longer cached
res5 = memoizedAdd(1, 2);
console.log('Result 5: ' + res5);