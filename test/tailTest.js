const tail = require('../tail');
const expect = require('chai').expect;
//const assert = require('chai').assert;

// describe('tail function', function () {
//   it("should return [\'Lighthouse\', \'Labs\']", function() {
//     const words = ["Yo Yo", "Lighthouse", "Labs"];
//     assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
//   });
// });

describe('tail function', function() {
  it('should return [\'Lighthouse\', \'Labs\']', function() {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    expect(tail(words)).to.deep.equal(['Lighthouse', 'Labs']);
  });
});