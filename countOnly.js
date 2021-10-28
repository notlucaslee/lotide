const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F975)}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F976)}Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, iTemsToCount) {
  let searchArray = truthyItems(iTemsToCount);
  let returnObject = {};
  for (let name of searchArray) {
    returnObject[name] = 0;
    for (let originalName of allItems) {
      if (originalName === name) {
        returnObject[name] += 1;
      }
    }
  }
  for (let key in returnObject) {
    if (returnObject[key] === 0) {
      delete returnObject[key];
    }
  }
  return returnObject;
};

const truthyItems = function(passedObject) {
  let returnArray = [];
  for (const items in passedObject) {
    if (passedObject[items]) {
      returnArray.push(items);
    }
  }
  return returnArray;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);