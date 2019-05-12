/* Equipe:
  Erich Brendell Araújo Medeiros
  Nathalia Medeiros Costa de Almeida
  Etapa 1 e 2
  Etapa 3 
*/
 
var x = 200;
var y = 350;
var z = 38;
var s = 26;
var a = 810;
var b = 26;

function setup() {
  createCanvas(1000, 690)
  fill('yellow')
 
}

function draw() {
  background('black');
  rect(844, 1, 10 , 687);
  rect(0, 1, 10, 687);
  rect(10, 1, 834, 10);
  rect(10, 678, 834, 10);
  rect(55, 40, 70, 40, 10);
  rect(175, 40, 100, 40, 10);
  rect(325, 40, 70, 40, 10);
  rect(440, 11, 25, 70, 3);
  rect(510, 40, 70, 40, 10);
  rect(615, 40, 100, 40, 10);
  rect(750, 40, 70, 40, 10);
  circle(z, s, 10);
  z = z + 1.75
  if(z > 413){
   z = 0
  }
  circle(a, b, 10);
  a = a - 1.55
  if (a < 473){
   a = 800
  }
  
  ellipse(x,y, 40, 40);
   if (keyIsDown(RIGHT_ARROW)) {
    x = x + 3;
  }
  if (keyIsDown(LEFT_ARROW)) {
    x = x - 3;
  }
   if (keyIsDown(DOWN_ARROW)) {
    y = y + 2;
  }
  if (keyIsDown(UP_ARROW)) {
    y = y - 2;
  }
 
  
}
