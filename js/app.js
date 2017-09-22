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


var turnCounter = 0;
var xImg = '<img src="../tic-tac-toe/images/x-resized.png">'
var oImg = '<img src="../tic-tac-toe/images/o-resized.png">'
var entry = ''

// var boardRow = [...document.querySelectorAll('.row')];
var boardBox = [...document.querySelectorAll('.box')];
var box = [...document.querySelectorAll('.col-md-4')];

boardBox.forEach(function (clickBox) {
  clickBox.addEventListener('click', function (){
    if (clickBox.innerHTML !== xImg && clickBox.innerHTML !== oImg) {
      var turnEven = turnCounter % 2;
      if (turnEven === 0) {
        turnCounter++;
        clickBox.innerHTML = xImg;
        console.log('player x turn has been played');
      } else {
        turnCounter++;
        clickBox.innerHTML = oImg;
        console.log('player o turn has been played');
      }
      clickBox.style.backgroundColor = 'white';
    } else {
    alert('INVALID PLAY. TRY AGAIN.');
    }
  });
  if (turnCounter == 9) {
    alert('GAME OVER. DRAW.');
  }
});


// var row1 = [...document.querySelectorAll('.row1')];
// row1.forEach(function allSame(isSame) {
//   if ()
// });
//

//button stuff
var button = document.querySelector('button');

button.addEventListener('click', function(){
  window.location.reload(true);
});

    // var counter = 0;
    // counter++
    // if (counter === 9) {
    //   console.log('end game');
    //   alert('end game');
    // }

// var winPossibilities =
// all same
//   row1
//   row2
//   row3
//   row a
//   row b
//   row c
//   row1 a, row2 b, row3 c
//   row1 c, row2 b, row3 a
