console.log("Hello World");

//select the button
const myButton = document.querySelector("button");
console.log(myButton);

//my JS is expecting a user action on the page
myButton.addEventListener("click", function () {
  console.log("I was clicked");
});

//you can add an event listener to any dom element

//Try adding another event listener to the button for a different event, like mouseover or mouseout.
myButton.addEventListener("mouseover", function () {
  console.log("I was moused over");
});

myButton.addEventListener("mouseout", function () {
  console.log("I was moused out");
});
