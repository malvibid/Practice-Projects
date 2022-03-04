const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("My array: " + myArray);

//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------

//VERBOSE SYNTAX:
const myArrayEquivalent = [];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];

  myArrayEquivalent.push("item " + element); //define here what to do with each element
}

console.log("For loop eq syntax: " + myArrayEquivalent);

//------------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------------

//LESS VERBOSE SYNTAX with declarative helper functions:

//---- MAP method - Maps a function to each array element and returns results.
const newMappedArray1 = myArray.map(function (item) {
  //console.log(item);
  return "item " + item; //define here what to do with each element
});
console.log("Mapped array 1: " + newMappedArray1);

//---- Further reduced to arrow function -> less verbose:
const newMappedArray2 = myArray.map((item) => "new item " + item);
console.log("Mapped array 2: " + newMappedArray2);

//------------------------------------------------------------------------------------------------------------------------------------

//---- FILTER method - Maps each array element to a condition, returns boolean values - if true: will include element in array, if false: will exclude element from array.
const filteredArray = myArray.filter((element) => element % 2 == 0); //will return even numbers only\

console.log("Filtered array: " + filteredArray);

//---- another example with an array of objects
const myFriendsList = [
  { name: "Jay", age: 27 },
  { name: "Malvi", age: 21 },
  { name: "Darshni", age: 19 },
];

const above20 = myFriendsList.filter((element) => element.age > 20);

console.log(myFriendsList, "Siblings above 20: ", above20);

//------------------------------------------------------------------------------------------------------------------------------------

//---- FIND METHOD - Returns the value of the *first* element in the array where predicate is true, and undefined otherwise.
const findFriend = myFriendsList.find((friend) => friend.name == "Malvi");
console.log("Find friend: ", findFriend);

//------------------------------------------------------------------------------------------------------------------------------------

//---- FOR EACH method - Doesn't return anything, just acts like a for-loop, iterating over the array.
myFriendsList.forEach((element) => console.log(element));
