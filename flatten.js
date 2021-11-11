const flatten = function(array) {
  let result = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      flatten(item);
    } else {
      result.push(item);
    }
  }
  return result;
};

console.log(flatten([1, 2, [3, 4, [7 ,8, 9, [10, 11]]], 5, [6]]));