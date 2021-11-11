const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F975)}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F976)}Assertion Failed: ${actual} !== ${expected}`);
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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const bestTVShowsByGenre = {
  scifi: "Futurama",
  comedy: "Community",
  drama:  "Mr. Robot",
  documentary: "How To with John Wilson"
};
assertEqual(eqObjects(bestTVShowsByGenre, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

const cd3 = { d: ["2", 3, 4], c: ["1"] };
const cd4 = { d: ["1"], c: ["2", 3, 4] };
const cd5 = { c: ["1"], d: ["2", 3, 4, 5, 6] };
assertEqual(eqObjects(cd2, cd3), true);
assertEqual(eqObjects(cd3, cd4), false);
assertEqual(eqObjects(cd3, cd5), false);