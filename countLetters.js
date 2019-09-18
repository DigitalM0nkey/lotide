const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected} ✅`);
  } else {
    console.log(`❗️❗️❗️ Assertion Failed: ${actual} !== ${expected} ❗️❗️❗️`);
  }
};


const countLetters = (words) => {
  const output = {};
  for (const letter of words) {
    if (letter === ' ') {
      continue;
    } else if (output[letter]) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  }
  return output;
};

let countedLetters = countLetters("lighthouse in the house");

assertEqual(countedLetters["t"], 2);
assertEqual(countedLetters["g"], 1);
assertEqual(countedLetters["e"], 3);
