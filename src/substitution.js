// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const abc = "abcdefghijklmnopqrstuvwxyz".split("");
  function substitution(input, alphabet, encode = true) {
    // 'thinkful'
    if (
      !alphabet ||
      alphabet.length !== 26 ||
      alphabet
        .split("")
        .filter((item, index) => alphabet.indexOf(item) !== index).length > 0
    ) {
      return false;
    } else if (!encode) {
      return input
        .toLowerCase()
        .split("")
        .map((char) => {
          let match = alphabet.split("").findIndex((letter) => letter === char);
          if (match === -1) {
            return " ";
          } else {
            return abc[match];
          }
        })
        .join("");
    } else {
      return input
        .toLowerCase()
        .split("")
        .map((char) => {
          let match = abc.findIndex((letter) => letter === char);
          if (match === -1) {
            return " ";
          } else {
            return alphabet[match];
          }
        })
        .join("");
    }
  }
  return {
    substitution, // 7'jrufscpw'
  };
})();

module.exports = { substitution: substitutionModule.substitution };
