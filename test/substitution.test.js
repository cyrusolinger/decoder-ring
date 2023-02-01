const substitution = require("../src/substitution").substitution;
const expect = require("chai").expect;

describe("substitution", () => {
  // error handling

  it("should return false if the substitution alphabet is missing", () => {
    const expected = false;
    const actual = substitution("thinkful");

    expect(actual).to.equal(expected);
  });

  it("should return false if the substitution alphabet is not exactly 26 characters", () => {
    const expected = false;
    const actual = substitution("thinkful", "short");

    expect(actual).to.equal(expected);
  });

  it("should return false if the substitution alphabet does not contain unique characters", () => {
    const expected = false;
    const actual = substitution("thinkful", "xxyqmcgrukswaflnthdjpzibev");

    expect(actual).to.equal(expected);
  });

  it("should return false if the substitution alphabet is missing", () => {
    const expected = false;
    const actual = substitution("thinkful");

    expect(actual).to.equal(expected);
  });

  // encoding a message

  it("should encode a message by using the given substitution alphabet", () => {
    const expected = "jrufscpw";
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");

    expect(actual).to.equal(expected);
  });

  it("should work with any kind of key with unique characters", () => {
    const expected = "y&ii$r&";
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");

    expect(actual).to.equal(expected);
  });

  it("should preserve spaces", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );

    expect(actual).to.equal(expected);
  });

  // decoding a message

  it("should decode a message by using the given substitution alphabet", () => {
    const expected = "thinkful";
    const actual = substitution(
      "jrufscpw",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );

    expect(actual).to.equal(expected);
  });

  it("should work with any kind of key with unique characters", () => {
    const expected = "message";
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);

    expect(actual).to.equal(expected);
  });

  it("should preserve spaces", () => {
    const expected = "you are an excellent spy";
    const actual = substitution(
      "elp xhm xf mbymwwmfj dne",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );

    expect(actual).to.equal(expected);
  });
});
