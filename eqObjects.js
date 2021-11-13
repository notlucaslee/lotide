const eqArrays = require('./eqArrays');
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

module.exports = eqObjects;
