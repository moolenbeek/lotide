const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  }
};

const countLetters = (data) => {
  const text = data.replace(/\s+/g, '');
  let output = {};
  let arr = [];

  for (const letter of text) {
    if (!arr.includes(letter)) {
      arr.push(letter);
      output[letter] = 1;
    } else {
      output[letter]++;
    }
  }
  console.log(output);
};

countLetters("lighthouse in the house");