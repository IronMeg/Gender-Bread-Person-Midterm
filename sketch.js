/*
NOTE: GE now equals = Gender Identity
      GI now equals = Sexual Attraction
      SA now equals = Gender Expression
*/

var img;

var GErSlider, GEbSlider;
var RArSlider, RAbSlider;

var GIrSlider, GIbSlider;
var SArSlider, SArSlider;
var prevGIrSlider, prevGIbSlider;
var multiBubblesR = [];
var multiBubblesB = [];

var input, button, greeting;

var buttonS;

var sliderMax = 20;
var bubSize = 70;

var GEx = 20;
var GEy = 100;
var GIx = 320;
var GIy = 100;
var SAx = 20;
var SAy = 400;

function setup() {
  createCanvas(500,650);
  img = loadImage("assets/GBPmask.png");
  
  //starting name
  input = createInput();
  input.position(100,50);
  
  button = createButton('Load Name');
  button.position(235,50);
  button.mousePressed(name);
  
  greeting = createElement('h2','what do you call yourself?');
  greeting.position(100,0);

  //RA Sliders
  // //Red
  // RArSlider = createSlider(0,255,0);
  // RArSlider.position()
  
  //GE Sliders
  //RED
  GErSlider = createSlider(0,255,0);
  GErSlider.position(GEx+30,GEy+20);
  //BLUE
  GEbSlider = createSlider(0,255,0);
  GEbSlider.position(GEx+30,GEy+50);
  
  // GI Sliders
  //RED
  for (var i = 0; i < 0; i++){
    var newBubbleR = new bubblesR(random(100,400),random(200,600), bubSize);
    multiBubblesR.push(newBubbleR)
  }
  noStroke();
  
  GIrSlider = createSlider(0,sliderMax,0);
  GIrSlider.position(GIx+30,GIy+20);
  
  //BLUE
  for (var i = 0; i < 0; i++){
    var newBubbleB = new bubblesB(random(100,400),random(200,600), bubSize);
    multiBubblesB.push(newBubbleB)
  }
  noStroke();
  
  GIbSlider = createSlider(0,sliderMax,0);
  GIbSlider.position(GIx+30,GIy+50);

  //SA Sliders
  //RED
  
  SArSlider = createSlider(0,255,0);
  SArSlider.position(SAx+30,SAy+20);
  
  //BLUE
  
  SAbSlider = createSlider(0,255,0);
  SAbSlider.position(SAx+30,SAy+50);

  // //Save Canvas
  buttonS = createButton('Save');
  buttonS.position(310,50);
  // buttonS.mousePressed(saveCanvas('myCanvas', 'png'));
}

function draw() {
  fill(255);
  rect(-10,-10,width+10,height+10);
  
  //Gender Expression for real
  var GendR = SArSlider.value();
  var GendG = 0;
  var GendB = SAbSlider.value();
  

  
  noStroke();
  //GE
  var GEg;
  var GEr;
  var GEb;
  
//THIS IS AN ERROR???
  if (GEr < 10 && GEb < 10){
    GEg =255;
    GEr =255;
    GEb =255;
  }else {
    GEg = 0;
    GEr = GErSlider.value();
    GEb = GEbSlider.value();
  }
  fill(GEr,GEg,GEb);
  rect(0,150,500,500);
  
  //GI
  //RED
  var curGIrSlider = GIrSlider.value();
  console.log(curGIrSlider);
  if (curGIrSlider != prevGIrSlider){
    
    var change = curGIrSlider - prevGIrSlider;
    if (change > 0 ) {
      for (var i =0; i < curGIrSlider - prevGIrSlider; i++){
        var newBubbleR = new bubblesR(random(100,400),random(200,600), bubSize);
        multiBubblesR.push(newBubbleR);
      }
      
    }else{
      for (var i = 0; i <abs(change); i++){
        multiBubblesR.pop();
      }
    }
    
    prevGIrSlider = curGIrSlider;
  }

  for (var i =0; i < multiBubblesR.length; i++){
    multiBubblesR[i].display();
  }
  //BLUE
  var curGIbSlider = GIbSlider.value();
  console.log(curGIbSlider);
  if (curGIbSlider != prevGIbSlider){
    
    var change = curGIbSlider - prevGIbSlider;
    if (change > 0 ) {
      for (var i =0; i < curGIbSlider - prevGIbSlider; i++){
        var newBubbleB = new bubblesB(random(100,400),random(200,600), bubSize);
        multiBubblesB.push(newBubbleB);
      }
      
    }else{
      for (var i = 0; i <abs(change); i++){
        multiBubblesB.pop();
      }
    }
    
    prevGIbSlider = curGIbSlider;
  }
  
  for (var i =0; i < multiBubblesB.length; i++){
    multiBubblesB[i].display();
  }
  
  
  //text and stuff
  image(img,0,150);
  fill('black');
  textSize(12);
  text("Woman",GEx,GEy+20);
  text("Man",GEx,GEy+50);
  text("Women",GIx,GIy+20);
  text("Men",GIx,GIy+50);
  text("Feminine",SAx,SAy+20);
  text("Masculine",SAx,SAy+50);
  textSize(15);
  text("Gender Identity",GEx,GEy);
  text("Sexual Attraction",GIx,GIy);
  text("Gender Expression",SAx,SAy);
  stroke(GendR,GendG,GendB);
  line(300,190,450,190);
  line(450,190,450,625);
  line(450,625,300,625);
  line(301,191,451,191);
  line(451,191,451,626);
  line(451,626,301,626);
}

function bubblesR(tempX, tempY, tempDiam){
  this.x = tempX;
  this.y = tempY;
  this.diameter= tempDiam;
  
  this.display = function(){
    fill('rgba(255,0,0,.5)');
    ellipse(this.x,this.y,this.diameter,this.diameter);
  }
}

function bubblesB(tempX,tempY,tempDiam){
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiam;
  
  this.display = function(){
    fill('rgba(0,0,255,.5)');
    ellipse(this.x,this.y,this.diameter,this.diameter);
  }
}

function name(){
  var name = input.value();
  greeting.html('This is '+name+'.');
  input.value('');
}
