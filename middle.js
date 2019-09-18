
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

const middle = function(array) {
  let output = [];
  if (array.length <= 2) {
    output = [];
  } else if (array.length % 2 === 0) {
    output.push(array[Math.floor(array.length / 2) - 1]);
    output.push(array[Math.floor(array.length / 2)]);
  } else {
    output.push(array[Math.floor(array.length / 2)]);
  }
  return output;
};

eqArrays(middle([1, 2, 3, 5, 4]), [3]);
eqArrays(middle([1, 2,]), []);
eqArrays(middle([1, 3, 4]), [3]);
eqArrays(middle([1, 2, 3, 4]), [2, 3]);
eqArrays(middle([1, 2, 3, 5, 4, 5]), [3, 5]);
