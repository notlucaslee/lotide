

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

const expect = require('chai').expect;
const countOnly = require('../countOnly');
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe('countOnly', () => {

  it('should return number of times word appears in array', () => {
    expect(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })['Jason']).to.equal(1);
  });

  it('should return 2 when Fang is name to find', () => {
    expect(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })['Fang']).to.equal(2);
  });

  it('should return undefined when non-existing name is counted', () => {
    expect(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })['Legolas']).to.equal(undefined);
  });

  it('should return undefined when false name is counted', () => {
    expect(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })['Agouhanna']).to.equal(undefined);
  });
});

