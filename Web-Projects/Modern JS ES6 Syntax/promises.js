// async function fn(...promises) {
//   // resolve them all
//   // add one to all of them
//   try {
//     let allPromises = await Promise.all(...promises);
//     let answer = allPromises.map((t) => t * 2);
//     console.log(allPromises);
//     console.log(answer);
//   } catch (error) {
//     console.log("Something went wrong: " + error);
//   }
// }

function fn(...promises) {
  // resolve them all
  // add one to all of them
  Promise.all(...promises) //resolves to each promise's response [response, response]
    .then((result) => {
      return result.map((t) => t * 2);
    })
    .then((result) => console.log(result))
    .catch((error) => "Something went wrong" + error);
}

// function fn(...promises) {
//   // resolve them all
//   // add one to all of them
//   Promise.all(...promises).then((result) => console.log(result));
// }
