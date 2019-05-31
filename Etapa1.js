/* Equipe:
  Erich Brendell Araújo Medeiros
  Nathalia Medeiros Costa de Almeida
  Etapa 1 e 2
  Etapa 3 e 4
  Etapa 5 e 6
*/
 
var xJog = 500;
var yJog = 400;
var x1 = 38;
var y1 = 26;
var x2 = 810;
var y2 = 26;
var raioP = 15;
var raioO = 15;
var t;
var vxo = [];
var vyo = [];
var qtObjetos = 20;
var vVel = [];
var vidas = 3;
var pontos = 0;
var nivel = 1;
var tempo = 90;

function setup() {
  createCanvas(1200, 690)
  fill('yellow')
}

function draw() {
  //Apresentação de informações na tela de jogo
  background(0);
  textSize(32);
  text('Vidas: ' + vidas, 980, 70);
  fill('yellow');
  textSize(32);
  text('Tempo: ' + tempo, 980, 110);
  textSize(32);
  text('Nível:' + nivel, 981, 30);
  textSize(32);
  text('Pontuação: ' + pontos, 981, 150);

  //Labirinto
  rect(60, 50, 130, 90);
  rect(250, 50, 160, 90);
  rect(465, 10, 20, 130);
  rect(540, 50, 160, 90);
  rect(760, 50, 130, 90);
  rect(60, 195, 130, 40);
  rect(250, 195, 50, 150);
  rect(360, 195, 50, 110);
  rect(360, 305, 230, 40);
  rect(540, 195, 50, 110);
  rect(650, 195, 50, 150);
  rect(760, 195, 130, 40);
  rect(60, 300, 130, 40);
  rect(760, 300, 130, 40);
  rect(250, 400, 450, 50);
  rect(60, 400, 130, 90);
  rect(760, 400, 130, 90);
  rect(60, 540, 40, 100);
  rect(150, 540, 40, 100);
  rect(760, 540, 40, 100);
  rect(850, 540, 40, 100);
  rect(250, 500, 40, 140);
  rect(660, 500, 40, 140);
  rect(350, 500, 250, 140);
  
  //Criação das paredes laterais
  rect(950, 1, 10 , 687);
  rect(0, 1, 10, 687);
  rect(10, 1, 940, 10);
  rect(10, 678, 940, 10);
  
  //Objetos andando ao longo do cenário
  circle(x1, y1, 10);
  x1 = x1 + 1.75;
  if(x1 > 800){
    x1 = 810;
    if( y1 < 300)
      y1 = y1 + 1.75;
    else{
      y1 = 30;
      x1 = 10;
    }
  }
  circle(x2, y2, 10);
  x2 = x2 - 1.55;
  if (x2 < 473){
   x2 = 800;
  }
  
  //Movimentação do jogador
  ellipse(xJog,yJog, 2*raioP, 2*raioO);
   if (keyIsDown(RIGHT_ARROW)) {
    xJog = xJog + 3;
  }
  if (keyIsDown(LEFT_ARROW)) {
    xJog = xJog - 3;
  }
   if (keyIsDown(DOWN_ARROW)) {
    yJog = yJog + 3;
  }
  if (keyIsDown(UP_ARROW)) {
    yJog = yJog - 3;
  }
  if( dist(xJog, yJog, x1, y1) < raioP + raioO ){
    xJog = 400;
    yJog = 380;
    vidas--;
  }
  if( dist(xJog, yJog, x2, y2) < raioP + raioO ){
    xJog = 400;
    yJog = 380;
    vidas--;
  }
}

