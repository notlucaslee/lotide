const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F975)}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F976)}Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word) {
  let result = {};
  for (let letter of word) {
    if (result[letter] === undefined) {
      result[letter] = 1;
    } else {
      result[letter] += 1;
    }
  }
  delete result[' '];
  return result;
};

let result1 = countLetters("lighthouse in the house");

assertEqual(result1.l, 1);
assertEqual(result1.i, 2);
assertEqual(result1.h, 4);