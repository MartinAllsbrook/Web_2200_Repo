// Check that the JS is working
console.log("JS RUNNING");

// Call grid generator
genDivs(16);

// Create all variables for snake
// Bools to track direction of snake
let up = false;
let right = false;
let down = false;
let left = false;
// Strings to compare the position of the snakes head and tail to div ids
let snakeHead = ["0 0"];
let snakeTail = ["0 0"];
// Int to tarack the snakes length
let snakeLength = 3;
// Ints to track the x & y positions of the snakes head and tail
let xTail = 0;
let yTail = 0;
let xHead = 0;
let yHead = 0;
// Ints to track the current food items position
let xFood = 15;
let yfood = 15;
// String to compare the food's pos to the div ids
let foodPos = ["15 15"];
// Bool to track wether or not there is a food item on the board
let isFood = false;
// Arays to track where the snake currently is
let xHistory = [0];
let yHistory = [0];
// Bool to track if the player lost
let gameOver = false;


// Event listener scanning for arrow key presses
window.addEventListener('keydown', function(e) {
  // console.log('You pressed ' + e.key); // TESTING LINE
  // If the ArrowUp key is pressed and the snake isnt going down, set the snakes current state to up
  if(e.key == "ArrowUp" && !down){
    // console.log('Up Sucess'); // TESTING LINE
    // Set up to true and all other directions to false
    up = true;
    right = false;
    down = false;
    left = false;
  // Repeat with right/left
  }else if(e.key == "ArrowRight" && !left){
    up = false;
    right = true;
    down = false;
    left = false;
  // Repeat with down/up
  }else if(e.key == "ArrowDown" && !up){
    up = false;
    right = false;
    down = true;
    left = false;
  // Repeat with left/right
  }else if(e.key == "ArrowLeft" && !right){
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

// Turn on the top left cell to indicate starting position
document.getElementById(snakeHead).classList.toggle('cellOn');

// Call main(), everything below this is functions
main();

//--------------------------------------------------------------------------------------------------------------//

// main() waits for the player to press a key, and then starts the game
function main() {
  // Run this function repeatedly every 100milisec
  setTimeout(function onTick() {
    // Only accepts a right or down keypress because left and up would immeadiately end the game
    // If one of these keys is pressed start the game with gameOn()
    if(right||down){
      gameOn();
    // Else call main again till a key is pressed
    }else{
      main();
    }
  }, 100)
}

function gameOn() {
  // Run this function repeatedly every 100milisec
  setTimeout(function onTick() {
    // console.log("up: "+ up); // TESTING LINE
    // console.log("right: "+ right); // TESTING LINE
    // console.log("down: "+ down); // TESTING LINE
    // console.log("left: "+ left); // TESTING LINE

    // If there isnt food on the board, generate a food item in any position except where the snake is
    if(!isFood){
      genFood();
    }

    //console.log(Math.floor(Math.random() * 16)); // TESTING LINE

    // Change xHead & yHead based on the snakes current movement state / the player's last button press
    if(up){
      // Must ask if yHead > 0 to keep the snake within the top bound
      if(yHead > 0){
        // Decrease yHead by one to move snake
        yHead--;
      }else{
        gameOver = true;
        alert("Snake hit wall, Game Over :(");
      }
    }else if(down){
      // Must ask if yHead < 15 to keep the snake within the bottom bound
      if(yHead < 15){
        yHead++;
      }else{
        gameOver = true;
        alert("Snake hit wall, Game Over :(");
      }
    }else if(left){
      // Must ask if xHead > 0 to keep the snake within the left bound
      if(xHead > 0){
        xHead--;
      }else{
        gameOver = true;
        alert("Snake hit wall, Game Over :(");
      }
    }else if(right){
      // Must ask if xHead < 15 to keep the snake within the right bound
      if(xHead < 15){
        xHead++;
      }else{
        gameOver = true;
        alert("Snake hit wall, Game Over :(");
      }
    }

    // Put the snake's head location into an array of where the snake has been
    xHistory.push(xHead);
    yHistory.push(yHead);

    // Set snakeHead string to hold the snakeHead's current location
    snakeHead = [xHead + " " + yHead];
    // console.log(snakeHead); // TESTING LINE;
    if(document.getElementById(snakeHead).className == "cell") {
      document.getElementById(snakeHead).classList.toggle('cellOn');
    }else if(document.getElementById(snakeHead).className == "cell cellFood"){
      document.getElementById(snakeHead).classList.toggle('cellFood');
      document.getElementById(snakeHead).classList.toggle('cellOn');
      snakeLength++;
      isFood = false;
    }else if(!gameOver){
      gameOver = true;
      alert("Snake hit its self, Game Over :(");
    }

    // Once the snake has moved enough start removing it's tail
    if(xHistory.length > snakeLength){
      // Set the tail location to be snakeLength units into the snakes history
      xTail = [xHistory[xHistory.length - 1 - snakeLength]];
      yTail = [yHistory[yHistory.length - 1 - snakeLength]];
      snakeTail = [xTail + " " + yTail];
      // Remove the items in snake history that are no longer part of the snake
      xHistory.splice(xHistory.length - 1 - snakeLength, 1);
      yHistory.splice(yHistory.length - 1 - snakeLength, 1);

      // console.log(xHistory); // TESTING LINE
      // console.log(yHistory); // TESTING LINE
      // console.log(snakeTail); // TESTING LINE
      if(document.getElementById(snakeTail).className == "cell cellOn") {
        // console.log("yes"); // TESTING LINE
        document.getElementById(snakeTail).classList.toggle('cellOn');
      }
    }

    // If the game is over call gameIsOver to end the game and don't call gameOn again
    if(gameOver){
      gameIsOver()
    // Else call gameOn again
    }else{
      gameOn();
    }

  }, 100)
}

function genFood(){
  xFood = Math.floor(Math.random() * 16);
  yFood = Math.floor(Math.random() * 16);
  foodPos = [xFood + " " + yFood];

  // if the randomly chosen coords are an empty cell
  if(document.getElementById(foodPos).className == "cell") {
    // turn the randomly chosen coords into food
    document.getElementById(foodPos).classList.toggle('cellFood');
    // set isFood to true bcause there is now food on the board
    isFood = true;
  // Else the random coords must be part of the snake so we call genFood again to re-try
  }else{
    genFood();
  }
}

function gameIsOver(){
  document.getElementById("header").innerHTML = "GAME OVER"
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
            // Set the id of each cell to be its coordinates in the grid x = left-->right, y = top-->bottom
            cell.setAttribute("id", x + " " + i);
            // Add the new div to the current row
            row.appendChild(cell);
        }
        // Add the new row to the section
        e.appendChild(row);
      }
    }
