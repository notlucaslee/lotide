const eqObjects = require('../eqObjects');
const expect = require('chai').expect;

describe ('eqObjects function', () => {

  it('should return true when identical objects passed in', () => {
    const ab = { a: "1", b: "2" };
    expect(eqObjects(ab, { a: "1", b: "2" })).to.equal(true);
  });

  it('should return true when identical objects in differing order passed in', () => {
  const ba = { b: "2", a: "1" };
  const ab = { a: "1", b: "2" };
  expect(eqObjects(ab, ba)).to.equal(true);
  });

  it('should return false when objects of different key/value counts passed in', () => {
    const ba = { b: "2", a: "1" };
    const abc = { a: "1", b: "2", c: "3" };
    expect(eqObjects(abc, ba)).to.equal(false);
  });

  it('should return true when identical objects passed in, and values are arrays', () => {
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const cd3 = { d: ["2", 3, 4], c: ["1"] };
    expect(eqObjects(cd2, cd3)).to.equal(true);
  });

  it('should return false when identical objects passed in, and values are non matching arrays', () => {
    const cd5 = { c: ["1"], d: ["2", 3, 4, 5, 6] }
    const cd4 = { d: ["1"], c: ["2", 3, 4] };
    expect(eqObjects(cd4, cd5)).to.equal(false);
  });
  
}); 