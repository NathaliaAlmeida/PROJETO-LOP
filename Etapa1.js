/* Equipe:
  Erich Brendell Araújo Medeiros - Subturma 01A
  Nathalia Medeiros Costa de Almeida - Subturma 01A
  Etapas 1 e 2
*/
 
var x = 200;
var y = 350;

function setup() {
  createCanvas(400, 400)
  fill('yellow')
 
}

function draw() {
  background('black');
  rect(389, 1, 10 , 397);
  rect(0, 1, 10, 397);
  rect(10, 1, 379, 10);
  rect(10, 388, 379, 10);
  rect(200, 100, 35, 35);
  
  
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
