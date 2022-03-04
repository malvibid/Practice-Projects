//DESTRUCTURING (explode/merge) ...

//---- destructuring arrays
function example1(arr1, arr2) {
  const array1 = arr1;
  const array2 = arr2;

  const array3 = [...array1, array2];

  console.log(array3);
}

arrayOfObjects1 = [
  {
    name: "Malvi",
  },
];

arrayOfObjects2 = [
  {
    name: "Rollo",
  },
];

example1([1, 2, 3], [4, 5, 6]);
example1(arrayOfObjects1, arrayOfObjects2);

//---- destructuring objects
function example2(obj1, obj2) {
  const object1 = obj1;
  const object2 = obj2;

  const object3 = {
    ...object1,
    ...object2,
  };

  console.log(object3);
}

const KEYNAME = "cool";

object1 = {
  name: "Malvi",
  KEYNAME, //don't need to re-write KEYNAME's value since its already defined above
};
object2 = {
  //name: "Milly", //this will overwrite object1's name value
  age: "22",
};

example2(object1, object2);
