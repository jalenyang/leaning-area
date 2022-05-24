import { Ball } from "./ball.js";
import { btn_ele, em_ele, game_ele } from "./ele";
import { Hale } from "./hale";
import { random, randomColor } from "./utils";
import { GameAudio } from "./game-audio";

// 设置画布
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width = game_ele.clientWidth;
const height = canvas.height = game_ele.clientHeight;
let balls = [];


const haleSize = 30;
let haleX = random(0 + haleSize, width - haleSize);
let haleY = random(0 + haleSize, height - haleSize);

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  const haleBall = createHale();

  for (let i = 0; i < balls.length; i++) {
    balls[i].draw(ctx);
    balls[i].move(width, height);
    collisionDetect(haleBall);
  }

  requestAnimationFrame(loop);
}

function collisionDetect(ball) {
  for (let j = 0; j < balls.length; j++) {
    if (ball !== balls[j]) {
      const dx = ball.x - balls[j].x;
      const dy = ball.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < ball.size + balls[j].size) {
        balls[j].color = ball.color = randomColor();
        balls.splice(j, 1);
        em_ele.textContent = balls.length;
      }
    }
  }
}

function seedBalls(num) {
  while (balls.length < num) {
    const size = random(10, 20);
    let ball = new Ball(// 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
      random(0 + size, width - size), random(0 + size, height - size), random(-7, 7), random(-7, 7), randomColor(), size);
    balls.push(ball);
  }
  em_ele.textContent = balls.length;
}

function createHale() {
  const hale = new Hale(haleX, haleY, "white", haleSize);
  hale.draw(ctx);
  return hale;
}

function start() {
  seedBalls(25);
  loop();
}

//button element
btn_ele.onclick = function () {
  restart();
};

function restart() {
  balls = [];
  haleX = random(0 + haleSize, width - haleSize);
  haleY = random(0 + haleSize, height - haleSize);
  seedBalls(25);
}

function init() {
  customElements.define("game-audio", GameAudio);
}

function main() {
  init();
  start();
}

main();
