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

module.exports = countOnly;