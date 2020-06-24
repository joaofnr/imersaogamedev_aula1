/*
 * Classe para a bruxa Ripsta
 */
class Personagem{
  constructor(imagem){
    this.imagem = imagem;
    this.matriz = this.calcMatriz();
    this.frameAtual = 0;    
    this.largura = 220;
    this.altura = 270;
  }
  
  //desenha a personagem com posição, tamanho e crop
  exibe(){
    var cropX = this.matriz[this.frameAtual][0];
    var cropY = this.matriz[this.frameAtual][1];
    image(
      this.imagem,
      0,
      height-this.altura/2,
      this.largura/2,
      this.altura/2,
      cropX,
      cropY,
      this.largura,
      this.altura);
    
    this.anima();
  }
  
  anima(){
    this.frameAtual++;
    
    if(this.frameAtual >= this.matriz.length - 1){
      this.frameAtual = 0;
    }
  }
  
  /*
  * Faz a matrix 4x4 para a animação da personagem
  */
  calcMatriz(){
    var _w = 880;
    var _h = 1080;
    var matriz4x4 = [];
    
    var slicesY = 4;
    var slicesX = 4;
    var totalSlices = slicesY*slicesX;    
    var _i = 0;
    
    var sx = 0;
    var sy = 0;
      
    while(_i < totalSlices){
      if(_i > 0 && _i%4 == 0){
        sy++;
        sx = 0;
      }
      
      var row0 = _w / slicesX * sx;
      var row1 = _h / slicesY * sy;     
        
      matriz4x4.push([row0,row1]);
           
      _i++;
      sx++;
    }
    return matriz4x4;
    
  }
  
  /**
   * História da bruxa Ripsta
   *
   */
  historia(){
    return "Em uma floresta densa, onde tudo parece se repetir eternamente, um estranho feitiço foi lançado sobre a água, fazendo-a atacar como animais impiedosos. Os trolls, expulsos de suas tocas inundadas, estão furiosos e esmagando quem cruza seu caminho. Ripsta, uma bruxa iniciante que tenta provar seu valor e conhecimento das artes místicas, surge misteriosamente no coração da floresta, sem saber ao certo para onde ir mas com uma certeza: a água pode fazer estragos inimagináveis e só resta a ela fugir, na esperança de encontrar o caminho de casa...";
  }
  
}