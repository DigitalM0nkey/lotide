
const eqArrays = (actArr, expArr) => {
  //return JSON.stringify(actArr) === JSON.stringify(expArr) ? console.log("the two arrays are the same") : console.log("WAIT... Theses aren't the same!!!");
  if (JSON.stringify(actArr) === JSON.stringify(expArr)) {
    console.log("the two arrays are the same");
  } else {
    console.log("WAIT... Theses aren't the same!!!");
  }
};





eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false