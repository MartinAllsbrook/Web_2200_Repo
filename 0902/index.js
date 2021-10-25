console.log("JS RUNNING");

// Call grid generator
genDivs(16);

//Create snake
let snakeHead = ["0 0"]
let up = false;
let right = false;
let down = false;
let left = false;

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
    up = true;
    right = false;
    down = false;
    left = true;
  }else{
    console.log("BAD KEYPRESS");
  }
});

main();
let xHead = 0;
let yHead = 0;
function main() {
  setTimeout(function onTick() {
    // console.log("up: "+ up); // TESTING LINE
    // console.log("right: "+ right); // TESTING LINE
    // console.log("down: "+ down); // TESTING LINE
    // console.log("left: "+ left); // TESTING LINE

    // move xHead up if up arrow hit
    if(up){
      if(xHead > 0){
        xHead--;
      }else {
        xHead = 0;
      }
    }

    //
    snakeHead = [xHead + " " + yHead];


    // Call main again
    main();
  }, 100)
}

//document.getElementById("14").classList.toggle('cellOn') // TESTING LINE

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
