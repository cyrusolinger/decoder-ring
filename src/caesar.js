// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const chars = input.toLowerCase().split(""); // ['t','h','i','n','k','f','u','l']
    if (!shift || shift > 25 || shift < -25) return false;
    if (encode) {
      return chars
        .map((char) => {
          if (alphabet.indexOf(char) === -1) return char;
          let shifted = alphabet.indexOf(char) + shift;
          if (shifted >= alphabet.length) {
            return alphabet[shifted - alphabet.length];
          } else if (shifted < 0) {
            return alphabet[shifted + alphabet.length];
          } else {
            return alphabet[shifted];
          }
        })
        .join("");
    }
    return chars
      .map((char) => {
        if (alphabet.indexOf(char) === -1) return char;
        let shifted = alphabet.indexOf(char) - shift;
        if (shifted < 0) {
          return alphabet[shifted + alphabet.length];
        } else if (shifted >= alphabet.length) {
          return alphabet[shifted - alphabet.length];
        } else {
          return alphabet[shifted];
        }
      })
      .join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

// Q: Helper function? encode/decode are similar
// Q: How can I refactor this further?
