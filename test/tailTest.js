const tail = require('../tail');
const assert = require('chai').assert;

const result = tail(["Hello", "Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns length of 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(result.length, 2);
  });
  it("returns 'Lighthouse' for result[0]", () => {
    assert.strictEqual(result[0], 'Lighthouse');
  });
  it("returns 'Labs for result[1]", () => {
    assert.strictEqual(result[1], 'Labs');
  });
  it("returns 3 for words.length", () => {
    tail(words);
    assert.strictEqual(words.length, 3);
  });
});