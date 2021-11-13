const flatten = require('../flatten');
const expect = require('chai').expect;

describe('#flatten', ()=> {
  
  it('should return array when passed nested arrays', () => {
    const array = [1, 2, [3, 4]];
    expect(flatten(array)).to.deep.equal([1, 2, 3, 4]);
  });

  it('should return array when passed deeply nested arrays', () => {
    const array = [1, 2, [3, 4, [7 ,8, 9, [10, 11]]], 5, [6]];
    expect(flatten(array)).to.deep.equal([1, 2, 3, 4, 7, 8, 9, 10, 11, 5, 6,]);
  });
});


