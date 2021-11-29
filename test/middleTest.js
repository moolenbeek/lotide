const middle = require('../middle');
const expect = require('chai').expect;

describe("#middle", () => {
  it("returns [] for [1]", () => {
    expect(middle([1])).to.deep.equal([]);
  });
  it("returns [] for [1, 2]", () => {
    expect(middle([1, 2])).to.deep.equal([]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    expect(middle([1, 2, 3, 4, 5])).to.deep.equal([3]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    expect(middle([1, 2, 3, 4])).to.deep.equal([2, 3]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    expect(middle([1, 2, 3, 4, 5, 6])).to.deep.equal([3, 4]);
  });
});