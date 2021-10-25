console.log("JS RUNNING");

// Call grid generator
genDivs(16);

//Create snake

let up = false;
let right = false;
let down = false;
let left = false;
let snakeHead = ["0 0"]
let snakeTail = ["0 0"]
let snakeLength = 3;
let xTail = 0;
let yTail = 0;
let xHead = 0;
let yHead = 0;
let xHistory = [0];
let yHistory = [0];

window.addEventListener('keydown', function(e) {
  // console.log('You pressed ' + e.key); // TESTING LINE
  if(e.key == "ArrowUp"){
    // console.log('Up Sucess'); // TESTING LINE
    up = true;
    right = false;
    down = false;
    left = false;
  }else if(e.key == "ArrowRight"){
    up = false;
    right = true;
    down = false;
    left = false;
  }else if(e.key == "ArrowDown"){
    up = false;
    right = false;
    down = true;
    left = false;
  }else if(e.key == "ArrowLeft"){
    up = false;
    right = false;
    down = false;
    left = true;
  }else{
    console.log("BAD KEYPRESS");
  }
});

// TESTING LINES
// document.getElementById(snakeHead).classList.toggle('cellOn')
// console.log(document.getElementById(snakeHead).className);
// console.log(document.getElementById(snakeHead).className == "cell cellOn");

document.getElementById(snakeHead).classList.toggle('cellOn')
main()

function main() {
  setTimeout(function onTick() {
    if(right||down){
      gameOn();
    }else{
      // Call main again till game starts
      main();
    }
  }, 100)
}

function waitToStart(){

}

function gameOn() {
  setTimeout(function onTick() {
    // console.log("up: "+ up); // TESTING LINE
    // console.log("right: "+ right); // TESTING LINE
    // console.log("down: "+ down); // TESTING LINE
    // console.log("left: "+ left); // TESTING LINE

    // move xHead up if up arrow hit
    if(up){
      if(yHead > 0){
        yHead--;
      }
    }else if(down){
      if(yHead < 15){
        yHead++;
      }
    }else if(left){
      if(xHead > 0){
        xHead--;
      }
    }else if(right){
      if(xHead < 15){
        xHead++;
      }
    }

    xHistory.push(xHead);
    yHistory.push(yHead);
    snakeHead = [xHead + " " + yHead];
    console.log(snakeHead);
    if(document.getElementById(snakeHead).className == "cell") {
      document.getElementById(snakeHead).classList.toggle('cellOn');
    }
    if(xHistory.length > snakeLength){
      xTail = [xHistory[xHistory.length - 1 - snakeLength]]
      yTail = [yHistory[yHistory.length - 1 - snakeLength]]
      //console.log(xHistory + " , " + yHistory) // TESTING LINE
      snakeTail = [xTail + " " + yTail];
      //xHistory.splice(xHistory.length - 1 - snakeLength)
      //yHistory.splice(yHistory.length - 1 - snakeLength)
      console.log(snakeTail);
      if(document.getElementById(snakeTail).className == "cell cellOn") {
        console.log("yes");
        document.getElementById(snakeTail).classList.toggle('cellOn');
      }
    }

    // Call gameOn again
    gameOn();
  }, 100)
}

// Funtion to generate snake board
function genDivs(v){
      // Generates board in snakeBoard section
      var e = document.getElementById("snakeBoard");
      // For each row
      for(var i = 0; i < v; i++){
        // Generate a div with class name "row"
        var row = document.createElement("div");
        row.className = "row";
        // For each column in that row
        for(var x = 0; x <= v-1; x++){
            // Generate a div with class name "cell"
            var cell = document.createElement("div");
            cell.className = "cell";
            // Set the id of each cell to be its prosition in the grid left-->right, top-->bottom
            cell.setAttribute("id", x + " " + i);
            // Add the new div to the current row
            row.appendChild(cell);
        }
        // Add the new row to the section
        e.appendChild(row);
      }
    }
