const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F975)}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F976)}Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(hash, value) {
  let valueToReturn;
  if (Object.values(hash).includes(value) === false) {
    return valueToReturn;
  } else {
    for (let key in hash) {
      if (hash[key] === value) {
        valueToReturn = key;
      }
    }
    return valueToReturn;
  }
};
const bestTVShowsByGenre = {
  sci_fi: "Futurama",
  comedy: "Community",
  drama:  "Mr. Robot",
  documentary: "How To with John Wilson"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "How To with John Wilson"), "documentary");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Community"), 'comedy');
assertEqual(findKeyByValue(bestTVShowsByGenre, "Curb Your Enthusiasm"), undefined);