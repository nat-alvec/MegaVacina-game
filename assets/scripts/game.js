class Game {
  constructor() {
    this.canvas = document.getElementById("canvasId");
    this.ctx = this.canvas.getContext("2d");
    this.height = 400;
    this.width = 600;
  }
  
  //Iniciando a criação de métodos para classe Game
  
  renderBackground() {
    const imgBackground = new Image();        // Instanciando a classe Image
    imgBackground.src = "./images/tlo.png";

    imgBackground.addEventListener("load", () => {
      this.ctx.drawImage(imgBackground, 0, 0, 600, 400);
    });
  }

  renderSerynge() {
    const imgSerynge = new Image();
    imgSerynge.src = "./images/syringe.png";

    imgSerynge.addEventListener("load", () => {
    this.ctx.drawImage(imgSerynge, 255, 245, 40, 40);
    })
  }

  renderEnemy() {
   const imgEnemy1 = new Image();
   imgEnemy1.src = "./images/coronavirus (1).png";

   imgEnemy1.addEventListener("load", () => {
   this.ctx.drawImage(imgEnemy1, 255, 60, 30, 30)
   })
  }
}
