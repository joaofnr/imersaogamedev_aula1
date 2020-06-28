class TelaInicial{
  constructor(){}
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
    
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    
    fill('#FF0000');
    textSize(50);
    text("as aventuras de", width/2, 130);
    
    fill('#990000');
    textSize(100);
    text("RIPSTA", width/2, 200);
  }
  
  _botao(){
    botaoGerenciador.draw();
  }
}