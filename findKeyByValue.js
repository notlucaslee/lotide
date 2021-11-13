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

module.exports = findKeyByValue;
