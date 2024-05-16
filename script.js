/**
 eventListener => Listen for specific events to create interactive web pages
  events: click,mouseover,mouseout,
  syntax: 
  .addeventListener(event,function)
  arrow function ()=>{

  }
 */

// const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton");
// myButton.addEventListener("click", () => {
//   myBox.style.backgroundColor = "yellowgreen";
//   myBox.style.color = "white";
//   myBox.textContent = "Silent ";
// });

// myButton.addEventListener("mouseover", () => {
//   myBox.style.borderRadius = "50% 20px 200px 10%";
//   myBox.style.backgroundColor = "black";
//   myBox.style.color = "white";
//   myBox.textContent = "mouse overed ";
// });

// myButton.addEventListener("mouseout", () => {
//   myBox.style.borderRadius = "50%";
//   myBox.style.backgroundColor = "pink";
//   myBox.style.color = "green";
//   myBox.textContent = "thank u🫠 ";
// });

// let box = document.querySelector("div");
// let input = document.querySelector("input");

// input.addEventListener("input",()=>{
//     box.style.borderRadius = input.value;
//     box.style.background = input.value;
// })
let count = 0;
document.getElementById("decreaseBtn").onclick = ()=>{
    count = count - 1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("increaseBtn").onclick = ()=>{
    count = count + 1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("ResetBtn").onclick = ()=>{
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}