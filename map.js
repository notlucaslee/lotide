const assertArraysEqual = require('./assertArraysEqual');

const words = [ 'Just', 'a', 'dry', 'gin', 'drinker', 'master', 'and', 'a', 'hound'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results = map(words, word => word[0]);

assertArraysEqual(results, ['J', 'a', 'd', 'g', 'd', 'm', 'a', 'a', 'h']);
assertArraysEqual(map(words, word => word.length), [4, 1, 3, 3, 7, 6, 3, 1, 5]);
assertArraysEqual(map([], word => word.length), []);