
// Criação da classe game que irá comandar todo o board.

class Game {
  constructor() {
    this.canvas = document.getElementById("canvasId");
    this.ctx = this.canvas.getContext("2d");
    this.height = 400;
    this.width = 600;

    /* eslint-disable no-undef */
    this.serynge = new Character(this.ctx, "./images/syringe.png", 255, 240, 64, 64);
    this.enemies = new Character(this.ctx, "./images/coronavirus (1).png", 255, 60, 30, 30);

    // const enemies = ['inimigo 1', 'inimigo 2']
    /* eslint-enable no-undef */
  }
  
  //Iniciando a criação de métodos para classe Game

  run(){
      this.renderBackground();
      this.serynge.render();
      this.enemies.render();
  }
  
  renderBackground() {
    const imgBackground = new Image();        // Instanciando a classe Image
    imgBackground.src = "./images/tlo.png";

    imgBackground.addEventListener("load", () => {
      this.ctx.drawImage(imgBackground, 0, 0, this.width, this.height);
    });
  }

}
