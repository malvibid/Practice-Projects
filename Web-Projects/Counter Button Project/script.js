const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const counterEl = document.getElementById("counter");
let counter = 0;

const ulElement = document.getElementById("list-items");

incrementBtn.addEventListener("click", incrementCounter);

decrementBtn.addEventListener("click", decrementCounter);

function incrementCounter() {
  counter++;
  counterEl.innerText = counter;

  //1.) Create an element
  const li = document.createElement("li");

  // ----- LONG WAY -------
  // const bold = document.createElement("strong");
  // const textNode1 = document.createTextNode("Sentence ");
  // const textNode2 = document.createTextNode(counter);

  // bold.appendChild(textNode2);

  // li.appendChild(textNode1);
  // li.appendChild(bold);

  //----- Short way ------- less flexible e.g cannot add event listeners to to HTML in innerHTML
  li.innerHTML = "Sentence <strong>" + counter + "</strong>";

  //----- setting a custom attribute data-*
  li.setAttribute("data-counter", counter);

  if (counter % 2 == 0) {
    //----- dynamically changing HTML, then css defined in style.css is applied according to the HTML
    li.setAttribute("class", "colour1");

    //----- Alternatively can directly change css from JS using style property
    // li.style.background = "yellow";
    // li.style.padding = "10px";
  } else {
    li.setAttribute("class", "colour2");
  }

  //2.) Append an element to its parent
  ulElement.appendChild(li);
}

function decrementCounter() {
  //----- selecting specific li using custom li element attribute set above
  const li = document.querySelector('[data-counter = "' + counter + '"]');
  // li.remove();

  //---- accessing count value using getAttribute method, removing only even list items
  const num = parseInt(li.getAttribute("data-counter"), 10);

  if (num % 2 == 0) {
    li.remove();
  }

  counter--;
  counterEl.innerText = counter;
}
