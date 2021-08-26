class Projectile {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.velocity = 2;

    this.imgProjectil = new Image();
    this.imgProjectil.src = "./images/laser.png";

    this.imgProjectil.addEventListener("load", () => {
      this.render();
    });
  }

  render() {
    this.ctx.drawImage(
      this.imgProjectil,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  move() {
    this.y -= this.velocity;
  }

  left() {
    return this.x + 10;
  }

  right() {
    return this.x + this.width - 10;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }
}