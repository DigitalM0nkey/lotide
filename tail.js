const assertEqual = require('./assertEqual');

let tail = function(element) {
  return element.slice(1);
};

module.exports = tail;

