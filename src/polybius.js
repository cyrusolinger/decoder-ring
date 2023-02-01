// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const polybiusSquare = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i/j", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];
  function polybius(input, encode = true) {
    let output = "";
    if (encode) {
      input
        .toLowerCase()
        .split("")
        .forEach((char) => {
          if (char === "i" || char === "j") {
            output += "42";
          } else if (char === " ") {
            output += char;
          } else {
            polybiusSquare.forEach((line, index) => {
              if (line.indexOf(char) > -1) {
                output += `${line.indexOf(char) + 1}${index + 1}`;
              }
            });
          }
        });
    } else if (!encode) {
      if (input.replace(/ /g, "").length % 2 !== 0) return false;
      input = input.split(" ").forEach((word) => {
        word.match(/.{2}/g).forEach((letter) => {
          if (letter === "42") {
            output += "(i/j)";
          } else if (letter === " ") {
            output += letter;
          } else {
            output += polybiusSquare[letter[1] - 1][letter[0] - 1];
          }
        });
        output += " ";
      });

      // polybiusSquare.forEach((line, index) => {
      //     output += `${line.indexOf(char) + 1}${index + 1}`
      //   })
    }
    return output.trim();
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
