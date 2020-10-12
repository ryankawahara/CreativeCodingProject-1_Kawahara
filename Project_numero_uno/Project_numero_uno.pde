color redOrWhite;
int choose = 1;

void setup() {
  
  size(500, 500);
  ellipseMode(CENTER);
  rectMode(CENTER);
 smooth();
}


void draw() {
 
  background(255);
  pushMatrix();
  translate(100, 100);

  //  rotate(radians(15));
  rotate(frameCount / 200.0);
    star();

  
  popMatrix();
      rectangle();
      choose+=1;
    //  println(choose);
}

void star() {
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

void rectangle(){
  noStroke();
  //fill(255,0,0);
   if (choose%8==0){
     // println("white");
      redOrWhite=color(255);
      println("yep");
    
    }
    else{
    //  println("red");
        redOrWhite=color(255,0,0);
        println("nope");
        
    }
    fill(redOrWhite);
  rect(250,250,115,75);
  

//  fill(0,255,0);

  for(int i=220; i<290;i+=10){
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

void mousePressed(){
  
  
  
}

  
