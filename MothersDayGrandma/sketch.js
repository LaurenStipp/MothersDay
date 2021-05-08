let f1;

function preload() {
  f1 = loadFont('assets/mreg.ttf');
}

function setup() {
  createCanvas(750, 1334);
  textFont(f1);
}

function draw() {
  background(220);
  text("Hello",width/2,height/2);

}
