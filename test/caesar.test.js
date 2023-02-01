const caesar = require("../src/caesar").caesar;
const expect = require("chai").expect;

// Q: How can I group tests together besides using comments?

// Testing Suite for caesar function
describe("caesar", () => {
  // error handling

  it("should return false if the shift amount is 0", () => {
    const expected = false;
    const actual = caesar("thinkful", 0);

    expect(actual).to.equal(expected);
  });

  it("should return false if the shift amount is above 25", () => {
    const expected = false;
    const actual = caesar("thinkful", 30);

    expect(actual).to.equal(expected);
  });

  it("should return false if the shift amount is less than -25", () => {
    const expected = false;
    const actual = caesar("thinkful", -30);

    expect(actual).to.equal(expected);
  });

  // encoding messages

  it("should encode a message by shifting the letters", () => {
    const expected = "wklqnixo";
    const actual = caesar("thinkful", 3);

    expect(actual).to.equal(expected);
  });

  it("should leaves spaces and other symbols as is", () => {
    const expected = "wklqnixo uxohv!";
    const actual = caesar("thinkful rules!", 3);

    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const expected = "wklqnixo";
    const actual = caesar("THiNKFuL", 3);

    expect(actual).to.equal(expected);
  });

  it("should appropriately handle letters at the end of the alphabet", () => {
    const expected = "bpqvsnct";
    const actual = caesar("thinkful", 8);

    expect(actual).to.equal(expected);
  });

  it("should allow for a negative shift that will shift to the left", () => {
    const expected = "qefkhcri oribp!";
    const actual = caesar("thinkful rules!", -3);

    expect(actual).to.equal(expected);
  });

  // decoding messages

  it("should decode a message by shifting the letters in the opposite direction", () => {
    const expected = "thinkful";
    const actual = caesar("wklqnixo", 3, false);

    expect(actual).to.equal(expected);
  });

  it("should leaves spaces and other symbols as is", () => {
    const expected = "thinkful rules!";
    const actual = caesar("wklqnixo uxohv!", 3, false);

    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const expected = "thinkful";
    const actual = caesar("WKLQNiXo", 3, false);

    expect(actual).to.equal(expected);
  });

  it("should appropriately handle letters at the end of the alphabet", () => {
    const expected = "thinkful";
    const actual = caesar("drsxupev", 10, false);

    expect(actual).to.equal(expected);
  });

  it("should allow for a negative shift that will shift to the left", () => {
    const expected = "zebra magazine";
    const actual = caesar("wbyox jxdxwfkb", -3, false);

    expect(actual).to.equal(expected);
  });
});
