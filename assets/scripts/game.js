// Criação da classe game que irá comandar todo o board.

class Game {
  constructor() {
    this.canvas = document.getElementById("canvasId");
    this.ctx = this.canvas.getContext("2d");
    this.height = 400;
    this.width = 600;
    this.serynge = new Serynge(this.ctx);
    this.covids = [];
    this.totalCovids = 6;
    
    this.background = new Image();
    this.background.src = "./images/tlo.png";
    this.background.addEventListener("load", () => {
      this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
    });
    
  }
  //Iniciando a criação de métodos para classe Game
  
  newCovid(){
    for (let i = 1; i <= this.totalCovids; i++){
      this.covids.push(new Covid(this.ctx,"./images/coronavirus (1).png", 80*i , 60))
    }
  }
  
  renderImages() {
    this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
    this.serynge.render();


    for (let i = 0; i < this.covids.length; i++){
      this.covids[i].render();
    }
  }

  move(){
    for (let i = 0; i < this.covids.length; i++){
      this.covids[i].move();
    }
  }


  run() {
      this.newCovid();
    setInterval(() => {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.move();
      this.renderImages();
    }, 1000/60)

  }
}
