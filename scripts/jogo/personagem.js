/*
 * Classe para a bruxa Ripsta
 */
class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
  
    this.gravidade = 5;
    this.velocidadeDoPulo = 0;
    this.alturaDoPulo = -50;
    this.pulos = 0;
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
  }
  
  pula(){
    if(this.pulos < 2){
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos ++;
    }
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y > this.yInicial){
       this.y = this.yInicial;
      this.pulos = 0;
    }
  }
  
  estaColidindo(inimigo){
    const precisao = .7;
    /*noFill();
    rect(this.x, this.y, this.largura, this.altura);
    rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura);*/
    return collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x, inimigo.y, 
      inimigo.largura * precisao, 
      inimigo.altura * precisao
    );
  }
      
  /**
   * História da bruxa Ripsta
   *
   */
  historia(){
    return "Em uma floresta densa, onde tudo parece se repetir eternamente, um estranho feitiço foi lançado sobre a água, fazendo-a atacar como animais impiedosos. Os trolls, expulsos de suas tocas inundadas, estão furiosos e esmagando quem cruza seu caminho. Ripsta, uma bruxa iniciante que tenta provar seu valor e conhecimento das artes místicas, surge misteriosamente no coração da floresta, sem saber ao certo para onde ir mas com uma certeza: a água pode fazer estragos inimagináveis e só resta a ela fugir, na esperança de encontrar o caminho de casa...";
  }
  
}