
const eqArrays = (actArr, expArr) => {
  if (JSON.stringify(actArr) === JSON.stringify(expArr)) {
    return true;
  } else {
    return false;
  }
};


const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  let result = false;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    keys1.forEach(element => {
      if (keys2.includes(element) && object1[element] === object2[element]) {
        result = true;
      } else if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
        result = eqArrays(object1[element], object2[element]);
      } else {
        result = false;
      }
    });
  }
  return result;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)} ✅`);
  } else {
    console.log(`❗️❗️❗️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} ❗️❗️❗️`);
  }
};

// assertObjectsEqual({ 1: 1, 2: 2, 3: 3 }, { 1: 1, 2: 2, 3: 3 }); // => true
// assertObjectsEqual({ 1: 1, 2: 2, 5: 3 }, { 1: 1, 2: 2, 3: 3 }); // => false
