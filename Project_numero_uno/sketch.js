let redOrWhite;
let backgroundRed=116;
let backgroundBlue=255;
let leftClicker = false;
let rightClicker = false;
let maximumStars;
let maximumSquares=5;
let ylocStart=750;
let box1;
let box2;
let numberOfStars=1;
let numberOfSquares=1;
let move=200;
allMove=200;
let stars=[maximumStars];
let squares=[maximumSquares]
let clock;
let totalStars=0;
let totalSquares=0;

function setup() {
  maximumSquares=floor(random(20,30));
  maximumStars=floor(random(20,30));
  stars=[maximumStars];
  createCanvas(720, 720);
  background(99, 110, 114);
  ellipseMode(CENTER);
  rectMode(CENTER);
 smooth();
 box1 = new Box(1); //left booth
 box2 = new Box(2); //right booth
 clock = new Clock(2750); //clock for blue circles
 clock2 = new Clock(2750); //clock for red squares
// stars[0] = new Bouncer(415,height+250);
//  stars[1] = new Bouncer(415,height+250);
 for (let i = 0; i<maximumStars;i++){
    stars[i] = new Bouncer(385,height);
  } 
  for (let i = 0; i < maximumSquares;i++){
    squares[i]= new Bouncer(470,height);
  }
clock.start(); //start timer
clock2.start();
}


function draw() {
//  print("total"+totalStars);
//  print("max"+maximumStars);
  // star creation is adapted from 
  //http://learningprocessing.com/exercises/chp10/exercise-10-04-improved-rain-game
 //print(totalSquares);
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
  if (clock.isFinished()){
    if ((totalStars < stars.length)&&(leftClicker==true)){
      stars[totalStars]= new Bouncer(270,height);
      totalStars+=1;
    }
    clock.start();
  }
    if (clock2.isFinished()){
    if ((totalSquares < squares.length)&&(rightClicker==true)){
      squares[totalSquares]= new Bouncer(470,height);
      totalSquares+=1;
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
}

function mouseDragged(){
  for (let i = 0; i<totalStars;i++){
    stars[i].dragged(mouseX,mouseY);
  }
    for (let i = 0; i<totalSquares;i++){
    squares[i].dragged(mouseX,mouseY);
  }
}

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
}

class Box {
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

speed(){
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
        translate(0,this.yloc-650,25,25);
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
        translate(0,this.yloc-650,25,25);
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
       translate(0,this.yloc-650,25,25);
      this.letterSpeed=0;
      this.scale=1;
      this.yloc=-1000;
    }
  }
}

launch(){
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
}

light(){
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
}

bounds(){
if (mouseIsPressed==true){
	if ((this.distanceX<42.5)&&(this.distanceY<150))
	{
  	return true;

	}
	else{

  	return false;
		}
	}
}

envelope(whichSide){
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

else if (whichSide==2){
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

class Bouncer {
  constructor(x,y){
this.pos = createVector(x,y);
this.vel = createVector(0,-3);
this.randomDirection;
this.redWhite=true;
    this.blueWhite=true;
}

display(){
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
/*intersects(other){
  let howFar;
  howFar= dist(this.pos.x,this.pos.y,other.pos.x,other.pos.y);
  return (howFar < 126 );
}
*/

displaySquare(){
  if (frameCount%7==0){
    this.redWhite=!this.redWhite
  }
  push();
  translate(this.pos.x,this.pos.y);
  scale(0.85);
   rotate(frameCount / 100.0);
   noStroke();
  //fill(255,0,0);
   if (this.redWhite==true){
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
launcher(){
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
  let distance = dist(px,py,this.pos.x,this.pos.y);
  if (distance<63){
    this.pos.x=px;
    this.pos.y=py;
  }
}

squareLauncher(){
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

class Clock{ //adapted from Shiffman 
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
