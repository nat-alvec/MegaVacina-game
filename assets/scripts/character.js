// Criação da classe Character para a criação dos inimigos e do personagem controlável pelo player.

class Character {
  constructor(ctx, img, x, y, width, height) {
    this.ctx = ctx;
    this.img = img; // string do caminho da imagem

    // posição inicial
    this.x = x;
    this.y = y;

    // posição final
    this.width = width;
    this.height = height;
  }

  render() {
    const imgCharacter = new Image();
    imgCharacter.src = this.img;

    imgCharacter.addEventListener("load", () => {
      this.ctx.drawImage(imgCharacter, this.x, this.y, this.width, this.height);
    });
  }
}
