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

const middle = function(inputArray) {
  let middleArray = [];
  if (inputArray.length > 2) {
    if (inputArray.length % 2 === 1) {
      middleArray.push(inputArray[Math.floor(inputArray.length / 2)]);
    } else {
      middleArray.push(inputArray[inputArray.length / 2 - 1]);
      middleArray.push(inputArray[inputArray.length / 2]);
    }
  }
  return middleArray;
};


assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle(['how', 'many', 'miles', 'must', 'a', 'man', 'walk', 'down']), ['must', 'a']);
