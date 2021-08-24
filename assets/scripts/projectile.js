class Projectile {
    constructor(ctx, x, y) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.velocity = 0.5;
  
      this.imgProjectil = new Image();
      this.imgProjectil.src = "./images/laser.png";
      this.imgProjectil.addEventListener("load", () => {
        this.ctx.drawImage(this.imgProjectil, this.x, this.y, 30, 30);
      });
    }
  
    render() {
      this.ctx.drawImage(this.imgProjectil, this.x, this.y, 20, 20);
    }
  
    move() {
      this.y -= this.velocity;
    }
  }
  