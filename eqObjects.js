const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};

let object1key = [];
let object2key = [];

let object1entries = [];
let object2entries = [];


const eqObjects = function(object1, object2) {
  object1key = JSON.stringify(Object.keys(object1).sort());
  object2key = JSON.stringify(Object.keys(object2).sort());

  object1entries = JSON.stringify(Object.entries(object1).sort());
  object2entries = JSON.stringify(Object.entries(object2).sort());
  
  if (object1key === object2key && object1entries === object2entries) {
    return true;
  } else {
    return false;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

// eqObjects(ab, ba)

assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };

// eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, abc), false); // => false