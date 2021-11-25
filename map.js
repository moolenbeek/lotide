const words = ["ground", "control", "to", "major", "tom"];

const assertArraysEqual = (arr1, arr2) => {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log(`true: ${arr1} === ${arr2}`);
  } else {
    console.log(`false: ${arr1} != ${arr2}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, x => x[0]);
const results2 = map(words, x => x.length)
const results3 = map(words, x => `word: ${x}`)

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(results2, [6,7,2,5,3])
assertArraysEqual(results3, ['word: ground','word: control','word: to','word: major','word: tom'])