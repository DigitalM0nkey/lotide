
const eqArrays = (actArr, expArr) => {
  return assertEqual(JSON.stringify(actArr), JSON.stringify(expArr));
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
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
eqArrays(actual, expected);
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
//without(["hello", "world", "lighthouse"], ["lighthouse"]);

// TEST CASE
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]);
eqArrays(words, ["hello", "world", "lighthouse"]);