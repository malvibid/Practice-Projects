// function numberToUnits(num) {
//   let unitsArray = [];
//   let i = 1;

//   while (num > 0) {
//     //using "unshift" method instead of "push" method because we want to access the highest unit first. "unshift" adds elements to the start of the array
//     unitsArray.unshift((num % 10) * i);
//     num = Math.floor(num / 10);
//     i *= 10;
//   }

//   return unitsArray;
// }

function convertToRoman(num) {
  let romanNumerals = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  let romanisedNumber = "";
  let decimalKeys = Object.keys(romanNumerals).reverse();

  //will construct roman number by scanning decimalKeys - starting from the largest decimal/base10 unit
  decimalKeys.forEach((key) => {
    while (num >= key) {
      romanisedNumber += romanNumerals[key];
      num -= key;
    }
  });

  return romanisedNumber;
}

//console.log(numberToUnits(1984))
console.log(convertToRoman(36));
