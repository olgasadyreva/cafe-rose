'use strict';

const widthField = $('.field').width();
const heightField = $('.field').height();
const sizeBall = $('.ball').height();
const positionXLeft = 0;
const positionXRight = widthField - sizeBall;

let newPositionX = '';
let newPositionY = '';
let message = '';
let counterComandLeft = 0;
let counterComandRight = 0;
let player = 'comandleft';


const ymin = heightField/2 - 0.1759*heightField;
const ymax = heightField/2 + 0.1759*heightField - sizeBall;
  
  
$('.ball').on('click', function () {
    
  const currentPosition = $('.ball').position();     

  if (currentPosition.left < widthField/2) {
    player = 'comandleft';
    newPositionX = positionXRight;
    newPositionY = getRandomIntInclusive(0, heightField-sizeBall);
  }

  else {
    player = 'comandRight';
    newPositionX = positionXLeft;
    newPositionY = getRandomIntInclusive(0, heightField-sizeBall);
  } 
  
  $('.ball').animate({'left' : newPositionX, 'top' : newPositionY}, 600, 'linear');

  getGoal(newPositionY); 

});


function getRandomIntInclusive(min, max) {  
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}


function getGoal (y) {
  if ( ymin <= y && y <= ymax) {
    if (player == 'comandleft') {
      counterComandLeft++;
      getQuantityWin(counterComandLeft) ;      
    }
    else {
      counterComandRight++;
      getQuantityWin(counterComandRight) ; 
    }
  }
}  

function getQuantityWin(quantity) { 
  if (quantity == 3) {
    message = 'Игра окончена! Счет ' + counterComandLeft + ' : ' + counterComandRight;
    counterComandLeft = 0;
    counterComandRight = 0;      
  }
  else {
    message = 'Гооол! Счет ' + counterComandLeft + ' : ' + counterComandRight;
  }
  setTimeout(function() {alert(message)}, 1200); 
}
