const eqArrays = (actArr, expArr) => {
  if (JSON.stringify(actArr) === JSON.stringify(expArr)) {
    return true;
  } else {
    return false;
  }
};


const assertEqualArrays = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    console.log(`❗️❗️❗️ Assertion Failed: ${actual} !== ${expected} ❗️❗️❗️`);
  }
};

const middle = function (array) {
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




assertEqualArrays(middle([1, 2, 3, 5, 4]), [3]);
assertEqualArrays(middle([1, 2,]), []);
assertEqualArrays(middle([1, 3, 4]), [3]);
assertEqualArrays(middle([1, 2, 3, 4]), [2, 3]);
assertEqualArrays(middle([1, 2, 3, 5, 4, 5]), [3, 5]);
