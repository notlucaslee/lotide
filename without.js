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

const without = function(source, itemsToRemove) {
  let destinationArray = source.slice();
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < destinationArray.length; j++) {
      if (destinationArray[j] === itemsToRemove[i]) {
        destinationArray.splice(j, 1);
      }
    }
  }
  return destinationArray;
};

assertArraysEqual(without([1, 2, 3], [1]),[2 ,3]);
assertArraysEqual(without([1, 2, 3], [1, 4]),[2 ,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);
assertArraysEqual(without([],[]), []);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(words);
