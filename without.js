const eqArrays = (actArr, expArr) => {
  if (JSON.stringify(actArr) === JSON.stringify(expArr)) {
    return true;
  } else {
    return false;
  }
};


const assertEqualArrays = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    console.log(`❗️❗️❗️ Assertion Failed: ${actual} !== ${expected} ❗️❗️❗️`);
  }
};


const without = (origArray, itemToRemove) => {
  let newArray;
  itemToRemove.forEach(item => {
    newArray = origArray.filter(function(numbers) {
      return numbers !== item;
    });
  });
  return newArray;

};


const actual = without(["1", "2", "3"], [1, 2, "3"]);
const expected = ["1", "2"];
assertEqualArrays(actual, expected);


assertEqualArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
assertEqualArrays(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);

// TEST CASE
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
assertEqualArrays(words, ["hello", "world", "lighthouse"]);
module.exports = without;