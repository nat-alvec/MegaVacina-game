
// Criação da classe Character para a criação dos inimigos e do personagem controlável pelo player.

class Character {
  constructor(ctx, img, x, y, width, height) {
    this.ctx = ctx;                                 // ctx que dará acesso ao ctx da classe Game
    this.img = img;                                 // string do caminho da imagem
    this.x = x;                                    // posição inicial
    this.y = y;                                    // posição inicial                                  
    this.width = width;                           // posição final
    this.height = height;                         // posição final
  }

  render() {
    const imgCharacter = new Image();
    imgCharacter.src = this.img;

    imgCharacter.addEventListener("load", () => {
      this.ctx.drawImage(imgCharacter, this.x, this.y, this.width, this.height);
    });
  }
}
