const words = [ 'Just', 'a', 'dry', 'gin', 'drinker', 'master', 'and', 'a', 'hound'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function(array1, array2) {
  let checkString = '';
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array2.length; i++) {
      if (array1[i] === array2[i]) {
        checkString += '1';
      } else {
        checkString += '0';
      }
    }
  }
  if (checkString.includes('0')) {
    return false;
  } else {
    return true;
  }
};

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === true) {
    console.log(`${String.fromCodePoint(0x1F975)} Your arrays match.`);
  } else {
    console.log(`${String.fromCodePoint(0x1F976)} Your arrays be BUGGIN`);
  }
};

const results = map(words, word => word[0]);
assertArraysEqual(results, ['J', 'a', 'd', 'g', 'd', 'm', 'a', 'a', 'h']);
assertArraysEqual(map(words, word => word.length), [4, 1, 3, 3, 7, 6, 3, 1, 5]);