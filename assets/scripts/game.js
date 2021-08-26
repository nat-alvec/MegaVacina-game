// Criação da classe game que irá comandar todo o board.

class Game {
  constructor() {
    this.canvas = document.getElementById("canvasId");
    this.ctx = this.canvas.getContext("2d");
    this.height = 400;
    this.width = 600;

    this.serynge = new Serynge(this.ctx, 280, 245);
    this.covid = new Covid(
      this.ctx,
      "./images/coronavirus (1).png",
      this.x,
      this.y
    );
    this.projectile = new Projectile(this.ctx, this.x, this.x);

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
    this.projectiles.push(new Projectile(this.ctx, this.serynge.x + 5, 240));
  }

  newCovid() {
    setInterval(() => {
      const x = Math.floor(Math.random() * 510) + 25;
      const y = -30;
      this.covids.push(
        new Covid(this.ctx, "./images/coronavirus (1).png", x, y)
      );
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

  collisionCovidAndFloor() {
    for (let i = 0; i < this.covids.length; i++){
      if (this.covids[i].bottom() > 285){
        alert("You got infected!")
      }
    }
  }

  collisionCovidAndProjectile() {
    if (this.projectiles.length != 0) {
      this.projectiles.forEach((projectile, projectilePosition) => {
        this.covids.forEach((covid, covidPosition) => {
          console.log(projectile, covid)
          const impact = [
            projectile.top() <= covid.bottom(),
            projectile.left() >= covid.left(),
            projectile.left() <= covid.right(),
            projectile.right() <= covid.bottom(),
            projectile.right() >= covid.left(),
            projectile.right() <= covid.right()
          ]
          
          if (impact[0] && impact[1] && impact[2]) {
            console.log('colisão!!!', projectile, covid)
            this.projectiles.splice(projectilePosition, 1)
            this.covids.splice(covidPosition, 1)
          }
        })
      })
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

  setUp() {
    this.gaming = true;
    this.newCovid();

    document.addEventListener("keydown", (event) => {
      const key = event.keyCode;
      this.activeKeys[key] = true;
    });

    document.addEventListener("keyup", (event) => {
      const key = event.keyCode;
      this.activeKeys[key] = false;

      if (key === 32) {
        this.newProjectile();
      }
    });
  }

  run() {
    setInterval(() => {
      this.collisionCovidAndFloor();
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.serynge.move(this.activeKeys);
      this.collisionCovidAndProjectile();
      this.moveCovidsAndProjectiles();
      this.renderImages();
    }, 1000 / 60);
  }
}