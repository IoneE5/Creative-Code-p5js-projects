let Painting1, Painting2, Painting3, Painting4;
let Painting5, Painting6, Painting7, Painting8;

let Painting = [];

let paintingOrder = 1;
let backgroundColor = 1;
let artistPhrase = 1;

let artistPhrases = [
  "To find, is the thing. - Pablo Picasso",
  "The spectator makes the picture. - Marcel Duchamp",
  "Color is a power which directly influences the soul - Kandinsky"
];

//These are the paintings that I created in Adobe Photoshop
function preload() {
  Painting1 = loadImage("assets/Painting1.png");
  Painting2 = loadImage("assets/Painting2.png");
  Painting3 = loadImage("assets/Painting3.png");
  Painting4 = loadImage("assets/Painting4.png");
  Painting5 = loadImage("assets/Painting5.png");
  Painting6 = loadImage("assets/Painting6.png");
  Painting7 = loadImage("assets/Painting7.png");
  Painting8 = loadImage("assets/Painting8.png");
}

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("canvas-container");
}

function draw() {

  // Background colors
  if (backgroundColor == 1) {
    background(0, 102, 255); // Blue
  } else if (backgroundColor == 2) {
    background(255, 20, 147); // Pink
  } else {
    background(255, 102, 0); // Orange
  }

  // Decorative white circles
  for (let i = 1; i <= 10; i++) {
    fill(255, 255, 255);
    noStroke();
    circle(i * 70, 590, 5);
  }

  for (let i = 1; i <= 10; i++) {
    fill(255, 255, 255);
    noStroke();
    circle(i * 70, 10, 5);
  }

  // Three different painting arrangements
  if (paintingOrder == 1) {
    Painting = [Painting1, Painting2, Painting3, Painting4,
                Painting5, Painting6, Painting7, Painting8];

  } else if (paintingOrder == 2) {
    Painting = [Painting4, Painting1, Painting7, Painting2,
                Painting8, Painting3, Painting5, Painting6];

  } else {
    Painting = [Painting6, Painting8, Painting2, Painting5,
                Painting3, Painting7, Painting1, Painting4];
  }

  // Painting 1: Large square
  fill(90, 60, 50);
  rect(50, 50, 160, 160);

  fill(245, 220, 190);
  rect(60, 60, 140, 140);

  image(Painting[0], 60, 60, 140, 140);

  // Painting 2: Small vertical
  fill(90, 60, 50);
  rect(250, 70, 80, 140);

  fill(245, 220, 190);
  rect(260, 80, 60, 120);

  image(Painting[1], 260, 80, 60, 120);

  // Painting 3: Wide horizontal
  fill(90, 60, 50);
  rect(370, 50, 200, 100);

  fill(245, 220, 190);
  rect(380, 60, 180, 80);

  image(Painting[2], 380, 60, 180, 80);

  // Painting 4: Tall vertical
  fill(90, 60, 50);
  rect(630, 50, 100, 200);

  fill(245, 220, 190);
  rect(640, 60, 80, 180);

  image(Painting[3], 640, 60, 80, 160);

  // Painting 5: Small square
  fill(90, 60, 50);
  rect(70, 300, 100, 100);

  fill(245, 220, 190);
  rect(80, 310, 80, 80);

  image(Painting[4], 80, 310, 80, 80);

  // Painting 6: Large center
  fill(90, 60, 50);
  rect(350, 220, 180, 200);

  fill(245, 220, 190);
  rect(360, 230, 160, 180);

  image(Painting[5], 360, 230, 160, 180);

  // Painting 7: Bottom horizontal
  fill(90, 60, 50);
  rect(210, 450, 200, 100);

  fill(245, 220, 190);
  rect(220, 460, 180, 80);

  image(Painting[6], 220, 460, 180, 80);

  // Painting 8: Right square
  fill(90, 60, 50);
  rect(600, 330, 130, 130);

  fill(245, 220, 190);
  rect(610, 340, 110, 110);

  image(Painting[7], 610, 340, 110, 110);

  // Artist quotes
  fill(255, 255, 255);
  noStroke();
  textSize(16);

  if (artistPhrase == 1) {
    text(artistPhrases[0], 200, 570);
  } else if (artistPhrase == 2) {
    text(artistPhrases[1], 200, 570);
  } else {
    text(artistPhrases[2], 200, 570);
  }
}

// Randomize gallery when mouse is pressed
function mousePressed() {
  backgroundColor = random([1, 2, 3]);
  paintingOrder = random([1, 2, 3]);
  artistPhrase = random([1, 2, 3]);
}

// Save artwork when a key is pressed
function keyPressed() {
  saveCanvas("MyArtwork", "png");
}