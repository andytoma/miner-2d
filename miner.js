const BOBM1COL = Math.round(Math.random()*10);
const BOBM1ROW = Math.round(Math.random()*10);
const BOBM2COL = Math.round(Math.random()*10);
const BOBM2ROW = Math.round(Math.random()*10);
const BOBM3COL = Math.round(Math.random()*10);
const BOBM3ROW = Math.round(Math.random()*10);
const BOBM4COL = Math.round(Math.random()*10);
const BOBM4ROW = Math.round(Math.random()*10);
const BOBM5COL = Math.round(Math.random()*10);
const BOBM5ROW = Math.round(Math.random()*10);
const BOBM6COL = Math.round(Math.random()*10);
const BOBM6ROW = Math.round(Math.random()*10);
const BOBM7COL = Math.round(Math.random()*10);
const BOBM7ROW = Math.round(Math.random()*10);

var miner_row = Math.round(Math.random()*10);
var miner_col = Math.round(Math.random()*10);
var miner_health = 5;  //Viata

function action(){
  // console.log( event );
  if (event.code == "ArrowRight") {
    moveRight();
  }if (event.code == "ArrowLeft") {
    moveLeft();
  }if (event.code == "ArrowUp") {
    moveUp();
  }if (event.code == "ArrowDown") {
    moveDown();
  }
}

function moveRight(){
  if (miner_col && miner_row == BOBM1COL && BOBM1ROW ) {
    miner_health--;
  }
  if (miner_col >= 10) {
    miner_col = 1;
  }else {
    miner_col++;
  }
  show();
}
function moveLeft(){
  if (miner_col <= 1) {
    miner_col = 10;
  }else {
    miner_col--;
  }
  show();
}
function moveUp(){
  if (miner_row <= 1) {
    miner_row = 10;
  }else {
    miner_row--;
  }
  show();
}
function moveDown(){
  if (miner_row >= 10) {
    miner_row = 1;
  }else {
    miner_row++;
  }
  show();
}

function show(){
  var div = document.getElementById('map'); //conectam div cu elem
    div.innerHTML=``;  //curatam divul

    for(var row = 1; row<=10; row++ ){
//////////////////////////////////// ACESTA ESTE UN RIND
      for(var col = 1; col<=10; col++ ){
        var content = '';
        if (miner_row == row && miner_col == col) {
          content = '<div class="miner"></div>';
        }


//////////////////////////////////// ACESTA ESTE UN RIND
////////////////////////////////////  BOMB

if (col == BOBM1COL && row == BOBM1ROW  ) {
  var content_2 = `<div class="bomb"></div>`
  }else {
  var content_2 = ``;
  }
if (col == BOBM2COL && row == BOBM2ROW  ) {
  var content_3 = `<div class="bomb"></div>`
  }else {
  var content_3 = ``;
  }
if (col == BOBM3COL && row == BOBM3ROW  ) {
  var content_4 = `<div class="bomb"></div>`
  }else {
  var content_4 = ``;
  }
if (col == BOBM4COL && row == BOBM4ROW  ) {
  var content_5 = `<div class="bomb"></div>`
  }else {
  var content_5 = ``;
  }
if (col == BOBM5COL && row == BOBM5ROW  ) {
  var content_6 = `<div class="bomb"></div>`
  }else {
  var content_6 = ``;
  }
if (col == BOBM6COL && row == BOBM6ROW  ) {
  var content_7 = `<div class="bomb"></div>`
  }else {
  var content_7 = ``;
  }
if (col == BOBM7COL && row == BOBM7ROW  ) {
  var content_8 = `<div class="bomb"></div>`
  }else {
  var content_8 = ``;
  }
  div.innerHTML += `<div class="grass"> ${content} ${content_2}${content_3}${content_4}${content_5}${content_6}${content_7}${content_8}</div>`;
}
}
var div_s = document.getElementById('score');
div_s.innerHTML ="Viata:= " +miner_health;
}
show();
