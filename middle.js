const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return true;
  } else {
    return false;
  }
};

const middle = (arr) => {
  if (!arr.length) {
    return;
  }
    
  const mid = arr.length / 2;
  if (arr.length % 2 === 1) {
    return arr[Math.floor(mid)];
  } else {
    return [
      arr[mid - 1],
      arr[mid],
    ];
  }
};

// TEST
middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]