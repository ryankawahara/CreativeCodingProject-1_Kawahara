//Ryan Kawahara Project 1 (revised)
//Oct 30, 2020

//instructions: After the introductory screen, you can interact! Click on one or both of the two ballot boxes.
//You can also click and drag the stars or squares to move them around the screen.

let redOrWhite; //used to make the stripe squares alternate colors
let leftClicker = false; //used to make the left box work when clicked
let rightClicker = false; //used to make the right box work when clicked
let maximumStars; //used to determine how many stars to create
let maximumSquares; //used to determine how many squares ot create
let ylocStart=750; //starts the ballots off screen
let box1; //left ballot box
let box2; //right ballot box
let move=200; //these two variables are used to move the ballot boxes
let allMove=200;//spaces out the two ballot boxes
let stars=[maximumStars]; //array of objects to create stars
let squares=[maximumSquares];// array of objects to create squares
let clock; //clock for stars
let clock2; //clock for squares
let totalStars=0; //keeps track of how many stars there are
let totalSquares=0; //keeps track of how many squares there are
let screen=1; //starts on the first screen
let screenClock; //creates clock for timing on the first screen
let fadeOut=100; //fades in the next screen
let screenStar; //creates the star on the first screen
let screenStarx=0; // the x and y position for the star on the first screen
let screenStary=0;
let screenSquarex=0; //the x and y position for the square on the first screen
let screenSquarey=0;
let screenSquare; //creates a square on the first screen
 let screenStarxSpeed=2; //the speed of the two moving objects on the first screen
 let screenSquarexSpeed=2;
 let bounceClock; //times out how long the two are touching before they bounce apart
  let fillOpacity=25; //these variables and the ones below manipulate the bars that appear on the government building
  let rightFillOpacity=25;
  let middleFillOpacity=25;
let leftGrow=0;
let leftGrowFill=0;
let leftAddClock;
let rightGrow=0;
let rightGrowFill=0;
let rightAddClock;
let starsDone =false;
let squaresDone=false;
let whichColor;

function setup() {
  maximumSquares=floor(random(10,20)); //randomly generates how many squares to draw
  maximumStars=floor(random(10,20)); //randomly generates how many stars to draw
  stars=[maximumStars];//creates a star array with the randomly generated number of slots
  squares=[maximumSquares];// array of objects to create squares
  createCanvas(720, 720);
  background(99, 110, 114);
  ellipseMode(CENTER);
  rectMode(CENTER);
 smooth();
 box1 = new Box(1); //left booth
 box2 = new Box(2); //right booth
 clock = new Clock(2750); //clock for blue circles
 clock2 = new Clock(2750); //clock for red squares
 bounceClock= new Clock(10000);// pause before bounce
  leftAddClock= new Clock(2740);
  rightAddClock= new Clock(2740);
screenClock=new Clock (12000); //clock for first screen sequence
  screenStar = new Bouncer(-80,150);
  screenSquare = new Bouncer(450,150);
// stars[0] = new Bouncer(415,height+250);
//  stars[1] = new Bouncer(415,height+250);
//these two loops initialize a bunch of stars and squares
 for (let i = 0; i<maximumStars;i++){
    stars[i] = new Bouncer(385,height);
  } 
  for (let i = 0; i < maximumSquares;i++){
    squares[i]= new Bouncer(470,height);
  }
clock.start(); //spaces out the stars so they're not all shot at the same time
clock2.start(); //spaces out the squares so they're not all shot at the same time
screenClock.start(); //times out how long before changing from the first screen to second screen
bounceClock.start(); //times out how long the two objects in the start screen are touching before they bounce away
    leftAddClock.start();
    rightAddClock.start();
}//setup


function draw() {
  if (screen == 1){
  background(99, 110, 114,80);
    screen1();
  }
  else if (screen==2){
    screen2();
    fill(99, 110, 114,fadeOut);
    rect(width/2,height/2,width+10,height+10);
    fadeOut=fadeOut-5; //makes the screen fade in
  }
  if (screenClock.isFinished()){
    screen=2;
  }
}//draw

function screen1(){
  push();
  translate(screenStarx,screenStary);
     screenStarx+=screenStarxSpeed;
  if (screenStarx>475){
    screenStary+=(random(-2,2));
 
   if (bounceClock.isFinished()==false){
    	screenStarxSpeed= 0;
    }
      else if (bounceClock.isFinished()==true){//star moves in opposite direction after a few seconds
 screenStarxSpeed= -6;
    }
  }
 scale(2);
  screenStar.display();
  pop();
  push();
   translate(screenSquarex,screenSquarey);
   screenSquarex-=screenSquarexSpeed;
  if(screenSquarex<-470){
     screenSquarey+=(random(-2,2));
      if (bounceClock.isFinished()==false){
    	screenSquarexSpeed= 0;
    //	print(screenSquarex);
    }
      else if (bounceClock.isFinished()==true){ //square moves in opposite direction after a few seconds
 screenSquarexSpeed= -6;
    }
  }
   scale(2);
  screenSquare.displaySquare();
  pop();
}//screen1

function screen2(){
  //  print("total"+totalStars);
//  print("max"+maximumStars);
  // star creation is adapted from 
  //http://learningprocessing.com/exercises/chp10/exercise-10-04-improved-rain-game
 //print(totalSquares);

//background changes color depending on whether there or more squares than stars or vice versa
  if ((totalStars==0)&&(totalSquares==0)){
      background(99, 110, 114,80);
  }
   else if (totalStars>totalSquares){
     background(116, 185, 255,80);
    
  }
  else if (totalSquares>totalStars){
      background(214, 48, 49,80);
      
  }
  else if (totalSquares==totalStars){
    background(108, 92, 231,80);
  }
  stroke(0);
  fill(247, 241, 227);
   buildingBackground();
   noStroke();
   if (totalStars<maximumStars){
   	starsDone=false;
   }
   else if (totalStars>=maximumStars){
   	starsDone=true;
   }
    if (totalSquares<maximumSquares){
   	squaresDone=false;
   }
   else if (totalSquares>=maximumSquares){
   	squaresDone=true;
   }

 
  if ((totalStars>=maximumStars)&&(squaresDone==false)&&(leftGrowFill==-210)){
      fill(116, 185, 255,fillOpacity); //fill blue if maximum stars are created
    fillOpacity+=10;
  buildingBackground();
  whichColor=1;
  }
  	if (((totalStars>=maximumStars))&&(totalSquares>=maximumSquares)){
		//below if statements cause the building to remain the color that it became first,
		//even if the number of stars and squares is the same
		if (whichColor==1){
			  fill(116, 185, 255);
			  buildingBackground();
		}
		else if (whichColor==2){
			fill(214, 48, 49);
			  buildingBackground();
		}
  }
  else if (totalSquares>=maximumSquares&&(starsDone==false)&&(rightGrowFill==-210)){
  	fill(214, 48, 49,rightFillOpacity); //fill red if maximum squares are created
    rightFillOpacity+=10;
  buildingBackground();
  whichColor=2;
  }
rectMode(CENTER);
  if (clock.isFinished()){
    if ((totalStars < stars.length)&&(leftClicker==true)){
      stars[totalStars]= new Bouncer(270,height);
      totalStars+=1;
      if (leftAddClock.isFinished()){
         leftGrow-=210/maximumStars; //increase transparent blue bar
        leftAddClock.start();
    
      }
    }
    clock.start();
  }
    if (clock2.isFinished()){
    if ((totalSquares < squares.length)&&(rightClicker==true)){
      squares[totalSquares]= new Bouncer(470,height);
      totalSquares+=1;
       if (rightAddClock.isFinished()){
         rightGrow-=210/maximumSquares; //increase transparent red bar
        rightAddClock.start();
        
      }
    }
    clock2.start();
  }
//  push();
 // translate(100, 100);
  //  rotate(radians(15));
 // rotate(frameCount / 200.0);
//  pop();
 // star.move();
 //   star.display();
  //rectangle();
    //  println(choose);
    for (let i=0;i<totalStars;i++){
       stars[i].display();
       stars[i].launcher();
      /* for (other of stars){
        if ((stars[i]!==other)&&(stars[i].intersects(other)))
        {
         // print("boink");
         ellipse(width/2,height/2,50);
       //  // stars[i].vel.x=stars[i].vel.x*-1;
        //  stars[i].vel.y+=p5.Vector.random2D().setMag(1);
         // stars[i].vel.y+=stars[i].randomDirection.y;
         // stars[i].vel.x=stars[i].vel.x*-1;
          //other.vel.x=other.vel.x*-1;
        //  stars[i].vel.y+= (stars[i].randomDirection.y)/10;
        }
        else{
          print("no");
        }
       } */
     }
     for (let j=0;j<totalSquares;j++){
        squares[j].displaySquare();
       squares[j].squareLauncher();
     }
    push();
    translate(allMove,0)
    translate(70,650);
    box1.launch();
   // box1.light();
   // box1.speed();
    box1.distanceX=dist(mouseX,0,70+allMove,0);
    box1.distanceY=dist(0,725,0,mouseY,);
   // print(dist(70,725,0,box1.yLoc));
    translate(move,0);
    box2.launch();
   //box2.light();
   //box2.speed();
    box2.distanceX=dist(mouseX,0,70+move+allMove,0);
    box2.distanceY=dist(0,725,0,mouseY,);
     // print(box2.distanceX+","+box2.distanceY);
    pop();
   // println(clicker);
   fill(0);
    /*if (clicker == true){
        rect(70,yloc,25,25);
     //   println("hello");
        yloc-=speed;
    }
    if (yloc<625){
        yloc=720;
    }
   */
}//screen2

function buildingBackground(){ //draws a building in a style typical to most goverment buildings
  rectMode(CORNER);
 //fill(247, 241, 227);
  push();
  translate(width/2,height/2);
  scale(0.75);

    rect(-30,90,60,-210); // center pillars
    push();
  translate(-25,0)
    rect(400/3,90,60,-210);
  pop();
    push();
  translate(25,0)
    rect(-400/3-65,90,60,-210);

  noStroke();

  if (leftGrowFill>leftGrow){
 
  leftGrowFill-=1;
  }
  	  fill(116, 185, 255,95);
     rect(-400/3-65,90,60,leftGrowFill); //fill bar

  if (rightGrowFill>rightGrow){
  	rightGrowFill-=1;


  }
    	fill(214, 48, 49,95);
   rect(400/3-50,90,60,rightGrowFill);
  pop();
    
  
    rect(-400/3-65,90,400,40); //basebottom

    push();
  translate(0,-10);
  triangle(-400/3-67,-150,400/3+67,-150,-0,-250);

  pop();
      rect(-400/3-67,-160,400,40); //basetop


  
  pop();
  strokeWeight(1);
}

function mouseDragged(){
  for (let i = 0; i<totalStars;i++){
    stars[i].dragged(mouseX,mouseY);
  }
    for (let i = 0; i<totalSquares;i++){
    squares[i].dragged(mouseX,mouseY);
  }
}//mouseDragged

function mousePressed(){
//  print("x"+mouseX+",y"+mouseY);
//  fill(255,0,0);
 /* if ((mouseX>45)&&(mouseX<96)&&(mouseY>575)){
   yloc=720;
    leftClicker = !leftClicker;
  }
*/
/*if ((box1.distanceX<42.5)&&(box1.distanceY<150))
{
  box1.yloc=ylocStart;
  leftClicker = !leftClicker
}
*/
/*if ((box2.distanceX<42.5)&&(box2.distanceY<150))
{
  box2.yloc=ylocStart;
  rightClicker = !rightClicker;
}
*/
if ((box1.bounds()==true)){
box1.yloc=ylocStart;
  leftClicker = !leftClicker
  box1.opacity=0;
  box1.fadeOutOpacity=100;
  box1.scale=1;
  box1.boxOpening=0;
}
if ((box2.bounds()==true)){
 box2.yloc=ylocStart;
  rightClicker = !rightClicker
  box2.opacity=0;
  box2.fadeOutOpacity=100;
  box2.scale=1;
  box2.boxOpening=0;
}
}//mousePressed

class Box { //this class is used in creating the ballot boxes and animating the ballots
  constructor(side){
    this.side=side;
    this.distanceX=0;
    this.distanceY=0;
    this.yloc=ylocStart;
    this.opacity=0;
    this.fadeOutOpacity=0;
    this.scale=1;
    this.boxOpening=0;
    this.letterSpeed=1;
  }

speed(){ //moves the ballots into the ballot box
  fill(0);
if ((leftClicker == true)&&(this.side==1)){
    if (totalStars==maximumStars){
      this.yloc=1000;
      this.letterSpeed=0;
      this.scale=1;
    }
    else{
        // rect(0,this.yloc-650,25,25);
        push();
        scale(this.scale);
        translate(0,this.yloc-650);
       // rect(0,0,25,25);
        this.envelope(1);
        pop();
     //   println("hello");
       this.yloc-=this.letterSpeed;
       this.scale-=0.0025;
       noStroke();
       fill(0,this.boxOpening);
       rect(0,-25,50,30);
       this.boxOpening+=1.55;
     }
    }
    if (this.yloc<600){ //625 This resets for each ballot turned in
      this.scale=1;
        this.yloc=ylocStart; //720
         this.boxOpening=0;
    }
    /*
    if (box2.yloc<623){
      box2.yloc=ylocStart;
    }
    */
  else if ((rightClicker==true)&&(this.side==2))
  {
    //rect(0,this.yloc-650,25,25);
     //   println("hello");
      push();
       scale(this.scale);
        translate(0,this.yloc-650);
       // rect(0,0,25,25);
        this.envelope(2);
        pop();
        this.yloc-=this.letterSpeed;
         this.scale-=0.0025;
           noStroke();
       fill(0,this.boxOpening);
       rect(0,-25,50,30);
       this.boxOpening+=1.55;
        if (totalSquares>=maximumSquares){
       translate(0,this.yloc-650);
      this.letterSpeed=0;
      this.scale=1;
      this.yloc=-1000;
    }
  }
}

launch(){ //this function moves the ballots and also animates the light.
	//also draws the ballot boxes
  this.bounds();
  stroke(0); 
  fill(255);
  rect(0,0,85,150); //white box
  fill(0);
  rect(0,-25,50,30); //black box
    fill(255);
    ellipse(0,-55,20,20);
    this.light();
    this.speed();
}//launch

light(){ //makes the light on the ballot box fade in and out
  if ((leftClicker == true)&&(this.side==1)){
  fill(76, 209, 55,this.opacity);
  //print(opacity);
  ellipse(0,-55,20,20);
  this.opacity+=10;
  }
  else if ((leftClicker == false)&&(this.side==1)){
  fill(76, 209, 55,this.fadeOutOpacity);
  ellipse(0,-55,20,20);
  this.fadeOutOpacity-=10;
  }
 /* else{
  fill(255);
    ellipse(0,-55,20,20);
  }
  */
  if ((rightClicker == true)&&(this.side==2)){
   fill(76, 209, 55,this.opacity);
  ellipse(0,-55,20,20);
   this.opacity+=10;
  }
    else if ((rightClicker == false)&&(this.side==2)){
  fill(76, 209, 55,this.fadeOutOpacity);
  ellipse(0,-55,20,20);
  this.fadeOutOpacity-=10;
  }
  /*else{
  fill(255);
    ellipse(0,-55,20,20);
  }
  */
}//light

bounds(){//determines whether the ballot box has been clicked or not
if (mouseIsPressed==true){
	if ((this.distanceX<42.5)&&(this.distanceY<150))
	{
  	return true;

	}
	else{

  	return false;
		}
	}
}//bounds

envelope(whichSide){//creates the ballots that go into the ballot boxes
/*fill(255);
rect(0,0,25,45);
strokeWeight(0.5);
fill(195,0,25);
rect(0,10,10,10);
fill(40,154,218);
rect(0,-10,10,10);
*/
if (whichSide==1){ //if left side, top box is blue
push();
scale(0.75);
 push();
  fill(255);
   // translate(width/2,height/2);
  beginShape(QUADS);
    vertex(20,-20);
    vertex(-20,-20);
//bottom half of white reectangle
    vertex(-30,40);
   vertex(30,40);
  endShape();
  push();
  translate(0,-5);
  scale(0.35);
    beginShape(QUADS);
    //blue checkbox
  fill(40,154,218);
    vertex(20,-20);
    vertex(-20,-20);
  //bottom half
    vertex(-25,30);
   vertex(25,30);
  endShape();
  pop();
    push();
  translate(0,22);
  scale(0.35);
    beginShape(QUADS);
    //bottom checkbox
  fill(255);
    vertex(20,-20);
    vertex(-20,-20);
  //bottom half
    vertex(-25,30);
   vertex(25,30);
  endShape();
  pop();
  pop();
  pop();
}

else if (whichSide==2){ //right side has red box instead of blue box
push();
scale(0.75);
 push();
  fill(255);
   // translate(width/2,height/2);
  beginShape(QUADS);
    vertex(20,-20);
    vertex(-20,-20);
//bottom half of white rectangle
    vertex(-30,40);
   vertex(30,40);
  endShape();
  push();
  translate(0,-5);
  scale(0.35);
    beginShape(QUADS);
    //white checkbox
  fill(255);
    vertex(20,-20);
    vertex(-20,-20);
  //bottom half
    vertex(-25,30);
   vertex(25,30); 
  endShape();
  pop();
    push();
  translate(0,22);
  scale(0.35);
    beginShape(QUADS);
    //red checkbox
fill(195,0,25);
    vertex(20,-20);
    vertex(-20,-20);
  //bottom half
    vertex(-25,30);
   vertex(25,30);
  endShape();
  pop();
  pop();
  pop();
}
}
}

class Bouncer { //this class is used to create the bouncing stars and squares
  constructor(x,y){
this.pos = createVector(x,y);
this.vel = createVector(0,-3);
this.randomDirection;
this.redWhite=true;
    this.blueWhite=true;
}

display(){ //draws the stars
  if(frameCount%7==0){
    this.blueWhite=!this.blueWhite;
  }
  if (this.blueWhite==true){
    fill(40, 154, 218);
  }
  else{
    fill(255);
  }
  noStroke();
  //background blue circle
 //I got this code to draw a star from: 
 //https://stackoverflow.com/questions/53799599/how-to-draw-a-star-shape-in-processingjs
  push();
 // rotate(frameCount / 200.0);
  translate(this.pos.x,this.pos.y);
    scale(0.65);
  //print(this.pos.x,"+",this.pos.y);
   circle(0, 0, 125);
  stroke(255);
   if (this.blueWhite==true){
     fill(255);
  }
  else{
    fill(40, 154, 218);
  }
  strokeWeight(2);
  rotate(frameCount / -100.0); //rotates the star
  beginShape();
  vertex(0, -50);
  vertex(14, -20);
  vertex(47, -15);
  vertex(23, 7);
  vertex(29, 40);
  vertex(0, 25);
  vertex(-29, 40);
  vertex(-23, 7);
  vertex(-47, -15);
  vertex(-14, -20);
  endShape(CLOSE);
  pop();
}

displaySquare(){ //draws the striped squares
  if (frameCount%7==0){
    this.redWhite=!this.redWhite
  }
  push();
  translate(this.pos.x,this.pos.y);
  scale(0.85);
   rotate(frameCount / 100.0);
   noStroke();
  //fill(255,0,0);
   if (this.redWhite==true){ //this code makes it so that the colors alternate
     // println("white");
      redOrWhite=color(255);
    //  println("yep");
    }
    else{
    //  println("red");
        redOrWhite=color(255,0,0);
       // println("nope");
    }
    fill(redOrWhite);
  rect(0,0,75,75);
  for(let i=-30; i<40;i+=10){
        if (this.redWhite==true){
     // println("white");
      redOrWhite=color(255,0,0);
    }
    else{
    //  println("red");
        redOrWhite=color(255);
    }
  //  fill(0,255,0);
  fill(redOrWhite);
      rect(0,i,75,5);
  }
  pop();
}

move(){ //adapted from Shiffman 1.2 video on Vectors
this.pos.add(this.vel);
  this.randomDirection=p5.Vector.random2D().setMag(1);
 // this.randomDirection.mult(1.5);
if ((this.pos.x > 720)||(this.pos.x<0)){
  this.vel.x=this.vel.x*-1;
this.vel.y+=this.randomDirection.y;
}
if ((this.pos.y>720)||(this.pos.y<0)){
  this.vel.y=this.vel.y*-1;
    this.vel.x+=this.randomDirection.x;
 // print(this.pos.y);
 // print('hi');
}
}
/*moveSquare(){
this.pos.add(this.vel);
  this.randomDirection=p5.Vector.random2D().setMag(1);
 // this.randomDirection.mult(1.5);
if ((this.pos.x > 720)||(this.pos.x<0)){
  this.vel.x=this.vel.x*-1;
this.vel.y+=this.randomDirection.y;
}
if ((this.pos.y>720)||(this.pos.y<0)){
  this.vel.y=this.vel.y*-1;
    this.vel.x+=this.randomDirection.x;
  //print(this.pos.y);
 // print('hi');
}
}
*/
launcher(){ //launches the stars
  if (leftClicker == true){
push();
      translate(-allMove,0)
    translate(-70,-650);
     this.move();
    //this.display();
      pop();
}
}

dragged(px,py){ 
	//my favorite function! This one lets you drag and collect stars and squares
	//and move them around
  let distance = dist(px,py,this.pos.x,this.pos.y);
  if (distance<63){
    this.pos.x=px;
    this.pos.y=py;
  }
}

squareLauncher(){ //lauches the squares
  if (rightClicker == true){
push();
    translate(-allMove,0)
    fill(0);
    translate(-70,-650);
     this.move();
    //this.display();
      pop();
}
}
}

class Clock{ //adapted from Shiffman. Used to time things out
//http://learningprocessing.com/exercises/chp10/exercise-10-04-improved-rain-game
  constructor(tempTotalTime){
  this.savedTime; //When clock is started
  this.totalTime=tempTotalTime;
  this.passedTime;
  }
  setClock(t){
    this.totalTime=this.t;
  }
  //start the clock
  start(){
    this.savedTime=millis();
  }
  isFinished(){
    //check how much time has passed
    this.passedTime=millis()-this.savedTime;
    if(this.passedTime > this.totalTime){
      return true;
    }
    else{
      return false;
    }
  }
}
