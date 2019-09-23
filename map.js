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


const words = ["ground", "control", "to", "major", "tom"];
const nums = [1, 2, 3];
const popularWords = ["the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he", "was", "for", "on", "are", "as", "with", "his", "they", "I", "at", "be", "this", "have", "from", "or", "one", "had", "by", "word", "but", "not", "what", "all", "were", "we", "when", "your", "can", "said", "there", "use", "an", "each", "which", "she", "do", "how", "their", "if", "will", "up", "other", "about", "out", "many", "then", "them", "these", "so", "some", "her", "would", "make", "like", "him", "into", "time", "has", "look", "two", "more", "write", "go", "see", "number", "no", "way", "could", "people", "my", "than", "first", "water", "been", "call", "who", "oil", "its", "now", "find", "long", "down", "day", "did", "get", "come", "made", "may", "part"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(nums, num => num += 1);
const results3 = map(popularWords, overThree => overThree.length > 3 ? overThree : overThree = "");




console.log(results3);


assertEqualArrays(results2, [2, 3, 4]);
assertEqualArrays(results1, ['g', 'c', 't', 'm', 't']);
assertEqualArrays(results3, ['',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'that',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'with',
  '',
  'they',
  '',
  '',
  '',
  'this',
  'have',
  'from',
  '',
  '',
  '',
  '',
  'word',
  '',
  '',
  'what',
  '',
  'were',
  '',
  'when',
  'your',
  '',
  'said',
  'there',
  '',
  '',
  'each',
  'which',
  '',
  '',
  '',
  'their',
  '',
  'will',
  '',
  'other',
  'about',
  '',
  'many',
  'then',
  'them',
  'these',
  '',
  'some',
  '',
  'would',
  'make',
  'like',
  '',
  'into',
  'time',
  '',
  'look',
  '',
  'more',
  'write',
  '',
  '',
  'number',
  '',
  '',
  'could',
  'people',
  '',
  'than',
  'first',
  'water',
  'been',
  'call',
  '',
  '',
  '',
  '',
  'find',
  'long',
  'down',
  '',
  '',
  '',
  'come',
  'made',
  '',
  'part']);

module.exports = map;