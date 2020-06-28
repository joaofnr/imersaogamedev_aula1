class Pontuacao {
   constructor(){
     this.pontos = 0;
   }
  
  exibe(){
    textSize(42);
    fill("#FFF");
    textAlign(RIGHT);
    text(parseInt(this.pontos), width-30, 50);
  }
  
  adicionarPontos(){
     this.pontos += 0.1; 
  }
}