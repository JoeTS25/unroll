const unroll = require("./unroll");

describe("#unroll", function () {

  beforeEach(function () {
    myArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
  });

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("works with example", function () {
    const works = unroll(myArray);
    expect(works).toBe(1, 2, 3, 6, 9, 8, 7, 4, 5);
  });

});

// the test says it cannot read properties of undefined (reading 'reverse'),
// however i've executed the function multiple times and it works


