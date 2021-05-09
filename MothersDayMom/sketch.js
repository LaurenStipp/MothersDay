let title;
let body;
let state = 0;
let timer = 0;

function preload() {
  title = loadFont('assets/fancy.ttf');
  body = loadFont('assets/standard.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //
  //half height - 333.5
  //
  textAlign(CENTER);
  ellipseMode(CENTER);
  noStroke();
}

function draw() {
  switch(state) {
    case 0:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 2*10) {
      timer = 0;
      state = 1;
    }
    push();
    textFont(title);
    fill('#7e47ff');
    textSize(90);
    text("Starting In...",width/2+10,height/2-195);
    pop();
    push();
    textFont(title);
    fill('white');
    textSize(90);
    text("Starting In...",width/2,height/2-200);
    pop();
    break;

    case 1:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 2*10) {
      timer = 0;
      state = 2;
    }
    push();
    textFont(title);
    fill('#7e47ff');
    textSize(90);
    text("Starting In...",width/2+10,height/2-195);
    pop();

    push();
    textFont(title);
    fill('white');
    textSize(90);
    text("Starting In...",width/2,height/2-200);
    pop();

    push();
    textFont(title);
    fill('#7e47ff');
    textSize(200);
    text("3",width/2+10,height/2+105);
    pop();

    push();
    textFont(title);
    textSize(200);
    fill('white');
    text("3",width/2,height/2+100);
    pop();
    break;

    case 2:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 2*10) {
      timer = 0;
      state = 3;
    }
    push();
    textFont(title);
    fill('#7e47ff');
    textSize(90);
    text("Starting In...",width/2+10,height/2-195);
    pop();

    push();
    textFont(title);
    fill('white');
    textSize(90);
    text("Starting In...",width/2,height/2-200);
    pop();

    push();
    textFont(title);
    fill('#7e47ff');
    textSize(200);
    text("2",width/2+10,height/2+105);
    pop();

    push();
    textFont(title);
    textSize(200);
    fill('white');
    text("2",width/2,height/2+100);
    pop();
    break;

    case 3:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 2*10) {
      timer = 0;
      state = 4;
    }
    push();
    textFont(title);
    fill('#7e47ff');
    textSize(90);
    text("Starting In...",width/2+10,height/2-195);
    pop();

    push();
    textFont(title);
    fill('white');
    textSize(90);
    text("Starting In...",width/2,height/2-200);
    pop();

    push();
    textFont(title);
    fill('#7e47ff');
    textSize(200);
    text("1",width/2+10,height/2+105);
    pop();

    push();
    textFont(title);
    textSize(200);
    fill('white');
    text("1",width/2,height/2+100);
    pop();
    break;

    case 4:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 2*10) {
      timer = 0;
      state = 5;
    }
    textFont(title);
    textSize(300);
    fill('#7e47ff');
    text("HAPPY", width/2,height/2-200);
    break;

    case 5:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 2*10) {
      timer = 0;
      state = 6;
    }
    textFont(title);
    textSize(300);
    fill('#7e47ff');
    text("HAPPY", width/2,height/2-200);
    text("MOTHER'S", width/2,height/2+100);
    break;

    case 6:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 5*10) {
      timer = 0;
      state = 7;
    }
    textFont(title);
    textSize(300);
    fill('#7e47ff');
    text("HAPPY", width/2,height/2-200);
    text("MOTHER'S", width/2,height/2+100);
    text("DAY", width/2,height/2+400);
    break;

    //SWITCHES BACK AND FORTH
    //DARK THEME 1
    case 7:
    background('#7e47ff');
    timer = timer+1;
    if (timer > 3*10) {
      timer = 0;
      state = 8;
    }
    textFont(title);
    textSize(300);
    fill('#D4C2FF');'#D4C2FF'
    text("HAPPY", width/2,height/2-200);
    text("MOTHER'S", width/2,height/2+100);
    text("DAY", width/2,height/2+400);
    break;

    //LIGHT THEME 1
    case 8:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 3*10) {
      timer = 0;
      state = 9;
    }
    textFont(title);
    textSize(300);
    fill('#7e47ff');
    text("HAPPY", width/2,height/2-200);
    text("MOTHER'S", width/2,height/2+100);
    text("DAY", width/2,height/2+400);
    break;

    //DARK THEME 2
    case 9:
    background('#7e47ff');
    timer = timer+1;
    if (timer > 3*10) {
      timer = 0;
      state = 10;
    }
    textFont(title);
    textSize(300);
    fill('#D4C2FF');
    text("HAPPY", width/2,height/2-200);
    text("MOTHER'S", width/2,height/2+100);
    text("DAY", width/2,height/2+400);
    break;

    //LIGHT THEME 2
    case 10:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 3*10) {
      timer = 0;
      state = 11;
    }
    textFont(title);
    textSize(300);
    fill('#7e47ff');
    text("HAPPY", width/2,height/2-200);
    text("MOTHER'S", width/2,height/2+100);
    text("DAY", width/2,height/2+400);
    break;

    //DARK THEME 3
    case 11:
    background('#7e47ff');
    timer = timer+1;
    if (timer > 3*10) {
      timer = 0;
      state = 12;
    }
    textFont(title);
    textSize(300);
    fill('#D4C2FF');
    text("HAPPY", width/2,height/2-200);
    text("MOTHER'S", width/2,height/2+100);
    text("DAY", width/2,height/2+400);
    break;

    //LIGHT THEME 3
    case 12:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 3*10) {
      timer = 0;
      state = 13;
    }
    textFont(title);
    textSize(300);
    fill('#7e47ff');
    text("HAPPY", width/2,height/2-200);
    text("MOTHER'S", width/2,height/2+100);
    text("DAY", width/2,height/2+400);
    break;

    case 13:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 5*10) {
      timer = 0;
      state = 14;
    }
    textFont(body);
    textSize(100);
    fill('#7e47ff');
    text("It's been a rough year....", width/2, height/2-250);
    break;

    case 14:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 5*10) {
      timer = 0;
      state = 15;
    }
    textFont(body);
    textSize(100);
    fill('#7e47ff');
    text("It's been a rough year....", width/2, height/2-250);
    text("with losing Katniss", width/2, height/2-150);
    break;

    case 15:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 5*10) {
      timer = 0;
      state = 16;
    }
    textFont(body);
    textSize(100);
    fill('#7e47ff');
    text("It's been a rough year....", width/2, height/2-250);
    text("with losing Katniss", width/2, height/2-150);
    text("but....", width/2, height/2-50);
    break;

    case 16:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 5*10) {
      timer = 0;
      state = 17;
    }
    textFont(body);
    textSize(100);
    fill('#7e47ff');
    text("It's been a rough year....", width/2, height/2-250);
    text("with losing Katniss", width/2, height/2-150);
    text("but....", width/2, height/2-50);
    text("This family couldn't ask for a better", width/2, height/2+50);

    push();
    textFont(title);
    fill('#7e47ff');
    textSize(200);
    text("MOM",width/2+10,height/2+245);
    pop();

    push();
    textFont(title);
    textSize(200);
    fill('white');
    text("MOM",width/2,height/2+240);
    pop();
    break;

    case 17:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 5*10) {
      timer = 0;
      state = 18;
    }
    textFont(body);
    textSize(99);
    fill('#7e47ff');
    text("These are the reasons you are a great", width/2-230, height/2-270);
    push();
    textFont(title);
    fill('#7e47ff');
    textSize(150);
    text("MOM",width/2+710,height/2-250);
    pop();
    push();
    textFont(title);
    textSize(150);
    fill('white');
    text("MOM",width/2+700,height/2-245);
    pop();
    break;

    case 18:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 10*10) {
      timer = 0;
      state = 19;
    }
    textFont(body);
    textSize(99);
    fill('#7e47ff');
    text("These are the reasons you are a great", width/2-230, height/2-270);
    push();
    textFont(title);
    fill('#7e47ff');
    textSize(150);
    text("MOM",width/2+710,height/2-250);
    pop();
    push();
    textFont(title);
    textSize(150);
    fill('white');
    text("MOM",width/2+700,height/2-245);
    pop();

    //FIRST POINT
    push();
    fill('#7e47ff');
    ellipse(width/2-400,height/2-150,30,30);
    pop();
    push();
    fill('white');
    ellipse(width/2-405,height/2-148,30,30);
    pop();

    push();
    textSize(70);
    text("You cook dinner",width/2-130,height/2-130);
    pop();
    break;

    case 19:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 10*10) {
      timer = 0;
      state = 20;
    }
    textFont(body);
    textSize(99);
    fill('#7e47ff');
    text("These are the reasons you are a great", width/2-230, height/2-270);
    push();
    textFont(title);
    fill('#7e47ff');
    textSize(150);
    text("MOM",width/2+710,height/2-250);
    pop();
    push();
    textFont(title);
    textSize(150);
    fill('white');
    text("MOM",width/2+700,height/2-245);
    pop();

    //FIRST POINT
    push();
    fill('#7e47ff');
    ellipse(width/2-400,height/2-150,30,30);
    pop();
    push();
    fill('white');
    ellipse(width/2-405,height/2-148,30,30);
    pop();

    push();
    textSize(70);
    text("You cook dinner",width/2-130,height/2-130);
    pop();

    //SECOND POINT
    push();
    fill('#7e47ff');
    ellipse(width/2-400,height/2-50,30,30);
    pop();
    push();
    fill('white');
    ellipse(width/2-405,height/2-48,30,30);
    pop();

    push();
    textSize(70);
    text("You watch tv shows and movies with me",width/2+198,height/2-30);
    pop();
    break;

    case 20:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 10*10) {
      timer = 0;
      state = 21;
    }
    textFont(body);
    textSize(99);
    fill('#7e47ff');
    text("These are the reasons you are a great", width/2-230, height/2-270);
    push();
    textFont(title);
    fill('#7e47ff');
    textSize(150);
    text("MOM",width/2+710,height/2-250);
    pop();
    push();
    textFont(title);
    textSize(150);
    fill('white');
    text("MOM",width/2+700,height/2-245);
    pop();

    //FIRST POINT
    push();
    fill('#7e47ff');
    ellipse(width/2-400,height/2-150,30,30);
    pop();
    push();
    fill('white');
    ellipse(width/2-405,height/2-148,30,30);
    pop();

    push();
    textSize(70);
    text("You cook dinner",width/2-130,height/2-130);
    pop();

    //SECOND POINT
    push();
    fill('#7e47ff');
    ellipse(width/2-400,height/2-50,30,30);
    pop();
    push();
    fill('white');
    ellipse(width/2-405,height/2-48,30,30);
    pop();

    push();
    textSize(70);
    text("You watch tv shows and movies with me",width/2+198,height/2-30);
    pop();

    //THIRD POINT
    push();
    fill('#7e47ff');
    ellipse(width/2-400,height/2+50,30,30);
    pop();
    push();
    fill('white');
    ellipse(width/2-405,height/2+53,30,30);
    pop();

    push();
    textSize(70);
    text("You put up with me and my craziness",width/2+170,height/2+67);
    pop();
    break;

    case 21:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 20*10) {
      timer = 0;
      state = 22;
    }
    textFont(body);
    textSize(99);
    fill('#7e47ff');
    text("These are the reasons you are a great", width/2-230, height/2-270);
    push();
    textFont(title);
    fill('#7e47ff');
    textSize(150);
    text("MOM",width/2+710,height/2-250);
    pop();
    push();
    textFont(title);
    textSize(150);
    fill('white');
    text("MOM",width/2+700,height/2-245);
    pop();

    push();
    fill('#7e47ff');
    ellipse(width/2-400,height/2-150,30,30);
    pop();
    push();
    fill('white');
    ellipse(width/2-405,height/2-148,30,30);
    pop();

    push();
    textSize(70);
    text("You cook dinner",width/2-130,height/2-130);
    pop();

    push();
    fill('#7e47ff');
    ellipse(width/2-400,height/2-50,30,30);
    pop();
    push();
    fill('white');
    ellipse(width/2-405,height/2-48,30,30);
    pop();

    push();
    textSize(70);
    text("You watch tv shows and movies with me",width/2+198,height/2-30);
    pop();

    push();
    fill('#7e47ff');
    ellipse(width/2-400,height/2+50,30,30);
    pop();
    push();
    fill('white');
    ellipse(width/2-405,height/2+53,30,30);
    pop();

    push();
    textSize(70);
    text("You put up with me and my craziness",width/2+170,height/2+67);
    pop();

    textFont(body);
    textSize(99);
    fill('#7e47ff');
    text("There are a lot more but I can't think of them", width/2, height/2+300);
    push();
    break;

    case 22:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 10*10) {
      timer = 0;
      state = 23;
    }
    textFont(body);
    textSize(100);
    fill('#7e47ff');
    text("The most important thing to remember is...", width/2, height/2);
    break;

    case 23:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 7*10) {
      timer = 0;
      state = 24;
    }
    textFont(body);
    textSize(100);
    fill('#7e47ff');
    text("Sheldon puked in the living room", width/2, height/2);
    break;

    case 24:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 5*10) {
      timer = 0;
      state = 25;
    }
    textFont(body);
    textSize(100);
    fill('#7e47ff');
    text("JK", width/2, height/2);
    break;

    case 25:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 6*10) {
      timer = 0;
      state = 26;
    }
    textFont(title);
    textSize(200);
    fill('#7e47ff');
    text("I", width/2, height/2-200);
    push();
    fill('white');
    text("I", width/2-6, height/2-205);
    pop();
    break;

    case 26:
    background('#D4C2FF');
    timer = timer+1;
    if (timer > 5*10) {
      timer = 0;
      state = 27;
    }
    textFont(title);
    textSize(200);
    fill('#7e47ff');
    text("I", width/2, height/2-200);
    push();
    fill('white');
    text("I", width/2-6, height/2-205);
    pop();
    text("LOVE", width/2, height/2);
    push();
    fill('white');
    text("LOVE", width/2-6, height/2+5);
    pop();
    break;

    case 27:
    background('#D4C2FF');
    // timer = timer+1;
    // if (timer > 5*10) {
    //   timer = 0;
    //   state = 25;
    // }
    textFont(title);
    textSize(200);
    fill('#7e47ff');
    text("I", width/2, height/2-200);
    push();
    fill('white');
    text("I", width/2-6, height/2-206);
    pop();
    text("LOVE", width/2, height/2);
    push();
    fill('white');
    text("LOVE", width/2-6, height/2+6);
    pop();
    text("YOU", width/2, height/2+200);
    push();
    fill('white');
    text("YOU", width/2-6, height/2+206);
    pop();
    break;

  }

}
