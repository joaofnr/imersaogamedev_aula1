class Animacao {
   constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
     this.matriz = matriz; 
     this.imagem = imagem; 
     this.largura = largura;
     this.altura = altura;
     this.x = x;
     this.variacaoY = variacaoY;
     this.y = height - this.altura - variacaoY;
     this.larguraSprite = larguraSprite;
     this.alturaSprite = alturaSprite;     
     this.frameAtual = 0;
   }
  
  //desenha a personagem com posição, tamanho e crop
  exibe(){
    var cropX = this.matriz[this.frameAtual][0];
    var cropY = this.matriz[this.frameAtual][1];
    image(
      this.imagem,
      this.x,
      this.y,
      this.largura,
      this.altura,
      cropX,
      cropY,
      this.larguraSprite,
      this.alturaSprite);
    
    this.anima();
  }
  
  anima(){
    this.frameAtual++;
    if(this.frameAtual >= this.matriz.length - 1){
      this.frameAtual = 0;
    }
  }
}