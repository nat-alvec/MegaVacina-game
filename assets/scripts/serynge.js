
// Criação da classe Character para a criação dos inimigos e do personagem controlável pelo player.

class Serynge {
  constructor(ctx) {
    this.ctx = ctx;

    this.imgSerynge = new Image();
    this.imgSerynge.src = "./images/syringe.png";
    this.imgSerynge.addEventListener("load", () => {
      this.ctx.drawImage(this.imgSerynge, 280, 245, 40, 40);
     });
  }

  render() {
     this.ctx.drawImage(this.imgSerynge, 280, 245, 40, 40);
  }
}
