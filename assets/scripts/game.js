class Game {
  constructor() {
    this.canvas = document.getElementById("canvasId");
    this.ctx = this.canvas.getContext("2d");
    this.height = 400;
    this.width = 600;
    this.activeKeys = {
      ArrowLeft: false,
      ArrowRight: false,
      Space: false,
    };

    this.covids = [];
    this.projectiles = [];
    this.syringe = new Syringe(this.ctx, 280, 245);

    this.background = new Image();
    this.background.src = "./images/tlo.png";
    this.gameSound = new Audio("./images/BackgroundSound.wav");
    this.gameSound.volume = 0.2;
    this.shootSound = new Audio("./images/shootSound.mp3");
    this.shootSound.volume = 0.4;

    this.background.addEventListener("load", () => {
      this.renderBackground();
    });

    this.score = 0;
    this.gameInterval = null; // Guarda a ID do setInterval
    this.generateCovidsInterval = null;
  }

  setup() {
    this.gaming = true;
    this.gameSound.play();
    this.gameSound.loop = true;
    this.generateCovids();

    document.addEventListener("keydown", (event) => {
      const activeKey = event.code;
      this.activeKeys[activeKey] = true;
    });

    document.addEventListener("keyup", (event) => {
      const activeKey = event.code;

      if (this.activeKeys["Space"]) {
        this.newProjectile();
        this.shootSound.play();
      }

      this.activeKeys[activeKey] = false;
    });
  }

  run() {
    this.gameInterval = setInterval(() => {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.renderBackground();
      this.syringe.render();
      this.syringe.move(this.activeKeys);
      this.moveCovidsAndProjectiles();
      this.updateScore(this.score);
    }, 1000 / 60);
  }

  updateScore() {
    this.ctx.fillStyle = "black";
    this.ctx.font = "20px Arial";
    this.ctx.fillText(`Score: ${this.score}`, this.canvas.width - 335, 320);
  }

  newProjectile() {
    this.projectiles.push(new Projectile(this.ctx, this.syringe.x, 240));
  }

  generateCovids() {
    this.generateCovidsInterval = setInterval(() => {
      const x = Math.floor(Math.random() * 510) + 25;
      const y = -30;
      this.covids.push(
        new Covid(this.ctx, "./images/coronavirus (1).png", x, y)
      );
    }, 1500);
  }

  renderImages() {
    this.renderBackground();
    this.syringe.render();
  }

  renderBackground() {
    this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
  }

  collisionCovidAndProjectile(projectile, projectilePosition) {
    this.covids.forEach((covid, covidPosition) => {
      const conditions = [
        projectile.top() <= covid.bottom(),
        projectile.left() >= covid.left(),
        projectile.left() <= covid.right(),
        projectile.right() >= covid.left(),
        projectile.right() <= covid.right(),
      ];

      const collision1 = conditions[0] && conditions[1] && conditions[2]; // Canto superior esquerdo
      const collision2 = conditions[0] && conditions[3] && conditions[4]; // Canto superior direito

      if (collision1 || collision2) {
        this.projectiles.splice(projectilePosition, 1);
        this.covids.splice(covidPosition, 1);
        this.score ++;
      }
    });
  }

  moveCovidsAndProjectiles() {
    for (let i = 0; i < this.covids.length; i++) {
      const currentCovid = this.covids[i];

      currentCovid.move();

      // Game Over
      if (currentCovid.bottom() > 285) {
        this.gameSound.pause();
        clearInterval(this.gameInterval);
        clearInterval(this.generateCovidsInterval);
        alert("You got infected!");
      }

      currentCovid.render();
    }

    if (this.projectiles.length) {
      for (let i = 0; i < this.projectiles.length; i++) {
        const currentProjectile = this.projectiles[i];

        currentProjectile.move();

        this.collisionCovidAndProjectile(currentProjectile, i);

        // Remove o projétil do array quando sair do canvas
        if (currentProjectile.top() < 0 - currentProjectile.height) {
          this.projectiles.splice(i, 1);
        } else {
          currentProjectile.render();
        }
      }
    }
  }
}