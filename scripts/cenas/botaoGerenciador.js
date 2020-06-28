class BotaoGerenciador {
  constructor(texto, x, y, estilo, cena) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao = createButton(this.texto);
    this.botao.addClass(estilo);
    this.botao.mousePressed( ()=>  this._alteraCena(cena));
  }
  
  draw() {
    this.botao.position(this.x, this.y);
    this.botao.center();
  }
  
  _alteraCena(cena){
    cenaAtual=cena
    this.botao.remove();
  }
}