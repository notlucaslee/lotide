const middle = function(inputArray) {
  let middleArray = [];
  if (inputArray.length > 2) {
    if (inputArray.length % 2 === 1) {
      middleArray.push(inputArray[Math.floor(inputArray.length / 2)]);
    } else {
      middleArray.push(inputArray[inputArray.length / 2 - 1]);
      middleArray.push(inputArray[inputArray.length / 2]);
    }
  }
  return middleArray;
};

module.exports = middle;
