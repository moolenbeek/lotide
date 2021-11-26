const assertArraysEqual = (arr1, arr2) => {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log(`true: ${arr1} === ${arr2}`);
  } else {
    console.log(`false: ${arr1} != ${arr2}`);
  }
};

const takeUntil = function(array, callback) {
  let result = [];

  for (item of array) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])