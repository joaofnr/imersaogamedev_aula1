function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(28);
  somDoJogo.loop();
  jogo = new Jogo();
  jogo.setup();
  
  telaInicial = new TelaInicial();
   
  cenas = {
    jogo,
    telaInicial
  };
    
  botaoGerenciador = new BotaoGerenciador('iniciar', width/2, height/2, 'botao-tela-inicial', 'jogo');
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}

function gameOver() {
  image(imagemGameOver, width / 2 - 200, height / 2 - 100);
  noLoop();
  somDoPulo.stop();
  somDoJogo.stop();
}

/*
 * Faz a matrix para animação em imagens
 * @param int wImg largura total da imagem com todos os frames
 * @param int hImg altura total da imagem com todos os frames
 * @param rows qtde de linhas
 * @param cols qtde de colunas
 */
function calcMatriz(wImg, hImg, rows, cols) {
  var matriz = [];
  var totalSlices = rows * cols;
  var _i = 0;
  var sx = 0;
  var sy = 0;

  while (_i < totalSlices) {

    if (_i > 0 && _i % 4 == 0) {
      sy++;
      sx = 0;
    }

    var row0 = wImg / cols * sx;
    var row1 = hImg / rows * sy;

    matriz.push([row0, row1]);

    _i++;
    sx++;
  }

  return matriz;

}