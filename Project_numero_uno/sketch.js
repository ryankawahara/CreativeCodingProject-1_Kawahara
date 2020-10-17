let redOrWhite;
let choose = 1;
let leftClicker = false;
let rightClicker = false;
let speed;
let ylocStart=750;

let box1;
let box2;
let move=200;
allMove=200;

function setup() {
  speed = 1;
  createCanvas(720, 720);
  background(116, 185, 255);
  ellipseMode(CENTER);
  rectMode(CENTER);
 smooth();
 
 box1 = new Box(1);
 box2 = new Box(2);
}


function draw() {
 
  background(116, 185, 255);
  push();
  translate(100, 100);

  //  rotate(radians(15));
  rotate(frameCount / 200.0);
    star();

  
  pop();
  rectangle();
      choose+=1;
    //  println(choose);

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

function star() {
  fill(40, 154, 218);
  noStroke();
  circle(0, 0, 125);
  stroke(255);
  fill(255);
  strokeWeight(2);

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
}

function rectangle(){
  noStroke();
  //fill(255,0,0);
   if (choose%8==0){
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
  rect(250,250,115,75);
  

//  fill(0,255,0);

  for(let i=220; i<290;i+=10){
        if (choose%8==0){
     // println("white");
      redOrWhite=color(255,0,0);
    
    }
    else{
    //  println("red");
        redOrWhite=color(255);
        
    }
    
  //  fill(0,255,0);
  fill(redOrWhite);
      rect(250,i,115,5);

    
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
	rightClicker = !rightClicker

}
*/

if ((box1.bounds()==true)){

box1.yloc=ylocStart;
	leftClicker = !leftClicker
	box1.opacity=0;
	box1.fadeOutOpacity=100;

}
if ((box2.bounds()==true)){

		box2.yloc=ylocStart;
	rightClicker = !rightClicker
	box2.opacity=0;
	box2.fadeOutOpacity=100;
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
	}
speed(){
	fill(0);
if ((leftClicker == true)&&(this.side==1)){
      
        // rect(0,this.yloc-650,25,25);
        push();
        translate(0,this.yloc-650,25,25);
       // rect(0,0,25,25);
      	this.envelope();
        pop();
     //   println("hello");
       this.yloc-=speed;

      
    }
    if (this.yloc<623){ //625
      
        this.yloc=ylocStart; //720

    }
    /*
    if (box2.yloc<623){

    	box2.yloc=ylocStart;

    }
    */

  else if ((rightClicker==true)&&(this.side==2))
  {
  	rect(0,this.yloc-650,25,25);
     //   println("hello");
        this.yloc-=speed;


  }
  

}

launch(){
	this.bounds();
  stroke(0); 
  fill(255);
  rect(0,0,85,150); //white box
  fill(0);
  rect(0,-25,50,30); //block box
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
  print("yow");



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
envelope(){
fill(255);
rect(0,0,25,45);
strokeWeight(0.5);
fill(195,0,25);
rect(0,10,10,10);
fill(40,154,218);
rect(0,-10,10,10);


}


}

  