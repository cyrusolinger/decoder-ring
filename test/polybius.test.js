const polybius = require("../src/polybius").polybius;
const expect = require("chai").expect;

describe("polybius", () => {
  // encoding a message

  it("should encode a message by translating each letter to number pairs", () => {
    const expected = "4432423352125413";
    const actual = polybius("thinkful");

    expect(actual).to.equal(expected);
  });

  it("should translate both 'i' and 'j' to 42", () => {
    const expected = "4432423352125413";
    const actual = polybius("thinkful");

    expect(actual).to.equal(expected);
  });

  it("should leave spaces as is", () => {
    const expected = "3251131343 2543241341";
    const actual = polybius("Hello world");

    expect(actual).to.equal(expected);
  });

  // decoding a message

  it("should decode a message by translating each pair of numbers into a letter", () => {
    const expected = "hello";
    const actual = polybius("3251131343", false);

    expect(actual).to.equal(expected);
  });

  it("should translate 42 to both 'i' and 'j'", () => {
    const expected = "th(i/j)nkful";
    const actual = polybius("4432423352125413", false);

    expect(actual).to.equal(expected);
  });

  it("should leave spaces as is", () => {
    const expected = "hello world";
    const actual = polybius("3251131343 2543241341", false);

    expect(actual).to.equal(expected);
  });

  it("should return false if the length of all numbers is odd", () => {
    const expected = false;
    const actual = polybius("44324233521254134", false);

    expect(actual).to.equal(expected);
  });
});
