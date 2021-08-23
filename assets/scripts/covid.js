

class Covid {
    constructor(ctx, img, x, y) {
      this.ctx = ctx;                                 // ctx que dará acesso ao ctx da classe Game
      this.img = img;                                 // string do caminho da imagem
      this.x = x;                                    // posição inicial
      this.y = y;
      this.velocity = 1;                                  // posição inicial                         
    }

    move(){
        this.x = this.x + this.velocity
    }
  
    render() {
      const imgCovid = new Image();
      imgCovid.src = this.img;
  
      imgCovid.addEventListener("load", () => {
        this.ctx.drawImage(imgCovid, this.x, this.y, 30, 30);
      });
    }

  }

