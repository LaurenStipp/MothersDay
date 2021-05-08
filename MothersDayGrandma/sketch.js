let f1;
let state = 0;
let timer = 0;

function preload() {
  f1 = loadFont('assets/mreg.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //
  //half height - 333.5
  //
  textFont(f1);
  textSize(60);
  textAlign(CENTER);
}

function draw() {
  switch(state) {
    case 0:
    background('#FCF1EB');
    timer = timer+1;
    if (timer > 5*10) {
      timer = 0;
      state = 1;
    }

    fill('#9F89D1');
    text("Starting In...",width/2,height/2-200);
    break;

    case 1:
    background('#FCF1EB');
    timer = timer+1;
    if (timer > 5*10) {
      timer = 0;
      state = 2;
    }
    text("Starting In...",width/2,height/2-200);
    push();
    textSize(90);
    text("3",width/2,height/2);
    pop();
    break;

    case 2:
    background('#FCF1EB');
    timer = timer+1;
    if (timer > 5*10) {
      timer = 0;
      state = 3;
    }
    text("Starting In...",width/2,height/2-200);
    push();
    textSize(90);
    text("2",width/2,height/2);
    pop();
    break;

    case 3:
    background('#FCF1EB');
    timer = timer+1;
    if (timer > 5*10) {
      timer = 0;
      state = 4;
    }
    text("Starting In...",width/2,height/2-200);
    push();
    textSize(90);
    text("1",width/2,height/2);
    pop();
    break;

    case 4:
    background('#FCF1EB');
    text("Happy",width/2,height/2-200);
    timer = timer+1;
    if (timer > 5*10) {
      timer = 0;
      state = 5;
    }
    break;

    case 5:
    background('#FCF1EB');
    text("Happy",width/2,height/2-200);
    text("Mother's",width/2,height/2-100);

    timer = timer+1;
    if (timer > 5*10) {
      timer = 0;
      state = 6;
    }
    break;

    case 6:
    background('#FCF1EB');
    text("Happy",width/2,height/2-200);
    text("Mother's",width/2,height/2-100);
    text("Day",width/2,height/2);
    timer = timer+1;
    if (timer > 5*10) {
      timer = 0;
      state = 7;
    }
    break;

    case 7:
    background('#FCF1EB');
    text("Happy",width/2,height/2-200);
    text("Mother's",width/2,height/2-100);
    text("Day",width/2,height/2);
    text("Grandma",width/2,height/2+100);
    timer = timer+1;
    if (timer > 15*10) {
      timer = 0;
      state = 8;
    }
    break;

    case 8:
    background('#FCF1EB');
    text("The",width/2,height/2-270);
    text("daughter",width/2,height/2-200);
    text("you raised",width/2,height/2-120);
    text("turned into",width/2,height/2-40);
    text("an amazing",width/2,height/2+40);
    text("woman and",width/2,height/2+120);
    text("a wonderful",width/2,height/2+200);
    text("mother",width/2,height/2+280);
    timer = timer+1;
    if (timer > 20*10) {
      timer = 0;
      state = 9;
    }
    break;

    case 9:
    background('#FCF1EB');
    text("You made",width/2,height/2-160);
    text("sure that",width/2,height/2-80);
    text("Sarah and I",width/2,height/2);
    text("were fed",width/2,height/2+80);
    timer = timer+1;
    if (timer > 20*10) {
      timer = 0;
      state = 10;
    }
    break;

    case 10:
    background('#FCF1EB');
    text("You are",width/2,height/2-160);
    text("the best",width/2,height/2-80);
    text("grandma",width/2,height/2);
    text("Sarah and I",width/2,height/2+80);
    text("could have",width/2,height/2+160);
    timer = timer+1;
    if (timer > 20*10) {
      timer = 0;
      state = 11;
    }
    break;

    case 11:
    background('#FCF1EB');
    text("Thank you",width/2,height/2-160);
    text("for",width/2,height/2-80);
    text("spoiling",width/2,height/2);
    text("Sarah and me",width/2,height/2+80);
    timer = timer+1;
    if (timer > 20*10) {
      timer = 0;
      state = 12;
    }
    break;

    case 12:
    background('#FCF1EB');
    text("I",width/2,height/2-90);
    text("Love",width/2,height/2-15);
    text("You",width/2,height/2+65);
    text("Grandma",width/2,height/2+140);
    push();
    textSize(50);
    text("-Lauren",width/2,height/2+280);
    pop();
    break;
  }

}
