const assertObjectsEqual = function(firstObject, secondObject) {
  const inspect = require('util').inspect;
  if (eqObjects(firstObject, secondObject) === true) {
    console.log(`${String.fromCodePoint(0x1F975)} Your objects match: ${inspect(firstObject)} is the same as ${inspect(firstObject)}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F976)} Your objects be BUGGIN: ${inspect(firstObject)} ain't the same as ${inspect(firstObject)}`);
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let iKeys in object1) {
      if (Array.isArray(object2[iKeys])) {
        if (eqArrays(object1[iKeys], object2[iKeys]) === false) {
          return false;
        }
      } else if (object1[iKeys] !== object2[iKeys]) {
          return false;
        } 
      }
      return true;
    }
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
