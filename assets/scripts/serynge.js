// Criação da classe Character para a criação dos inimigos e do personagem controlável pelo player.

class Serynge {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.velocity = 5;
    this.left = 37;
    this.right = 39;

    this.imgSerynge = new Image();
    this.imgSerynge.src = "./images/syringe.png";
    this.imgSerynge.addEventListener("load", () => {
      this.ctx.drawImage(this.imgSerynge, this.x, this.y, 40, 40);
    });
  }

  render() {
    this.ctx.drawImage(this.imgSerynge, this.x, this.y, 40, 40);
  }

  move(activeKeys) {  
      const isMovingLeft = activeKeys[this.left];
      const isMovingRight = activeKeys[this.right];
      const maxLimit = this.x > 530;
      const minLimit = this.x < 25;

      if (isMovingLeft){
        this.x -= this.velocity;
        console.log(this.x)
      }
      if (isMovingRight){
        this.x += this.velocity;
        console.log(this.x)
      }
      if (minLimit){
        this.x = 25;
        console.log(this.x)
      }
      if (maxLimit){
        this.x = 530;
        console.log(this.x)
      }
  }
}