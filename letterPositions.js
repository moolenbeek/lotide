const assertArraysEqual = (arr1, arr2) => {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    console.log(`true: ${arr1} === ${arr2}`);
  } else {
    console.log(`false: ${arr1} != ${arr2}`);
  }
};

const letterPositions = (sentence) => {
  const output = {};
  let arr = [];
  let index = -1;
  
  const text = sentence;

  for (const letter of text) {
    index++;
    if (!arr.includes(letter) && letter !== ' ') {
      arr.push(letter);
      output[letter] = [];
      output[letter].push(index);
    } else if (letter !== ' ') {
      output[letter].push(index);
    }
  }

  return output;
};

console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);