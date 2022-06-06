import { random } from "./utils";

export class Ball {

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
