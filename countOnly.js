const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = (allItems, itemsToCount) => {
  let key = '';
  let value;
  let output = {};
  
  for (const element in itemsToCount) {
    
    key = element;
    value = itemsToCount[element];
    
    let counter = 0;

    if (value) {
      // console.log(`${key}: ${value}`);
      
      for (const string of allItems) {
        if (string === key) {
          counter++;
          output[key] = counter;
        }
      }
    }

    
  }
  return output;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// TEST
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);