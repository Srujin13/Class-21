var fixedRect, movingRect, ob1, ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1 = createSprite(200,100,50,50);
  ob1.shapeColor = "red";
  ob2.shapeColor = "red";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, ob1)){
    movingRect.shapeColor = "red";
    ob1.shapeColor ="red";
  }
  else{
    movingRect.shapeColor = "green";
    ob1.shapeColor ="green";
  }
    

  
  drawSprites();
}

function isTouching(A,B){
  if (A.x - B.x < B.width/2 + A.width/2
    && B.x - A.x < B.width/2 + A.width/2
    && A.y -B.y < B.height/2 + A.height/2
    && B.y - A.y < B.height/2 + A.height/2)
     {
  return true;
}
else {
  return false;
} 
}