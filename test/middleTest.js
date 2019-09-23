const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("should return the middle number", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });
  it("should return an empty array", () => {
    assert.deepEqual(middle([2]), []);
  });
  it("should return an 2 numbers", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return an empty array", () => {
    assert.deepEqual(middle([2, 2]), []);
  });


});