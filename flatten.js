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

const flatten = (input) => {
  let newArray = [];
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    if (Array.isArray(element)) {
      for (let index = 0; index < element.length; index++) {
        const element1 = element[index];
        newArray.push(element1);
      }
    } else {
      newArray.push(element);
    }

  }
  return newArray;
};

//assertEqualArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;
