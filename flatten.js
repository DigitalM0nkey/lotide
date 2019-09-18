
const eqArrays = (actArr, expArr) => {
  return assertEqual(JSON.stringify(actArr), JSON.stringify(expArr));
};


const assertEqual = function (actual, expected) {
  if (actual === expected) {
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

eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
