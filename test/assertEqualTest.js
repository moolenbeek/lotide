const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


// assertEqual test
console.log('\n test asssert equal');
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


// head test
console.log('\n test head');
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


// test tail
// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// Test Case 2: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


// test eqArrays
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS


// test assertArraysEqual
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false