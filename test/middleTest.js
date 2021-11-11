// const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const expect = require('chai').expect;

// assertArraysEqual(middle([1]),[]);
// assertArraysEqual(middle([1, 2]),[]);
// assertArraysEqual(middle([1, 2, 3]),[2]);
// assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
// assertArraysEqual(middle(['how', 'many', 'miles', 'must', 'a', 'man', 'walk', 'down']), ['must', 'a']);

describe('middle function', () => {

  it('returns blank array when array of one item is passed in', () => {
    expect(middle([1])).to.deep.equal([]);
  });

  it('returns blank array when array of two items is passed in', () => {
    expect(middle([1, 2])).to.deep.equal([]);
  });

  it('returns [2] when [1, 2, 3] is passed in', () => {
    expect(middle([1, 2, 3])).to.deep.equal([2]);
  });

  it('returns middle two items when array of even # of items passed in', () => {
    expect(middle([1, 2, 3, 4]),[2, 3]).to.deep.equal([2, 3]);
  });
  
});