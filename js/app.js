// wait for the DOM to finish loading
// $(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function


console.log('start tic-tac-toe game');

var title = document.querySelector('h1');

// TEST stuff
// title.addEventListener('click', function(){
//   title.style.background = 'blue';
//   console.log('a change has been made..');
// });


var winner;
var x = '<img id="x" src="../tic-tac-toe/images/x-resized.png" alt="x">';
var o = '<img id="o" src="../tic-tac-toe/images/o-resized.png" alt="o">';

var boardRow = [...document.querySelectorAll('.row')];
var boardBox = [...document.querySelectorAll('.box')];
var box = [...document.querySelectorAll('.col-md-4')];


var a1 = document.querySelector('.row1 .box .a');
var a2 = document.querySelector('.row1 .box .b');
var a3 = document.querySelector('.row1 .box .c');
var b1 = document.querySelector('.row2 .box .a');
var b2 = document.querySelector('.row2 .box .b');
var b3 = document.querySelector('.row2 .box .c');
var c1 = document.querySelector('.row3 .box .a');
var c2 = document.querySelector('.row3 .box .b');
var c3 = document.querySelector('.row3 .box .c');

// var row1Win = [...document.querySelectorAll('row1 > img#xImg')];
//
// var j = 0;
//
// function checkIfWin(){
//   // for (j = 0, j < turnCounter, j++) {
//   //   if ( $( "#a1" ).attr( "value" ) == 'true' ) {
//   //     console.log('a1 is x');
//   //   } else {
//   //     console.log('check your code');
//   //   }
//   if (row1Win.length === 3) {
//       console.log('x wins');
//   }
// }

var turnCounter = 0;

boardBox.forEach(function (clickBox) {
  clickBox.addEventListener('click', function (event){
    if (clickBox.innerHTML!==x && clickBox.innerHTML!==o) {
      var turnEven = turnCounter % 2;
      if (turnEven === 0) {
        clickBox.innerHTML = x;
        console.log(clickBox);
        console.log('box value is now true aka x');
        console.log('player x turn has been played');
        // checkIfWin();
      } else if (turnEven === 1) {
        clickBox.innerHTML = o;
        console.log(clickBox);
        console.log('box value is now false aka o');
        console.log('player o turn has been played');
        // checkIfWin();
      }
      turnCounter++;
    } else {
        alert('box is taken');
      }
      clickBox.style.backgroundColor = 'white';
    // if (turnCounter === 9) {
    //     alert('GAME OVER: DRAW.');
    //   }
    // need 'box is taken' func
  });
});




//button stuff
var button = document.querySelector('button');

button.addEventListener('click', function(){
  window.location.reload(true);
});


// PARTY MODE
var party = document.querySelector('a');
var partyStarted = document.querySelector('#partyStarted');

party.addEventListener('click', function(){
    var body = document.querySelector('body');

    title.style.color = 'white';
    partyStarted.innerHTML = '<img id ="partyStarted" src="../tic-tac-toe/images/rick-dance1.gif" alt = "lisa simpson dancing"></img>';
    body.style.backgroundImage = "url('../tic-tac-toe/images/partytime.gif')";
    party.innerText = 'PARTY!';
    var audio = new Audio('400611__valo__trance-bass-and-drums-loop.mp3');
    audio.loop = true;
    audio.play();
    console.log('i should change background & play music and other stuff');
});

// })


// -------------------------------------------------------------------

// TRASH PILE aka code i tried to use but didn't work, may come back to


// FOR CHANGING COLORS IN PARTY MODE

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
// boardBox.style.backgroundColor = 'rgba(0,0,0,0)';
// color = colors.shift();
// colors.push(color);
// body.style.backgroundColor = changeColors;
// function changeColors(){
//   for (var i = 0; i < colors.length; i++) {
//     title.style.color = colors[i];
//     setTimeout(changeColors, 1000);
//   }
// }

// FOR GAME LOGIC/TESTING TO SEE IF THERE IS A WIN

// function isSame(){
//   row1.forEach('.box', function (){
//     if (clickBoxValue === true){
//       alert('Player X wins.');
//     }
//   }
// )};

// FOR GAME LOGIC/SHOWING WIN POSSIBILITES

// //   row1 = document.querySelector('clickBoxValue = ')
// //   row2
// //   row3
// //   row a
// //   row b
// //   row c
// //   row1 a, row2 b, row3 c
// //   row1 c, row2 b, row3 a

// MORE FAILED GAME LOGIC

// function checkIfWin () {
//
// }
//
// // var row1 = [...document.querySelectorAll('.row1')];
// // var row2 = [...document.querySelectorAll('.row2')];
// // var row3 = [...document.querySelectorAll('.row3')];
// // var rowA = [...document.querySelectorAll('.row .a')];
// // var rowC = [...document.querySelectorAll('.row .c')];
// // var rowB = [...document.querySelectorAll('.row .b')];

// if ((win[1] === 'x') && (win[2] === 'x') && (win[3] === 'x')) {
//   alert('player x wins');
// }

// var a1 = document.querySelector('#a1');
// var a2 = document.querySelector('#a2');
// var a3 = document.querySelector('#a3');
// var b1 = document.querySelector('.row2 .box .a');
// var b2 = document.querySelector('.row2 .box .b');
// var b3 = document.querySelector('.row2 .box .c');
// var c1 = document.querySelector('.row3 .box .a');
// var c2 = document.querySelector('.row3 .box .b');
// var c3 = document.querySelector('.row3 .box .c');
