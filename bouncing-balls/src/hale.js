import { Ball } from "./ball";

export class Hale extends Ball {

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
