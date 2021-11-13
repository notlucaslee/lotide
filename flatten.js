const flatten = function(array) {
  let result = [];
  for (let item of array) {
    if (Array.isArray(item)) {   
      result.push(flatten(item.flat()));
    } else {
      result.push(item);
    }
  }
  return result.flat();
};
module.exports = flatten;

