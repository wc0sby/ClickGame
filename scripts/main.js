'use strict'

$(document).ready(function(){
// Need to revise this to be a while statment or build the nested if
// moveIt();


let move ={
  clickCount:0,
  clickScore:0,
  clickIncr:1,
  clickTime:1000
};
let board = $('#score-board');
let actionButton = $('#moveMe');
let btn = $('.powerUp');
let giftBox = $('#theGift');
let end = window.innerWidth;

setInterval(moveIt,move.clickTime);

function moveIt(){
  move.clickScore += move.clickIncr;
  move.clickCount += move.clickIncr;
  if (move.clickCount >= end) {
      move.clickCount = -100;
    }else {
      move.clickCount++;
      giftBox[0].style.left = move.clickCount + 'px';
      }
  score();
};

function score(){
  board.html(`<p>`+move.clickScore+'</p');
  $('#status').html(move.clickIncr+" Clicks per second")
  document.title = "Santa's Workshop - "+move.clickScore +" points";
}

actionButton.click(function(){
  move.clickScore += move.clickIncr;
  //Review this later...don't think this is needed
  move.clickCount += move.clickIncr;
  score();
})

btn.click(function(){
  let cost = Number($(this).data("value"));
  if (cost < move.clickScore) {
    move.clickScore -= cost;
    switch (cost) {
      case 100:
        move.clickIncr ++;
      break;
      case 1000:
        move.clickIncr += 2;
        move.clickTime *= .025;
      break;
      case 10000:
        move.clickIncr += 3;
        move.clickTime *= .05;
      break;
      case 100000:
        move.clickIncr += 4;
        move.clickTime *= .075;
      break;
    }

  }
  score();
})
//
//
//   switch (score) {
//     case 100:
//       actionButton.click(function(){
//       score+=bonusClick;
//       start+=bonusClick*0.05;
//       giftBox[0].style.left = start + 'px';
//       board.html(`<p>`+score+`</p>`);
//       console.log(board.html);
//     });
//       break;
//     default:
//
//   }
//
//   function autoClicker(){
//   if (start >= 720) {
//     start = 0;
//     slide = 10;
//   }else {
//     score++;
//     start++;
//     giftBox[0].style.left = start + 'px';
//     giftBox[0].style.top = slide + 'px';
//     board.html(`<p>`+score+`</p>`);
//     }
//   }
// }
//
//
//
// // Creates the click event and counter.
// // Holds var called bonusClick to increase count per click.
// let actionButton = $('#moveMe'),
// counter = 0, start = 0, giftBox = $('#theGift'), bonusClick = 1,
// board = $('#score-board');
//   actionButton.click(function(){
//   counter+=bonusClick;
//   start+=bonusClick*0.05;
//   giftBox[0].style.left = start + 'px';
//   board.html(`<p>`+counter+`</p>`);
//   console.log(board.html);
// });
//
//   let storeAutoClick = $('.store');
//   storeAutoClick.click(function(){
//     console.log($(this));
//     moveIt();
// })



});
