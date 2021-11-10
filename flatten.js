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
    console.log('Your arrays match.');
  } else {
    console.log('Your arrays be BUGGIN');
  }
};

let result = [];

const flatten = function(array) {
  for (let item of array) {
    if (Array.isArray(item)) {
      flatten(item);
    } else {
    result.push(item)
    }
  }
  return result;
}

console.log(flatten([1, 2, [3, 4, [7 ,8, 9, [10, 11]]], 5, [6]]));