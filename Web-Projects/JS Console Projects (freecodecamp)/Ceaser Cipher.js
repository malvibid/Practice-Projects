function rot13(str) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const rotationValue = 13;
  const wrapModulo = alphabet.length;
  const rot13 = []; //2D array of alphabet rot13 pairs.

  for (let i = 0; i < alphabet.length; i++) {
    let shiftIndex = (i + rotationValue) % wrapModulo;
    rot13.push([alphabet[i], alphabet[shiftIndex]]);
  }
  //console.log(rot13);
  let encodedStringArray = str.split("");
  let decodedStringArray = [];

  for (let i = 0; i < encodedStringArray.length; i++) {
    for (let j = 0; j < rot13.length; j++) {
      if (/[A-Z]/g.test(encodedStringArray[i])) {
        if (encodedStringArray[i] == rot13[j][0]) {
          decodedStringArray.push(rot13[j][1]);
          break;
        }
      } else {
        decodedStringArray.push(encodedStringArray[i]);
        break;
      }
    }
  }

  let decodedString = decodedStringArray.join("");

  return decodedString;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
