const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  delete results[' '];
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
    console.log('Your arrays match.');
  } else {
    console.log('Your arrays be BUGGIN');
  }
};

let word = 'hello';
console.log(assertArraysEqual(letterPositions('hello')['h'], [0]));
console.log(assertArraysEqual(letterPositions('hello')['e'], [1]));
console.log(assertArraysEqual(letterPositions('hello')['l'], [2, 3]));
console.log(letterPositions('now i run the game got the whole world talkin king kunta'));