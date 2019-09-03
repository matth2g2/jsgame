import Paddle from '/src/paddle.js';

let canvas = document.getElementById("edsongame");

let ctx = canvas.getContext("2d");

ctx.fillStyle = '#0ff';
//ctx.fillRect(20, 20, 100, 100);
//ctx.fillRect(200, 200, 50, 50);
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

function clearBoard() {
	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
}

const paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let lastTime = 0;

function edsonLoop(timeStamp) {
  let dt =  lastTime ? (timeStamp - lastTime) : 0;
  lastTime = timeStamp;
  clearBoard();
  paddle.update(dt);
  paddle.draw(ctx);
  
  requestAnimationFrame(edsonLoop);
}

edsonLoop(0);


