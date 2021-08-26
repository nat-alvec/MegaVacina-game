// Criação da classe Character para a criação dos inimigos e do personagem controlável pelo player.
class Syringe {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.velocity = 5;
    this.moveLeft = "ArrowLeft";
    this.moveRight = "ArrowRight";

    this.imgSyringe = new Image();
    this.imgSyringe.src = "./images/syringe.png";
    this.imgSyringe.addEventListener("load", () => {
      this.render();
    });
  }

  render() {
    this.ctx.drawImage(
      this.imgSyringe,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  move(activeKeys) {
    const isMovingLeft = activeKeys[this.moveLeft];
    const isMovingRight = activeKeys[this.moveRight];
    const maxLimit = this.x > 530;
    const minLimit = this.x < 25;

    if (isMovingLeft) {
      this.x -= this.velocity;
    } else if (isMovingRight) {
      this.x += this.velocity;
    }

    if (minLimit) {
      this.x = 25;
    } else if (maxLimit) {
      this.x = 530;
    }
  }
}