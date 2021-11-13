const expect = require('chai').expect;
const eqArrays = require('../eqArrays');

describe('eqArrays', () => {

  it('should return true if arrays match', () => {
    expect(eqArrays(['Caves', 'Chemicals'],['Caves', 'Chemicals'])).to.equal(true);
  });

  it('should return false if arrays lengths are different', () => {
    expect(eqArrays(['Caves', 'Chemicals', 'Birds'],['Caves', 'Chemicals'])).to.equal(false);
  });

  it('should return false if arrays are different', () => {
    expect(eqArrays(['Caves', 'Chemical'],['Caves', 'Chemicals'])).to.equal(false);
  });
});

