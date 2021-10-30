const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      results.push(item);
    }
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

assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ])
assertArraysEqual(takeUntil(['Mune', 'ga', 'hachi', 'kire', 'sou', 'de'], word => word.length >= 5), ['Mune', 'ga']);