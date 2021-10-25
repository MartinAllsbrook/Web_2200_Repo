let snake = [
  {x: 200, y: 200},
  {x: 190, y: 200},
  {x: 180, y: 200},
  {x: 170, y: 200},
  {x: 160, y: 200}
]


const board_border = "white";
const board_background = "black";
const snake_col = 'lightblue';
const snake_border = 'darkblue';



// Get the canvas element
const snakeBoard = document.getElementById("snakeBoard");
// Return a two dimensional drawing context
const snakeBoard_ctx = snakeBoard.getContext("2d");
// Start game
main();

// main function called repeatedly to keep the game running
function main() {
    clearCanvas();
    drawSnake();
}

// draw a border around the canvas
function clearCanvas() {
  //  Select the colour to fill the drawing
  snakeBoard_ctx.fillStyle = board_background;
  //  Select the colour for the border of the canvas
  snakeBoard_ctx.strokestyle = board_border;
  // Draw a "filled" rectangle to cover the entire canvas
  snakeBoard_ctx.fillRect(0, 0, snakeBoard.width, snakeBoard.height);
  // Draw a "border" around the entire canvas
  snakeBoard_ctx.strokeRect(0, 0, snakeBoard.width, snakeBoard.height);
}

// Draw the snake on the canvas
function drawSnake() {
  // Draw each part
  snake.forEach(drawSnakePart)
}

// Draw one snake part
function drawSnakePart(snakePart) {

  // Set the colour of the snake part
  snakeBoard_ctx.fillStyle = snake_col;
  // Set the border colour of the snake part
  snakeBoard_ctx.strokestyle = snake_border;
  // Draw a "filled" rectangle to represent the snake part at the coordinates
  // the part is located
  snakeBoard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  // Draw a border around the snake part
  snakeBoard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}
