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

const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    const element = sentence[i];
    if (element === ' ') {
      continue;
    } else if (results[element]) {
      results[element].push(i);
    } else {
      results[element] = [i];
    }
  }
  console.log(results);
  return results;
};

// assertEqualArrays(letterPositions("hello my Friend").e, [1, 12]);

module.exports = letterPositions;