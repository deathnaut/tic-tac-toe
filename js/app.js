// wait for the DOM to finish loading
// $(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

// });

console.log('start tic-tac-toe game');

var title = document.querySelector('h1');
// xTurn = true;

title.addEventListener('click', function(){
  // if (xTurn == true) {
  title.style.background = 'blue';
  console.log('a change has been made..');
  // } else {
    // document.getElementById("box1A").innerHTML = "Goodbye World";
});


var button = document.querySelector('button');

button.addEventListener('click', function(){
  window.location.reload(true);
});

var x = 'x'
var o = 'o'
var entry = ''

// var boardRow = [...document.querySelectorAll('.row')];
var boardBox = [...document.querySelectorAll('.box')];
var box = [...document.querySelectorAll('.col-md-4')];

boardBox.forEach(function (clickBox) {
  clickBox.addEventListener('click', function (){
    entry = x;
    box.innerHTML = entry;
    console.log(entry);
    clickBox.style.backgroundColor = 'white';

  });
});
