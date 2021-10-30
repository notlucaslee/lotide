const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F975)}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F976)}Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  let result;
  for (let restoName in object) {
    if (callback(object[restoName])) {
      result = restoName;
      break;
    }
  }
  return result;
};

const torontoBurgers = {
  "Rudy": { stars: 5 },
  "Burger's Priest":   { stars: 3 },
  "Golden Star":      { stars: 4 },
  "Flame Shack ":   { stars: 4 },
  "W Burger Bar":       { stars: 2 },
};

assertEqual(findKey(torontoBurgers, x => x.stars <= 2), 'W Burger Bar');
assertEqual(findKey(torontoBurgers, x => x.stars < 2), undefined);