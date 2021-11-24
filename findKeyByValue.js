const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};

const findKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);