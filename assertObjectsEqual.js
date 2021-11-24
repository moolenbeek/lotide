let object1key = [];
let object2key = [];

let object1entries = [];
let object2entries = [];

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;

  object1key = JSON.stringify(Object.keys(actual).sort());
  object2key = JSON.stringify(Object.keys(expected).sort());

  object1entries = JSON.stringify(Object.entries(actual).sort());
  object2entries = JSON.stringify(Object.entries(expected).sort());
  
  if (object1key === object2key && object1entries === object2entries) {
    console.log("\x1b[32m%s\x1b[0m", `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return true;
  } else {
    console.log("\x1b[31m%s\x1b[0m", `🛑🛑🛑 Assertion Failed: ${inspect(actual)} != ${inspect(expected)}`);
    return false;
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });