# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @digitalm0nkey/lotide`

**Require it:**

`const _ = require('@digitalm0nkey/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: A function which returns the first item in the array.
* `tail`: A function which returns everything except for the first item in the array.
* `middle`: A function which will take in an array and return the middle-most element(s) of the given array.
* `countLetters`: A function which will be given an string and an object. It will return an object containing counts of each character that the input object listed.
* `countOnly`: A function which will be given an array and an object. It will return an object containing counts of everything that the input object listed.
* `findKey`: A function which takes in an object and a callback. It should will the object and return the first key for which the callback returns a truthy value. If no key is found, then it will return undefined.
* `findKeyByValue`: A function which takes in an object and a value. It scans the object and returns the first key which contains the given value. If no key with the given value is found, it will return undefined.
* `flatten`: A function which will take in an array of arrays and return a "flattened" version of the array.
* `letterPositions`: A function which will return all the indices (zero-based positions) in the string where each character is found.
* `map`: A function which will take in two arguments: An array to map & A callback function. The map function will return a new array based on the results of the callback function.
* `takeUntil`: A function which will take in two parameters: An array & a predicate. The function will return a "slice of the array with elements taken from the beginning." It will continue until the predicate returns a truthy value. The predicate should only be provided one value: The item in the array.
* `without`: A function which will return a subset of a given array, removing unwanted elements.