function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  x = mouseX;
  y = mouseY;
  ix = width - mouseX; // Inverse X
  iy = height - mouseY; // Inverse Y
  background(126);
  fill(mouseX/2, 150, 342);
  ellipse(x, height/2, y, y); 
  fill(mouseY/2 + 50, 201, 133);
  ellipse(ix, height/2, iy, iy);
}