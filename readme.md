# Array.prototype.findIndex ES6 polyfill for ES5 versions and lower. 
> Array.prototype.findIndex ES6 polyfill for ES5 versions and lower via NPM,
> you only need to require the module in order to have it working in
> order to use knowing that is going to work in browsers that does not
> support this function natively.

[![Build Status](https://travis-ci.org/jsPolyfill/Array.prototype.findIndex.svg?branch=master)](https://travis-ci.org/jsPolyfill/Array.prototype.findIndex) - 
Based from [Mozilla polyfill](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex).


# Installation.

1. Require the `npm` module.

```js
npm install --save-dev jspolyfill-array.prototype.findIndex
```

2. Include the file before the usage.

Then you need to require the file on your `main.js` or where you are
going to plan to use the `find` function as follows:  

```js
require("jspolyfill-array.prototype.findIndex")
```

# Usage

```js
arr.findIndex(callback[, thisArg])
```

Where `arr` is your array.

- `callback` Function to execute on each value in the array, taking three arguments:
  - `element` The current element being processed in the array.
  - `index` The index of the current element being processed in the array.
  - `array` The array findIndex was called upon.
- `thisArg` Optional. Object to use as `this` when executing callback.

The callback passed as a parameter inside of the `findIndex` function is
fired every time per each element inside of the array until finds an
element where the callback evaluates to `true`.  

It returns the index of the first match otherwise if no match is found it will return `-1`.  

For more information [click here](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex#Syntax).
