class Jogo {
  constructor() {
    this.inimigoAtual = 0;

  }

  setup() {
    cenario = new Cenario(imagemCenario, 5);
    personagem = new Personagem(calcMatriz(880, 1080, 4, 4), imagemPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(calcMatriz(416, 728, 7, 4), imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width - 200, 0, 200, 200, 400, 400, 10, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 10);
    pontuacao = new Pontuacao();

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);


  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
      somDoPulo.play();
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();
    personagem.exibe();
    personagem.aplicaGravidade();

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.inimigoAtual++;
      if (this.inimigoAtual > 2) {
        this.inimigoAtual = 0;
      }
      inimigo.velocidade = parseInt(random(15, 30));
    }

    if (personagem.estaColidindo(inimigo)) {
      gameOver();

    }

    pontuacao.exibe();
    pontuacao.adicionarPontos();
  }
}