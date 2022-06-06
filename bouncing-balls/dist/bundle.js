(function () {
  'use strict';

  // 生成随机数的函数
  function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
  }

  //生成随机颜色
  function randomColor() {
    return "rgb(" + random(0, 255) + ", " + random(0, 255) + ", " + random(0, 255) + ")";
  }

  class Ball {

    constructor(x, y, sx, sy, color, size) {
      this._x = x;
      this._y = y;
      this._sx = sx;
      this._sy = sy;
      this._color = color;
      this._size = size;
      this._exists = true;
    }

    get x() {
      return this._x;
    }

    set x(newX) {
      this._x = newX;
    }

    get y() {
      return this._y;
    }

    set y(newY) {
      this._y = newY;
    }

    get sx() {
      return this._sx;
    }

    set sx(newSX) {
      this._sx = newSX;
    }

    get sy() {
      return this._sy;
    }

    set sy(newSY) {
      this._sy = newSY;
    }

    get color() {
      return this._color;
    }

    set color(newColor) {
      this._color = newColor;
    }

    get size() {
      return this._size;
    }

    set size(newSize) {
      this._size = newSize;
    }

    get exists() {
      return this._exists;
    }

    set exists(value) {
      this._exists = value;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
    }

    move(width, height) {
      if ((this.x + this.size) >= width) {
        this.sx = -(this.sx);
      }

      if ((this.x - this.size) <= 0) {
        this.sx = -(this.sx);
      }

      if ((this.y + this.size) >= height) {
        this.sy = -(this.sy);
      }

      if ((this.y - this.size) <= 0) {
        this.sy = -(this.sy);
      }

      this.x += this.sx;
      this.y += this.sy;
    }

  }

  //game element
  const game_ele_arr = document.getElementsByClassName("game");
  const game_ele = game_ele_arr[0];

  //a element
  const a_ele = document.getElementsByTagName("a");

  const collapse = a_ele[0];
  collapse.onclick = function () {
    const gameboard_ele_arr = document.getElementsByClassName("game-board");
    const gameboard_ele = gameboard_ele_arr[0];
    gameboard_ele.hidden = true;
  };

  //button element
  const btn_ele_arr = document.getElementsByTagName("button");
  const btn_ele = btn_ele_arr[0];

  //game music
  const audio_arr = document.getElementsByTagName("audio");
  audio_arr[0];
  // let shodowDom = audio_ele.attachShadow({ mode: "open" });

  // ball numer 
  const em_ele_arr = document.getElementsByTagName("em");
  const em_ele = em_ele_arr[0];

  class Hale extends Ball {

    constructor(x, y, color, size) {
      super(x, y, 0, 0, color, size);
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.strokeStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.stroke();
    }
  }

  class GameAudio extends HTMLElement {

    constructor() {
      super();

      this.isPlay = false;
      this.innerHTML = "<img src='/media/mute.png'>";

      const gameAudio = new Audio("/media/happy.mp3");
      gameAudio.loop = true;
      gameAudio.muted = true;

      this.onclick = function () {
        if (this.isPlay) {
          this.innerHTML = "<img src='/media/mute.png'>";
          gameAudio.muted = true;
          gameAudio.pause();
        } else {
          this.innerHTML = "<img src='/media/play.png'>";
          gameAudio.muted = false;
          gameAudio.play().catch((err) => {
            console.log(err);
          });
        }
        this.isPlay = !this.isPlay;
      };
    }

  }

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
      let sx = random(-7, 7);
      let sy = random(-7, 7);
      //防止圆球静止不动
      if (sx === 0) {
        sx = random(1, 5);
      }
      if (sy === 0) {
        sy = random(1, 5);
      }
      let ball = new Ball(// 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
        random(0 + size, width - size), random(0 + size, height - size), sx, sy, randomColor(), size);
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

})();
