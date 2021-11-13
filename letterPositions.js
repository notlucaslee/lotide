const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  delete results[' '];
  return results;
};

console.log(assertArraysEqual(letterPositions('hello')['h'], [0]));
console.log(assertArraysEqual(letterPositions('hello')['e'], [1]));
console.log(assertArraysEqual(letterPositions('hello')['l'], [2, 3]));
console.log(letterPositions('now i run the game got the whole world talkin king kunta'));