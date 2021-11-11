const eqArrays = require('./eqArrays');

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === true) {
    console.log(`${String.fromCodePoint(0x1F975)} Your arrays match.`);
  } else {
    console.log(`${String.fromCodePoint(0x1F976)} Your arrays be BUGGIN`);
  }
};

module.exports = assertArraysEqual;