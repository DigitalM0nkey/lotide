const eqArrays = (actArr, expArr) => {
  if (JSON.stringify(actArr) === JSON.stringify(expArr)) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;
