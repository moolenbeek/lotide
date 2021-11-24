const assertArraysEqual = (arr1, arr2) => {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log(`true: ${arr1} === ${arr2}`);
  } else {
    console.log(`false: ${arr1} != ${arr2}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return true;
  } else {
    return false;
  }
};

const flatten = (arr) => {
  let newArr = [];
  let newArrIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        newArr[newArrIndex] = arr[i][j];
        newArrIndex++;
      }
    } else {
      newArr[newArrIndex] = arr[i];
      newArrIndex++;
    }
  }
  return newArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => true: 1,2,3,4,5,6 === 1,2,3,4,5,6
console.log(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])); // => true
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]