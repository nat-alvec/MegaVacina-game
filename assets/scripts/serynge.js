

class Serynge {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.velocity = 5;

    this.imgSerynge = new Image();
    this.imgSerynge.src = "./images/syringe.png";
    this.imgSerynge.addEventListener("load", () => {
      this.ctx.drawImage(this.imgSerynge, this.x, this.y, 40, 40);

      this.left = 37;
      this.rigth = 39;
      this.shoot = 32;
    });
  }

  render() {
    this.ctx.drawImage(this.imgSerynge, this.x, this.y, 40, 40);
  }

  move() {
    window.addEventListener("keydown", (event) => {
      const key = event.keyCode;
      if (key === this.left){
        this.x = this.x - this.velocity;
      }
      if (key === this.rigth){
        this.x = this.x + this.velocity;
      }
    });
  }
}
