//CODEDAMN (FREECODECAMP) - PALINDROME EXERCISE

function palindrome(str) {
  let reverseString = str.split("").reverse().join("");

  return (
    str.toLowerCase().replace(/[\W_]/g, "") ==
    reverseString.toLowerCase().replace(/[\W_]/g, "")
  );
}

console.log(palindrome("eye"));
