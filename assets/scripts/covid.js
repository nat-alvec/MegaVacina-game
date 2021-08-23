

class Covid {
    constructor(ctx, img, x, y) {
      this.ctx = ctx;                                 // ctx que dará acesso ao ctx da classe Game
      this.img = img;                                 // string do caminho da imagem
      this.x = x;                                    // posição inicial
      this.y = y;
      this.velocity = 1;
      
      this.imgCovid = new Image();
      this.imgCovid.src = this.img;
      this.imgCovid.addEventListener("load", () => {
        this.ctx.drawImage(this.imgCovid, this.x, this.y, 30, 30);
      });                    
    }

    move(){
        this.x = this.x + this.velocity
    }
  
    render() {
        this.ctx.drawImage(this.imgCovid, this.x, this.y, 30, 30);
    }

  }

