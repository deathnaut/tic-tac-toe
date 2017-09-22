// wait for the DOM to finish loading
// $(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

// });

var title = document.querySelector("h1");
// xTurn = true;
console.log(title);

title.addEventListener("click", function(){
  // if (xTurn == true) {
  title.style.background = 'blue';
  // } else {
    // document.getElementById("box1A").innerHTML = "Goodbye World";
});
