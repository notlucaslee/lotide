const expect = require('chai').expect;
const letterPositions = require('../letterPositions');


describe('letterPositions function', () => {

  it('returns object of each char and and array of its indices', () => {
    expect(letterPositions('hello')).to.deep.equal({
      h: [0],
      e: [1],
      l: [2, 3],
      o: [4]
    });
  });

});