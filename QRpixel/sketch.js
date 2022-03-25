function setup() {
  createCanvas(840, 520);
  noStroke();
  fill(0);
}

function draw() {
  background(mouseX/(width/255),mouseY/(height/255),100);
  for (let i = 0; i < 5; i+=1){
    conditionalPixel(40,(i+1)*40);
  }
  for (let i = 0; i < 4; i+=1){
    conditionalPixel((i+1)*40,40);
  }
  for (let i = 0; i < 4; i+=1){
    conditionalPixel((i+1)*40,200);
  }
  conditionalPixel(160,160);
  conditionalPixel(160,120);
  conditionalPixel(120,120);
  conditionalPixel(120,120);
  
  conditionalPixel(280,40);
  conditionalPixel(320,40);
  conditionalPixel(240,80);
  conditionalPixel(360,80);
  conditionalPixel(240,120);
  conditionalPixel(360,120);
  conditionalPixel(240,160);
  conditionalPixel(360,160);
  conditionalPixel(280,200);
  conditionalPixel(320,200);

  conditionalPixel(480,40);
  conditionalPixel(520,40);
  conditionalPixel(440,80);
  conditionalPixel(560,80);
  conditionalPixel(440,120);
  conditionalPixel(560,120);
  conditionalPixel(440,160);
  conditionalPixel(560,160);
  conditionalPixel(480,200);
  conditionalPixel(520,200);
  
  for (let i = 0; i < 5; i+=1){
    conditionalPixel(640,(i+1)*40);
  }
  conditionalPixel(680,40);
  conditionalPixel(720,40);
  conditionalPixel(760,80);
  conditionalPixel(760,120);
  conditionalPixel(760,160);
  conditionalPixel(680,200);
  conditionalPixel(720,200);
  
  for (let i = 0; i < 4; i+=1){
    conditionalPixel((i+1)*40,280);
  }
  for (let i = 0; i < 4; i+=1){
    conditionalPixel((i+1)*40,440);
  }
  conditionalPixel(40,320);
  conditionalPixel(80,360);
  conditionalPixel(120,360);
  conditionalPixel(160,400);
  
  conditionalPixel(280,280);
  conditionalPixel(320,280);
  conditionalPixel(360,280);
  conditionalPixel(240,320);
  conditionalPixel(240,360);
  conditionalPixel(240,400);
  conditionalPixel(280,440);
  conditionalPixel(320,440);
  conditionalPixel(360,440);
  
  conditionalPixel(440,320);
  conditionalPixel(440,360);
  conditionalPixel(440,400);
  conditionalPixel(440,440);
  conditionalPixel(480,280);
  conditionalPixel(520,280);
  conditionalPixel(560,320);
  conditionalPixel(560,360);
  conditionalPixel(560,400);
  conditionalPixel(560,440);
  conditionalPixel(560,400);
  conditionalPixel(480,360);
  conditionalPixel(520,360);
  
  for (let i = 0; i < 5; i+=1){
    conditionalPixel(640,(i+1)*40 + 240);
  }
  for (let i = 0; i < 5; i+=1){
    conditionalPixel(760,(i+1)*40 + 240);
  }
  conditionalPixel(680,320);
  conditionalPixel(720,360);
  conditionalPixel(720,400);
}

function conditionalPixel(x,y) {
  fill(0);
  if ((mouseX > x) && (mouseX < x+40) &&
    (mouseY > y) && (mouseY < y+40)) {
    fill(255);
  }
  rect(x, y, 40, 40);

}