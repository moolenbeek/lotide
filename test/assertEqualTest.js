const assertEqual = require('../assertEqual');
const head = require('../head');

// assertEqual test
console.log('\n test asssert equal');
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// head test
console.log('\n test head');
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");