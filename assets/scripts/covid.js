class Covid {
  constructor(ctx, img, x, y) {
    this.ctx = ctx;                                 // ctx que dará acesso ao ctx da classe Game
    this.img = img;                                 // string do caminho da imagem
    this.x = x;                                    // posição inicial
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.velocity = 0.3;
    
    this.imgCovid = new Image();
    this.imgCovid.src = this.img;
    this.imgCovid.addEventListener("load", () => {
      this.ctx.drawImage(this.imgCovid, this.x, this.y, this.width, this.height);
    });                    
  }

  move(){
      this.y += this.velocity
  }

  render() {
      this.ctx.drawImage(this.imgCovid, this.x, this.y, 30, 30);
  }

  left() {
    return this.x;
  }

  right () {
    return this.x + this.width;
  }

  top () {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

}



