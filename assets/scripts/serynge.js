
// Criação da classe Character para a criação dos inimigos e do personagem controlável pelo player.

class Serynge {
  constructor(ctx) {
    this.ctx = ctx;
  }

  render() {
    const imgSerynge = new Image();
    imgSerynge.src = "./images/syringe.png";

    imgSerynge.addEventListener("load", () => {
     this.ctx.drawImage(imgSerynge, 280, 245, 40, 40);
    });
  }
}
