const multiline =
  "Multiline is messy with single/double quotes strings \
\
This will break \
Put backshlashes to escape newlines";

const multilineNew = `multiline is clean with backticks template/string literals

does not break`;

//------------------------------------------------------------------------------------------------------------------------------------

const person = {
  name: "Malvi",
  age: 22,
};

const aboutMe =
  "My name is " + person.name + " and I am " + person.age + " years old.";

//With backticks (template/string literals), no concatenation needed to add a JS expression dynamically, it sits naturally within the string using ${} notation.
const aboutMeNew = `My name is ${person.name} and I am ${person.age} years old`;
