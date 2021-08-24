// Criação da classe game que irá comandar todo o board.

class Game {
  constructor() {
    this.canvas = document.getElementById("canvasId");
    this.ctx = this.canvas.getContext("2d");
    this.height = 400;
    this.width = 600;

    this.serynge = new Serynge(this.ctx, 280, 245);

    this.covids = [];
    this.projectiles = [];

    this.background = new Image();
    this.background.src = "./images/tlo.png";
    this.background.addEventListener("load", () => {
      this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
    });

    this.activeKeys = {};
  }

  newProjectile() {
    if (this.activeKeys[32]) {
      this.projectiles.push(new Projectile(this.ctx, this.serynge.x, 230));
    }
  }

  newCovid() {
    setInterval(() => {
      const x = Math.random() * this.canvas.width;
      const y = -30;
      this.covids.push(
        new Covid(this.ctx, "./images/coronavirus (1).png", x, y)
      );
      console.log("enemy");
    }, 1500);
  }

  renderImages() {
    this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
    this.serynge.render();

    if (this.projectiles.length !== 0) {
      for (let i = 0; i < this.projectiles.length; i++) {
        this.projectiles[i].render();
      }
    }

    for (let i = 0; i < this.covids.length; i++) {
      this.covids[i].render();
    }
  }

  moveCovidsAndProjectiles() {
    for (let i = 0; i < this.covids.length; i++) {
      this.covids[i].move();
    }

    for (let i = 0; i < this.projectiles.length; i++) {
      this.projectiles[i].move();
    }
  }

  run() {
    this.newCovid();

    document.addEventListener("keydown", (event) => {
      const key = event.keyCode;
      this.activeKeys[key] = true;
    });

    document.addEventListener("keyup", (event) => {
      const key = event.keyCode;
      this.activeKeys[key] = false;
    });

    setInterval(() => {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.moveCovidsAndProjectiles();
      this.renderImages();
      this.serynge.move(this.activeKeys);
      this.newProjectile();
    }, 1000/60);
  }
}
