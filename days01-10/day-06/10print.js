let x = 0;
let y = 0;
let spacing = 5;

function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  stroke(43, 83, 41);
  if (random(1) < 0.5) {
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }
  x = x + spacing;
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
}
