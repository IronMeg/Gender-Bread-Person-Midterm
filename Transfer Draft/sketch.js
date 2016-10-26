var img, RHeart,BHeart;
var input, button, buttonS, greeting;

//location variables
var IdentX = 370;
var IdentY = 80;
var ExpressX = 370;
var ExpressY = 170;
var RomanticX= 370;
var RomanticY= 260;
var SexualX = 370;
var SexualY = 350;
var BioX = 370;
var BioY = 440;

//Slider Variables
var SlideIdentR, SlideIdentB;
var SlideExpressR, SlideExpressB;

//line locations
var p1 = 185;
var p2 = 55;
var p3 = 360;
var p4 = 495;

function setup() {
  createCanvas(520,500);
  img = loadImage("assets/GBPmask.png");
  RHeart = loadImage("assets/RHeart.png");
  BHeart = loadImage("assets/BHeart.png");
  
  //name
  input = createInput();
  input.position(377,28);
  button = createButton('Load Name');
  button.position(385,48);
  button.mousePressed(name);
  buttonS = createButton('Save');
  buttonS.position(457,48);
  greeting = createElement('h2','Who are you?');
  greeting.position(115,0);
  //---end of name code
  
  //Identity Sliders
  SlideIdentR = createSlider(0,255,255);
  SlideIdentB = createSlider(0,255,255);
  SlideIdentR.position(IdentX+10,IdentY+20);
  SlideIdentB.position(IdentX+10,IdentY+50);
}

function draw() {
  background('#d1ffe1');
  
  
  //IdentFill
  var IdentR, IdentG, IdentB;
  IdentR = SlideIdentR.value();
  IdentB = SlideIdentB.value();
  IdentG = 0;
  fill(IdentR,IdentG,IdentB);
  rect(0,50,400,500);
  //---end of Ident fill
  
  image(img,-75,20);
  //text
  fill('black');
  textSize(12);
  text("Woman-ness", IdentX,IdentY+20);
  text("Man-ness", IdentX,IdentY+50);
  text("Women/female/feminine",SexualX, SexualY+20);
  text("Men/male/masculine",SexualX,SexualY+50);
  text("Feminine",ExpressX,ExpressY+20);
  text("Masculine",ExpressX,ExpressY+50);
  text("Female-ness",BioX,BioY+20);
  text("Male-ness",BioX,BioY+50);
  text("Women/female/feminine",RomanticX,RomanticY+20);
  text("Men/male/masculine",RomanticX,RomanticY+50);
  textSize(15);
  text("Gender Identity",IdentX,IdentY);
  text("Sexual Attraction",SexualX,SexualY);
  text("Gender Expression",ExpressX,ExpressY);
  text("Biological Sex",BioX,BioY);
  text("Romantic Attraction",RomanticX,RomanticY)
  //---end of text code
  
  
  //lines
  stroke(255,0,0);
  //first lines
  strokeWeight(3);
  line(p1,p2,p3,p2);
  line(p3,p2,p3,p4);
  line(p3,p4,p1,p4);
  //---end of line code


  noStroke();
}


function name(){
  var name = input.value();
  greeting.html('This is '+name+'.');
  input.value('');
}