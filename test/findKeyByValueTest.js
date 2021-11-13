const bestTVShowsByGenre = {
  scifi: "Futurama",
  comedy: "Community",
  drama:  "Mr. Robot",
  documentary: "How To with John Wilson"
};

const expect = require('chai').expect;
const findKeyByValue = require('../findKeyByValue');

describe('findKeyByValue', () => {

  it('returns key when given value', () => {
    expect(findKeyByValue(bestTVShowsByGenre, 'Community')).to.equal('comedy');
  });

  it('returns undefined when given non-existant value', () => {
    expect(findKeyByValue(bestTVShowsByGenre, 'Seinfeld')).to.equal(undefined);
  });

});
