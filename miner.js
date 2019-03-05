
// var miner    = Math.round(Math.random()*10);
var miner_row = Math.round(Math.random()*10);
var miner_col = Math.round(Math.random()*10);

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

// function moveLeft(){
//   if (miner_col > 10) {
//     miner_col--;
//   }else {
//     miner = 10;
//   }
//   show()
// }



function moveRight(){
  if (miner_col < 10) {
    miner_col++;
  }else {
    miner_col = 1;
  }
  show();
}
function moveLeft(){
  if (miner_col < 1) {
    miner_col = 10;
  }else {
    miner_col--;
  }
  show();
}
function moveUp(){
  if (miner_row < 1) {
    miner_row = 10;
  }else {
    miner_row--;
  }
  show();
}
function moveDown(){
  if (miner_row < 10) {
    miner_row++;
  }else {
    miner_row = 1;
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
        div.innerHTML +=
            `<div class="grass">
              ${content}
            </div>`
            ;
        }
//////////////////////////////////// ACESTA ESTE UN RIND
}
}
show();
