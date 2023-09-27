function setup() {
  createCanvas(400, 400);
  background(255);
  noLoop();
}

function draw() {
  // Draw a white background
  background(255);
  
  // Create a grid of colored rectangles
  for (let x = 0; x < width; x += 100) {
    for (let y = 0; y < height; y += 100) {
      let randomColor = color(random(255), random(255), random(255));
      fill(randomColor);
      rect(x, y, 100, 100);
    }
  }
}