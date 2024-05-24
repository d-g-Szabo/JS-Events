console.log("Hello World");

//select the button
const myButton = document.querySelector("button");
console.log(myButton);

//my JS is expecting a user action on the page
//in my addEvenetListener method, i have 2 parameters:
//1. the event i am listening for
//2. the anonymus function i want to run when the event happens --> we only use it once, so we don't need to name it
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

//examples
//a button to count from 0 to infinity and beyond!
const countingButton = document.querySelector("#counting-button");

//we declare the variable outside the function so it doesn't reset every time the function runs
let count = 0;

countingButton.addEventListener("click", function () {
  count++;
  console.log(count);
  countingButton.textContent = count;
});

//when we click the button, a DOM elemetn appers on the page
const mainContainer = document.querySelector(".main-container");
const messageButton = document.getElementById("message-button");
console.log(mainContainer);
console.log(messageButton);

messageButton.addEventListener("click", function () {
  //create element to contain the message
  let message = document.createElement("p");
  //add content to the p tag
  message.textContent = "Hello World!";
  //append the p tag to the div parent
  //parent.appendchild(child)
  mainContainer.appendChild(message);
});
